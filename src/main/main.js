import Vue from 'vue'
import Page from './Main.vue'

Vue.config.productionTip = false;

let app = new Vue({
  el: "#app",
  render: function (f) {
    return f(Page)
  },
});
