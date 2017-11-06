<template>
  <div class="theater">
      <h4>{{title}}</h4>
      <img v-bind:src="mapThumb" alt="map thumbnail"></img>
      <a v-bind:href="href">{{address}}</a>
      <p>
          <i class="fa fa-star" aria-hidden="true"></i> <span class="fav-number">{{favs}}</span>
      </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            href: 'geo:-27.599868,-48.508576',
            latitude: "",
            longitude: "",
            mapThumb: '/img/logo.png',
            address: 'teste',
            favs: 5,
            title: "Cinema de teste"
        }
    }
}
</script>

<style scoped>

</style>
