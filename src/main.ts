import { FrenchPlugin, ModulComponentPlugin } from '@ulaval/modul-components';
import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ModulComponentPlugin);
Vue.use(FrenchPlugin);

export default new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
