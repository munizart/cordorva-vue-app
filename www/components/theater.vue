<template>
  <div class="theater">
      <h4>{{name}}</h4>
      <img :src="mapThumb" alt="map thumbnail"></img>
      <a :href="href">{{address}}</a>
      <p>
          Favoritos: {{favs}}</span>
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
