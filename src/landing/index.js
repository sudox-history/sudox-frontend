import Vue from 'vue'
import App from './pages/App.vue'

Vue.config.productionTip = false;

let app = new Vue({
  el: "#app",
  render: function (f) {
    return f(App)
  },
});
