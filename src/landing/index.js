import Vue from 'vue'
import Page from './components/App.vue'

Vue.config.productionTip = false;

let app = new Vue({
  el: ".app",
  render: function (f) {
    return f(Page)
  },
});
