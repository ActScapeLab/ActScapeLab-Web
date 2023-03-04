<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import member from "@/components/App/member.vue";
</script>

<template>
  <pageTitle main="Staff" sub="スタッフ" />
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-skeleton type="circle"/>
      <p>准教授 / 大山雄己</p>
      <q-skeleton height="150px"/>
    </div>
  </div>

  <pageTitle main="Students" sub="学生" />
  <member name="村上総一郎/M2"
  url="@/assets/Member/murakami.png"
  keywards="マルチモーダルNDP・街路空間再配分・都市デザイン"
  from="埼玉県"
  hobby="ポケモン・ヒップホップ・麻雀"/>
</template>