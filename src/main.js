import Vue from 'vue';
import {store} from './store/Store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
