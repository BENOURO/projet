<template>
  <form @submit.prevent="onSubmit" class="review-form">
    <h3>Laisser un commentaire</h3>
    <label for="name">Nom:</label>
    <input type="text" id="name" v-model="name" required />

    <label for="review">Commentaire:</label>
    <textarea id="review" v-model="review" required></textarea>

    <label for="rating">Évaluation:</label>
    <select id="rating" v-model.number="rating" required>
      <option disabled value="">Choisissez une évaluation</option>
      <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
    </select>

    <label for="recommend">Recommandez-vous ce produit ?</label>
    <select id="recommend" v-model="recommend" required>
      <option value="" disabled>Choisissez une option</option>
      <option value="yes">Oui</option>
      <option value="no">Non</option>
    </select>

    <button type="submit" class="button">Envoyer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recommend: "",
    };
  },
  methods: {
    onSubmit() {
      const productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };
      this.$emit("review-submitted", productReview);
      this.resetForm();
    },
    resetForm() {
      this.name = "";
      this.review = "";
      this.rating = null;
      this.recommend = "";
    },
  },
};
</script>

<style scoped>

</style>
