import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faPowerOff,
  faCreditCard,
  faComment,
  faBolt,
  faReplyAll,
  faListAlt,
  faNewspaper,
  faUsers,
  faVolumeUp,
  faPencilAlt,
  faImage,
  faVideo,
  faUser,
  faAngleDown,
  faClock,
  faEllipsisH,
  faTrophy,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faSearch,
  faPowerOff,
  faCreditCard,
  faComment,
  faBolt,
  faReplyAll,
  faListAlt,
  faNewspaper,
  faUsers,
  faVolumeUp,
  faPencilAlt,
  faImage,
  faVideo,
  faUser,
  faAngleDown,
  faClock,
  faEllipsisH,
  faTrophy,
  faHeart
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({ el: "#app", render: (h) => h(App) });
