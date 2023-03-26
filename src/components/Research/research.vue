<script setup lang="ts">
import pageTitle from '../parts/pageTitle.vue';
</script>

<template>
  <pageTitle main="Research" sub="研究テーマ" />
  <div class="q-pa-md">
  <p class="for-students">大山研への所属を希望する方へ (2023年度配属生向け)</p>
  本研究室では行動データやモデルを用いた数理的研究から，デザインのための事例研究まで幅広く行いながら， 
  人にとってより良い都市空間とは何かについて考えています．研究と同時に，希望する人には，まちづくりコンペなどへの参加も推奨し，
  自ら考えるための機会を大事にしています． 2023年度は(1)回遊行動の分析とモデリング，(2)ネットワークデザイン (街路空間再配分)， 
  (3)土地利用の相互作用マネジメント，(4)モビリティ・物流サービスの最適設計， の4つをテーマを基本として研究し，空間と人の行動とのポジティブな関係性について 考えます．
  <div class="themes">
  <q-list>
    <q-btn flat class="btn image_mouseover_1">
      <q-avatar square size="350px">
        <img src="@/assets/Home/bench.png">
      </q-avatar>
      <div class="absolute-center text-center theme">
        回遊行動の分析とモデリング
      </div>
    </q-btn>
    <q-btn round flat class="btn image_mouseover_1">
      <q-avatar size="350px">
        <img src="@/assets/Home/bench.png">
      </q-avatar>
      <div class="absolute-center text-center theme">
        ネットワークデザイン
      </div>
    </q-btn>
    <q-btn round flat class="btn image_mouseover_1">
      <q-avatar size="350px">
        <img src="@/assets/Home/bench.png">
      </q-avatar>
      <div class="absolute-center text-center theme">
        土地利用マネジメント
      </div>
    </q-btn>
    <q-btn round flat class="btn image_mouseover_1">
      <q-avatar size="350px">
        <img src="@/assets/Home/bench.png">
      </q-avatar>
      <div class="absolute-center text-center theme">
        モビリティ・物流の最適設計
      </div>
    </q-btn>
  </q-list>
  </div>
  </div>
</template>

<style lang="scss" scoped>

.themes{
  text-align: center;
}

.theme {
  position: absolute;
  display: none;
  font-size: 25px;
  color: white;
}

.for-students{
  font-size: 15px;
}

.btn{
  margin: 2%;
  background-color: #827e7e;
}

.image_mouseover_1 img {
transition-duration: 0.5s;
}
.image_mouseover_1 img:hover {
transform: scale(1.2,1.2);
transition-duration: 0.5s;
opacity: 0.4;
}

.image_mouseover_1:hover .theme{
  display: inline;
}
</style>