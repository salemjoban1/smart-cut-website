import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/scss/main.scss";
import scrollAnimation from './directives/scrollanimation.js';
// createApp(app).directive('scrollanimation',scrollAnimation);
const app = createApp(App)
app.directive('scrollanimation',scrollAnimation);
app.use(store).use(router).mount("#app");
