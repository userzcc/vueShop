import Vue from 'vue'
import App from './App.vue'

//引入fastClick
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

//2.引入全局样式
import './style/common.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
