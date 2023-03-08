<script setup lang="ts">
import pageTitle from '../../parts/pageTitle.vue';
import graduate from './graduate.vue';
import year from './year.vue';
</script>

<template>
  <pageTitle main="Alumni" sub="卒業生"/>
  <div class="q-pa-md">
    <q-list>
      <year year="2022年度" />
      <graduate name="池上哲弘/M2" title="修論:comingsoon..." />
      <graduate name="藤條嵩大 / B4" title="卒論:時空間的相互作用の存在するミクロ土地利用変化の予測法開発" />
      <graduate name="古川智浩 / B4" title="卒論:「人のいる風景」が生み出す公共空間の魅力とその両面性" />
      <graduate name="三輪咲季 / B4" title="卒論:広場の滞留行動を促す基本席・補助席配置の実験と分析" />
    </q-list>

    <q-list>
      <year year="2021年度" />
      <graduate name="金古凌真 / B4" title="卒論:交通拠点の人流制御機能に着目した帰宅困難者シミュレーション" />
      <graduate name="辻瑠太 / B4" title="卒論:歩行者経路選択行動における迂回特性とその地域間異質性" />
      <graduate name="國分創一郎 / B4" title="卒論:月島西仲通り商店街におけるもんじゃストリートの形成と COVID-19 が与えた影響" />
      <graduate name="藤島秀太 / B4" title="卒論:甲府における旧武家屋敷の地割と鉄道駅の立地が市街地形成に与えた影響" />
    </q-list>
    
    <q-list>
      <year year="2020年度" />
      <graduate name="網代峻也 / B4" title="卒論:交通拠点の人流制御機能に着目した帰宅困難者シミュレーション" />
      <graduate name="荒木日菜子 / B4" title="卒論:歩行者経路選択行動における迂回特性とその地域間異質性" />
      <graduate name="工藤夢与 / B4" title="卒論:月島西仲通り商店街におけるもんじゃストリートの形成と COVID-19 が与えた影響" />
      <graduate name="小島元太朗 / B4" title="卒論:甲府における旧武家屋敷の地割と鉄道駅の立地が市街地形成に与えた影響" />
      <graduate name="清水健太 / B4" title="卒論:甲府における旧武家屋敷の地割と鉄道駅の立地が市街地形成に与えた影響" />
      <graduate name="渋谷涼平 / B4" title="卒論:甲府における旧武家屋敷の地割と鉄道駅の立地が市街地形成に与えた影響" />
      <graduate name="鈴木隆仁  / B4" title="卒論:甲府における旧武家屋敷の地割と鉄道駅の立地が市街地形成に与えた影響" />
      <graduate name="柳瀬崇能  / B4" title="卒論:甲府における旧武家屋敷の地割と鉄道駅の立地が市街地形成に与えた影響" />
    </q-list>
  </div>
</template>