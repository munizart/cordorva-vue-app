var Vue = require('vue/dist/vue.js');
var VueResource = require('vue-resource');
var RandomWord = require('../components/random-word.vue');
var Theater =  require('../components/theater.vue');

Vue.use(VueResource);

var vm = new Vue({
  el: '#app',
  components: {
    'random-word': RandomWord,
    'theater': Theater
  }
});
