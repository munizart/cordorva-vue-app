var Vue = require('vue/dist/vue.js');
var router = require('vue-router')
var App = require('./../components/App.vue')

var vueApp = new Vue({
  el: '#app',
  components: {
    'app': App
  }
});
