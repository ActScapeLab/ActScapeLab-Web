<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="大山研究室閉室のお知らせ"
    :startYear="2024"
    :startMonth="3"
    :startDate="31"
    authorGrade="M1"
    authorName="鉄崎"
  >
  <p>都市環境設計研究室は大山教授が東京大学に移籍されるため，2024年3月31日をもちまして閉室しました。</p>
  <p>短い間でしたが，どうもありがとうございました！</p>

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