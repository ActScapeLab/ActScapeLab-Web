<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import { ref } from "vue";

const slide = ref(1)
const autoplay = ref(true)

</script>

<template>
  <pageTitle main="大山研究室" sub="芝浦工業大学 土木工学科" />

  <p>より良い都市環境の設計に向けて,空間と人の行動とのポジティブな相互作用について研究しています.</p>

  <div class="slide">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="100%"
    >
      <q-carousel-slide :name="1" img-src="@/assets/Home/bench.png" />
      <q-carousel-slide :name="2" img-src="@/assets/Home/murakami.png" />
      <q-carousel-slide :name="3" img-src="@/assets/Home/tsukechi.png" />
      <q-carousel-slide :name="4" img-src="@/assets/Home/tojo.svg" />
    </q-carousel>
  </div>
</template>

<style lang="scss" scoped>
.slide {
  width: min(600px, 100%);
  margin: 0 auto;
  aspect-ratio: 3 / 2;
}
</style>