<template>
  <div class="mapArea">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6687051479507!2d139.7926619152582!3d35.66053318019918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889a07930e2f9%3A0x62e41ee20b961991!2z6Iqd5rWm5bel5qWt5aSn5a2mIOixiua0suOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1668499074721!5m2!1sja!2sjp"
      height="400"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="map bg-grey-2"
    />
  </div>
</template>

<style scoped lang="scss">
.mapArea {
  margin-top: 16px;
  text-align: center;
}

.map {
  width: min(500px, 100%);
  border: 1px solid;
  border-color: lightgray;
}
</style>