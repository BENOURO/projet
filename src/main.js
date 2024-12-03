import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "../src/assets/css/style.css";
import "bootstrap/js/dist/modal";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).mount('#app')
