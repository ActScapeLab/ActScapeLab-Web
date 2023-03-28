<script setup lang="ts">
import VueGoogleMaps from '@fawmi/vue-google-maps';

const center = { lat: 51.093048, lng: 6.84212 };
const markers = [
  {
    position: {
      lat: 51.093048,
      lng: 6.84212,
    },
  },
  {
    position: {
      lat: 51.198429,
      lng: 6.69529,
    },
  },
  {
    position: {
      lat: 51.165218,
      lng: 7.067116,
    },
  },
  {
    position: {
      lat: 51.09256,
      lng: 6.84074,
    },
  },
];
</script>

<template>
  <!-- <div class="map">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6687051479507!2d139.7926619152582!3d35.66053318019918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889a07930e2f9%3A0x62e41ee20b961991!2z6Iqd5rWm5bel5qWt5aSn5a2mIOixiua0suOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1668499074721!5m2!1sja!2sjp"
  width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
  />
  </div> -->

  <div style="height: calc(100vh - 50px)">
      <GMapMap
        :center="center"
        :zoom="10"
        map-type-id="terrain"
      >
        <GMapCluster :zoomOnClick="true">
          <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          />
        </GMapCluster>
      </GMapMap>
    </div>
</template>

<style>

.map{
  text-align: center;
}

</style>