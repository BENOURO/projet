<template>
  <div class="about">
    
    <img src="../assets/images/fam.png" class="img-fluid image" alt="..." />

    <div class="container">
      <nav class="navbar navbar-expand-lg bg-white justify-content-center mb-4">
        <div class="container-fluid justify-content-center">
          <ul class="navbar-nav ms-5 me-5 justify-content-center">
            
            <li class="nav-item ms-5 me-5">
              <router-link class="nav-link link-info" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"
                  />
                </svg>
                Accueil
              </router-link>
            </li>

           
            <li class="nav-item ms-5 me-5">
              <router-link class="nav-link link-info" to="/Home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-shop"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"
                  />
                </svg>
                Boutique
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

   
    <div class="container-description">
      <div class="col-md-6">
        <img id="carte" src="../assets/images/grp1.jpg" class="img-fluid d-lg-bloc rounded-start" alt="..." />
      </div>
      <div class="col-md-5 align-middle mt-5 ms-4">
        <div class="card-body">
          <h5 class="card-title text-center mt-5">HAPPYFULL</h5>
          <p class="card-text text-center">
            Des bonbons gélifiés de toutes les tailles, de toutes les formes et de toutes les couleurs. Un plaisir à
            partager entre grands et petits.
          </p>
        </div>
      </div>
    </div>

    
    <div class="p">
    
      <div class="container mt-4">
        <ReviewForm @review-submitted="addReview" />
      </div>

    
      <div class="container mt-4" id="list">
        <ReviewList :reviews="reviews" />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewForm from "@/components/ReviewForm.vue";
import ReviewList from "@/components/ReviewList.vue";

export default {
  name: "AboutView",
  components: { ReviewForm, ReviewList },
  data() {
    return {
      reviews: [], 
    };
  },
  methods: {
    addReview(review) {
      this.reviews.push(review); 
    },
  },
};
</script>

<style scoped>

</style>


<style scoped>
.image {
  width: 100%;
  height: auto;
}
#carte{
  width: 700px;
  height: 500px;

}
.nav-link {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.col-md-6,
.col-md-5 {
  display: flex;
  align-items: center;
}
.container-description {
  display: flex;
  flex-direction: row-reverse; 
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}
.card-body {
  text-align: left;
}
.p {
  display: flex;
}
.review-container{
  margin-top: px;
}
</style>

