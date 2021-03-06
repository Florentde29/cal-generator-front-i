// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/fr'
/*import 'bootstrap/dist/css/bootstrap.css'*/
/*import 'bootstrap-vue/dist/bootstrap-vue.css'*/
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
/*import BootstrapVue from 'bootstrap-vue'*/
import 'bootstrap';
import 'bootstrap-select'
/*import 'jquery'*/
import 'popper.js'

window.$ = require('jquery')
window.JQuery = require('jquery')


Vue.use(ElementUI, { locale })
/*Vue.use(BootstrapVue);*/
Vue.config.productionTip = false

/*eslint-disable no-new*/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
