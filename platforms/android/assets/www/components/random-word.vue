<template>
  <div class="app">
    <p>Hellow word</p>
    <button type="button" name="click-me" @click="getMovies">click me</button>
    <movies movies="selected">

    </movies>
  </div>
</template>

<script>
const MOBILE_POSTER_TYPE_ID = 60
const FILTER_ON_SHOW = 'OnShow'
const FILTER_PRE_SALE = 'PreSale'
const FILTER_UPCOMING = 'UpcomingRelease'
const filterMovie = (key, movies) => movies.filter(movie => movie.Filter[key])

export default {
  data () {
    return {
      movies: [],
      upcoming: [],
      preSale: [],
      onShow:[],
      selected: undefined
    }
  },
  methods: {
    getMovies() {
        this.$http.get(`https://cnk-bus.cinemark.com.br/api/Movies/Filters`, {
            headers: {
                'X-CISIdentity': 'BP0E2CAACB0E4DAA956206AC3B7396F3'
            }
        }).then(response => response.body).then(movies => {
            this.movies = movies
            this.onShow = filterMovie(FILTER_ON_SHOW, movies)
            this.preSale = filterMovie(FILTER_PRE_SALE, movies)
            this.upcoming = filterMovie(FILTER_UPCOMING, movies)
            return movies
        }).then(console.log).catch(console.error)

    }
  }
}
</script>
