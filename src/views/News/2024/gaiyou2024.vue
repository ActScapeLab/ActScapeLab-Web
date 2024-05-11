<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="卒論概要を提出しました"
    :startYear="2024"
    :startMonth="1"
    :startDate="17"
    authorGrade="B4"
    authorName="今村"
  >
  <p>明けましておめでとうございます．</p>
  <p>今年も大山研をよろしくお願いします．</p>
  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2024/gaiyou2024/wadada.jpeg" class="dual_img"/>
      <q-img src="@/assets/News/2024/gaiyou2024/wadaoka.jpeg" class="dual_img"/>
    </div>
  <p>新年一発目の記事はタイトル通り，B4全員無事に卒論概要を提出できましたーということで，，，</p>
  <p>初めての執筆だったので，論文らしい言い回しや表現には苦労しました．</p>
  <div class="row justify-evenly image-zone">
    <q-img src="@/assets/News/2024/gaiyou2024/imamutaya.jpeg" class="dual_img"/>
    <q-img src="@/assets/News/2024/gaiyou2024/nozokikomi.jpeg" class="dual_img"/>
  </div>
  <p>年末年始も休まずコーディングに励んでいたので，手前味噌ですがその努力が反映された良いものに仕上がったと思います．</p>
  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2024/gaiyou2024/syuugou.jpeg" class="dual_img"/>
      <q-img src="@/assets/News/2024/gaiyou2024/wadapin2.jpeg" class="dual_img"/>
    </div>
  <p>これでまだ終わりではなく，本論提出と最終発表も残っているので，この勢いのまま最後までトバします！！</p>

  </ArticleTemplate>
</template>

<style lang="scss" scoped>
.single_img {
  width: 70%
}
.dual_img {
  width: 45%
}

.image-zone{
  margin: 2% 0;
}
</style>