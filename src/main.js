import Vue from 'vue'
import App from './App.vue'
import AutomaticAnalyticsTrigger from 'automatic-analytics-trigger';

Vue.config.productionTip = false

const dataLayer = [];
const automaticAnalyticsTrigger = new AutomaticAnalyticsTrigger((dataEvent) => dataLayer.push(dataEvent));

automaticAnalyticsTrigger.init();

new Vue({
  render: h => h(App),
}).$mount('#app')
