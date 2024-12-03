<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container-fluid justify-content-md-end">
        <button
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
           v-if="panier.length >=0"
        >
          Panier ({{ cartTotalQuantity }})
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart-check-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"
            />
          </svg>
        </button>
      </div>
    </nav>
    <img src="require(../assets/images/fig1.jpg)" class="img-fluid image" alt="..." />

    <div class="container">
      <nav class="navbar navbar-expand-lg bg-white justify-content-center mb-4">
        <div class="container-fluid justify-content-center">
          <ul class="navbar-nav ms-5 me-5 justify-content-center">
            <li class="nav-item ms-5 me-5">
              <router-link class="nav-link link-info" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg> Acceuil
              </router-link>
            </li>
            <li class="nav-item ms-5 me-5">
              <router-link class="nav-link link-info active" to="/Home">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                </svg> Boutique
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="container mb-5">
      <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
        <div class="col" v-for="shop in shops" :key="shop.id">
          <Product :shop="shop" @add-to-cart="addToCart(shop)" />
        </div>
      </div>
    </div>

  
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Total de votre panier={{ totalfacture().toFixed(3) }} TND
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card mb-3" v-for="item in panier" :key="item.id"  v-if="panier.length > 0">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="item.img" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">{{ item.quantity }} x {{ item.price }} TND</p>
                    <button class="btn btn-danger" @click="removeFromCart(item)">Supprimer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            <button type="button" class="btn btn-primary">Valider la commande</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "../components/Product.vue";

export default {
  name: "HomeView",
  components: { Product },
  data() {
    return {
      shops: [], 
      panier: [],
    };
  },
  computed: {
    cartTotalQuantity() {
      return this.panier.reduce((total, item) => total + item.quantity, 0);
    },
  },
  methods: {
    async fetchShops() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Mahdyy04/happyfull/shops"
        );
        this.shops = response.data; 
      } catch (error) {
        console.error("Error fetching shop data:", error);
      }
    },
    addToCart(shop) {
      const item = this.panier.find((p) => p.id === shop.id);
      if (item) {
        item.quantity += 1;
      } else {
        this.panier.push({ ...shop, quantity: 1 }); 
      }
    },
    removeFromCart(item) {
      const index = this.panier.indexOf(item);
      if (index !== -1) {
        this.panier.splice(index, 1);
      }
    },
    totalfacture() {
      return this.panier.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  mounted() {
    this.fetchShops(); 
  },
};
</script>

<style>
.col.img.card-img-top{
  position: relative;
  margin: 0px;

}
</style>
