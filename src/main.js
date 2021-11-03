import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/scss/main.scss";
import VueYouTubeEmbed from 'vue-youtube-embed';
// createApp.use(VueYouTubeEmbed);
// createApp(App).use(VueYouTubeEmbed);
// import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'
// let videoId = getIdFromURL(`https://www.youtube.com/watch?v=J-A8MkwjbVM`);
// let startTime = getTimeFromURL(`https://www.youtube.com/watch?v=J-A8MkwjbVM`);
createApp(App).use(store).use(router).mount("#app");
