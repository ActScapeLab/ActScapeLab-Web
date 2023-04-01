<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import { ref } from "vue";

const slide = ref(1)
const autoplay = ref(true)

</script>

<template>
  <pageTitle main="大山研究室" sub="芝浦工業大学 土木工学科" />

  <p class="comment">より良い都市環境の設計に向けて,空間と人の行動とのポジティブな相互作用について研究しています.</p>

  <div class="slide">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="black"
      arrows
      prev-icon="arrow_circle_left"
      next-icon="arrow_circle_right"
      navigation
      infinite
      height="100%"
      :autoplay="autoplay"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true">
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="7px" :icon="btnProps.icon" color="event" flat round dense @click="onClick"></q-btn>
        <q-btn v-else size="7px" :icon="btnProps.icon" color="grey-4" flat round dense @click="onClick"></q-btn>
      </template>
      <q-carousel-slide :name="1" >
          <q-img class="rounded-borders col-6 full-height" src="@/assets/Home/bench.png" />
      </q-carousel-slide>
      <q-carousel-slide :name="2" >
          <q-img class="rounded-borders col-6 full-height img" src="@/assets/Home/murakami.png" />
      </q-carousel-slide>
      <q-carousel-slide :name="3" >
          <q-img class="rounded-borders col-6 full-height img" src="@/assets/Home/tsukechi.png" />
      </q-carousel-slide>
      <q-carousel-slide :name="4" >
          <q-img class="rounded-borders col-6 full-height img" src="@/assets/Home/tojo.svg" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style lang="scss" scoped>

.comment{
  font-size: 18px;
  text-align: center;
}

.slide {
  width: min(800px, 100%);
  margin: 0 auto;
  aspect-ratio: 3 / 2;
}

.img{
  width: 100%;
}
</style>