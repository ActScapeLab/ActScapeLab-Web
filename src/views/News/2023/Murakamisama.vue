<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="秋期学位記授与式が行われました"
    :startYear="2023"
    :startMonth="9"
    :startDate="21"
    authorGrade="M1"
    authorName="多田"
  >
    <p>秋期学位記授与式が行われ，本研究室M2の村上さんの修士課程が修了しました．</p>

    <p>研究，学業面はもちろんのこと，誰にでも優しく親身になってくれる村上さんのことを研究室メンバーみんなが尊敬しています！</p>
    <p>お体に気をつけてこれからの社会人生活を頑張ってください！そして，我々後輩一同も，研究，学業を頑張っていきます！</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Murakamisama/murakamisama.png" class="single_img"/>
    </div>
  </ArticleTemplate>
</template>