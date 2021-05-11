import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

window.token = localStorage.getItem("token");

window.axios = axios;
window.axios.defaults.baseURL = "http://localhost:8080";
window.axios.defaults.params = { api_token: window.token };

window.Event = new Vue();

new Vue({
  router,
  axios,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
