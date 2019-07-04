import Vue from 'vue';
import App from './App';
import router from './router';
import 'babel-polyfill';
import fastclick from 'fastclick';
import './assets/scss/index.scss';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
