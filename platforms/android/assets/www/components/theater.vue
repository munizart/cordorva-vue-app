<template>
  <div class="theater">
      <h4>{{title}}</h4>
      <img src="{{mapThumb}}" alt="map thumbnail"></img>
      <a href="geo:{{latitude}},{{longitude}}">{{address}}</a>
      <p>
          <i class="fav-icon"></i><span class="fav-number">{{favs}}</span>
      </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            latitude: "-27.599868",
            longitude: "-48.508576",
            mapThumb: '/img/logo.png',
            address: 'teste',
            fav: 5
        }
    }
}
</script>

<style>

</style>
