import "@fortawesome/fontawesome-free/css/all.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.min.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md" || "fa" || "md",
  },
});
