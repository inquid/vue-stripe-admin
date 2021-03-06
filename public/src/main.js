import Vue from 'vue';
import App from './App.vue';
import Chip from './js/lib';

Vue.use(Chip);

new Vue({
  el: '#app',
  render: h => h(App)
})
