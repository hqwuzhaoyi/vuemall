import Vue from 'vue';
import App from './App';
import router from './router';
import 'babel-polyfill';
// import fastclick from 'fastclick';
import './assets/scss/index.scss';
import 'swiper/dist/css/swiper.css';
import vueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false;
// fastclick.attach(document.body);
Vue.use(vueLazyLoad, {
  preLoad: 1,
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
