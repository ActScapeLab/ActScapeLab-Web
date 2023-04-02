<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import { ref } from "vue";

const slide = ref(1)
const autoplay = ref(true)
// カルーセル画像を「/assets/Home/」に入れておけば、以下でファイル名を指定するだけで表示可能
const carousels = ['bench.png', 'murakami.png', 'tsukechi.png', 'tojo.svg']

/**
 * スマホかPCかを判別する
 * 
 * スマホの時にTrueを返す
 */
function checkMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];
  
  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

/**
 * カルーセル画像の読み込み
 */
function loadImg(name:string) {
  return require(`@/assets/Home/${name}`)
}
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
      control-color="secondary"
      navigation
      padding
      :arrows="!checkMobile()"
      infinite
      :height="checkMobile() ? '120%' : '100%'"
      :autoplay="autoplay"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="7px" :icon="btnProps.icon" color="secondary" flat round dense @click="onClick"></q-btn>
        <q-btn v-else size="7px" :icon="btnProps.icon" color="grey-4" flat round dense @click="onClick"></q-btn>
      </template>
      <template v-for="(carouselName, index) in carousels">
        <q-carousel-slide :name="index+1">
          <q-img class="rounded-borders col-6 full-height" :src="loadImg(carouselName)"/>
        </q-carousel-slide>
      </template>
    </q-carousel>
  </div>
</template>

<style lang="scss" scoped>

.comment{
  font-size: 18px;
  text-align: center;
}

.slide {
  width: min(700px, 100%);
  margin: 0 auto;
  aspect-ratio: 3 / 2;
}
</style>