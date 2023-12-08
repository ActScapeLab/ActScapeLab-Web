<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
import ArticleList from '@/components/News/articleList.vue';
</script>

<template>
  <ArticleTemplate
    title="研究発表会(秋大会)に参加してきました！"
    :startYear="2023"
    :startMonth="11"
    :startDate="24"
    :endDate="26"
    authorGrade="M2"
    authorName="砂田"
  >
  <p> 東京都立大学で11月24日-26日に開催された土木計画学研究発表会(秋大会)にM2松村健太，M2砂田遼大，M1岡崎凌太が参加してきました．以下の題目で発表しました．</p>

  <ArticleList :keys="['Matsumura2023_JSCEau', 'Sunada2023_JSCEau', 'Okazaki2023_JSCEau']"/>

  <p> 松村，砂田は本研究室の大山先生が司会を務めるコンピュータビジョンと空間行動モデルのセッションで，岡崎は 都市物流のセッションで発表を行いました．</p>
  <p> 私は初めて学会に参加しました．発表内だけでなく終了後も意見交換する機会があり、非常に有意義な時間になりました。</p>
  <p> 卒業間際にして初めての学会だったので，もっと早く参加できるように過ごしていれば，，，と感じました．</p>
  <p> しかも、今回の学会は地方で行われる学会とは違い都内で行われたため、長距離の移動がなく自宅から現地集合でした。なので「学会なのに学会じゃない感じ」がしてとても不思議でした。</p>
  <p> 次回の春大会は札幌で行われるということで、新鮮な海鮮丼を想像しながら、研究に励みます。</p>

  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/JSCE_autumn2023/matsumura.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/JSCE_autumn2023/okazaki.jpg" class="dual_img"/>
    </div>

    
  <div class="row justify-evenly image-zone">
    <q-img src="@/assets/News/2023/JSCE_autumn2023/sunada.jpg" class="dual_img"/>
    </div>

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