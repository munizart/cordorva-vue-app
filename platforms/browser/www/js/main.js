var Vue = require('vue/dist/vue.js');
var router = require('vue-router')
var VueRouter = require('vue-router')

Vue.component('theater', require('./../components/theater.vue'))
Vue.component('app', require('./../components/App.vue'))

var routes = [
    {path: '/', component: Vue.component('theater')}
]

var router = new VueRouter({
    routes
})

var vueApp = new Vue({
  el: '#app'
})
router.start(Vue.component('app'), '#router')
