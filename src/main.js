import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import App from './App.vue';
import 'element-ui/lib/theme-chalk/display.css';
import store from "./store/index";
import 'es6-promise/auto'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
axios.defaults.withCredentials = true
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
});
