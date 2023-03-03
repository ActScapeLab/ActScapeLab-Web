<!-- まずはHomeのtemplete. 体裁は気にしない.
とにかく構造に基づいた記述を意識する
Homeとheader(一回見せる) -> CSS(コピるだけ)
+ UpdateはNewsitemみたいにして新しくコンポーネントにしてもいい
-->
<script setup lang="ts">
import Update from "@/components/Home/Update.vue";
import pageTitle from "@/components/parts/pageTitle.vue"
import { ref } from "vue";

const slide = ref(1)
const autoplay = ref(true)

</script>

<template>
  <div class="outline">
    <pageTitle main="大山研究室" sub="芝浦工業大学 土木工学科" />
  
    <p class="comment">より良い都市環境の設計に向けて,空間と人の行動とのポジティブな相互作用について研究しています.</p>
  
    <div class="q-pa-md">
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
        class="slide"
      >
        <q-carousel-slide :name="1" img-src="@/assets/Home/bench.png" />
        <q-carousel-slide :name="2" img-src="@/assets/Home/murakami.png" />
        <q-carousel-slide :name="3" img-src="@/assets/Home/tsukechi.png" />
        <q-carousel-slide :name="4" img-src="@/assets/Home/tojo.svg" />
      </q-carousel>
    </div>
  
    <Update />
  </div>

</template>

<style lang="scss" scoped>
.slide {
  max-height: 300px;
}
@media (max-width: 992px) {
  .slide {
    max-height: 250px;
  }
}

.q-pa-md {
  /*横幅94%で左右に余白を持たせて中央寄せ*/
  width:500px;
  margin-right: auto;
  margin-left: auto;
}

.q-pa-md img {
   width:100%;/*スライダー内の画像を横幅100%に*/
   height:auto;
}

/*slickのJSで書かれるタグ内、スライド左右の余白調整*/

.q-pa-md .slick-slide {
   margin:0 10px;
}

</style>