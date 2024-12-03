<template>
  <div class="card w-80">
    <img :src="shop.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ shop.name }}</h5>
      <ul class="list-inline">
        <li class="list-inline-item">
          <span class="badge rounded-pill bg-primary">70 gr</span>
        </li>
        <li class="list-inline-item">
          <p class="fw-light ms-4">{{ shop.price + "0 TND" }}</p>
        </li>
      </ul>
      <button type="button" class="btn btn-primary mb-3" v-on:click="addToCart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cart-plus-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"
          />
        </svg>
        Ajouter au panier
      </button>

      <div class="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header" :id="shop.id">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + shop.id"
              aria-expanded="false"
              :aria-controls="'collapse' + shop.id"
            >
              Détails:
            </button>
          </h2>
          <div
            :id="'collapse' + shop.id"
            class="accordion-collapse collapse"
            :aria-labelledby="'heading' + shop.id"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {{ shop.description }}
              <div class="accordion-item">
                <h2 class="accordion-header" :id="'heading' + shop.id">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + shop.id + 10"
                    aria-expanded="false"
                    :aria-controls="'collapse' + shop.id + 10"
                  >
                    Valeurs nutritionnelles moyennes pour 100g
                  </button>
                </h2>
                <div
                  :id="'collapse' + shop.id + 10"
                  class="accordion-collapse collapse"
                  :aria-labelledby="'heading' + shop.id + 10"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <table class="table">
                      <tr>
                        <td>Valeurs énergétiques</td>
                        <td>372 Kcal / 1556 Kj</td>
                      </tr>
                      <tr>
                        <td>Proteines</td>
                        <td>1 g</td>
                      </tr>
                      <tr>
                        <td>Lipides</td>
                        <td>4 g</td>
                      </tr>
                      <tr>
                        <td>Glucides</td>
                        <td>10g</td>
                      </tr>
                     

                     
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  props: ["shop"],
  methods: {
    addToCart() {
      this.$emit("add-to-cart");
    },
  },
};
</script>
