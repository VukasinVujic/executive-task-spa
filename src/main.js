import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);
// FontAwesomeIcon
Vue.component("font-awesome-icon");

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
});
