import Vue from "vue";
import App from "./App.vue";
import vueCustomElement from "vue-custom-element";
Vue.config.productionTip = false;
Vue.use(vueCustomElement);
Vue.customElement('inspire-basket', App);
// new Vue({
//   render: h => h(App)
// }).$mount("#app");
