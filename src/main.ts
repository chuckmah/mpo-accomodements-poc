import { FrenchPlugin, ModulComponentPlugin } from '@ulaval/modul-components';
import vueCustomElement from 'vue-custom-element'

import Vue from 'vue';
import App from './App.vue';

console.log('IM in main.ts!');

Vue.use(vueCustomElement);
Vue.config.productionTip = false;
Vue.use(ModulComponentPlugin);
Vue.use(FrenchPlugin);

Vue.customElement('mpo-accomodements', App);
Vue.customElement('mpo-notification', App);



// export default new Vue({
//   store,
//   render: h => h(App)
// }).$mount('#app');
