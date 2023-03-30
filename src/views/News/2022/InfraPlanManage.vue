<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="行動モデル夏の学校＠東大"
    :startYear="2022"
    :startMonth="9"
    :startDate="23"
    :endDate="25"
    authorGrade="B4"
    authorName="鉄崎"
  >
    <p>学部生，諸学者向けのpythonやRの行動モデリングのコーディングチュートリアルや若手研究者による， 機械学習と行動モデルの講義を受けることができる夏の学校に今年も参加してきました．</p>
    <p>数理的政策分析演習では「街路景観に基づいた歩行者経路選択モデルの検証」をテーマにシナリオ分析を行いました．</p>
    <p>時間的な余裕がない中，提出期限ぎりぎりまで粘って提出した発表資料でしたがそのかいもあって結果はなんと， Davis賞と総合優勝をいただくことができました．</p>
    <div class="row justify-evenly">
      <q-img src="@/assets/News/2022/SummerSchool/comprehensive_award.jpg" class="img-width"/>
      <q-img src="@/assets/News/2022/SummerSchool/Davis_award.jpg" class="img-width"/>
    </div>
  </ArticleTemplate>
</template>

<style lang="scss" scoped>
.img-width {
  width: min(50%, 300px)
}
</style>