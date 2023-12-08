<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="岩倉・楽研究室と野球勝負をしました！！"
    :startYear="2023"
    :startMonth="12"
    :startDate="1"
    authorGrade="M2"
    authorName="松村"
  >
  <p>例年開催されている計画系大学合同の野球大会が雨天中止になったということで，有志が企画し，学内の同じく計画系の岩倉・楽研究室の合同チーム vs 大山研究室で野球大会潮見野球場にて開催しました．</p>
  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/baseball2023/matumura.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/baseball2023/okazaki.jpg" class="dual_img"/>
    </div>
  <p>施設料2000円を賭けた勝負は結果から言うと，7-0で大山研究室のボロ勝ちでした．大山先生をはじめとする野球経験者の長打力が光ってました．</p>
  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/baseball2023/oyama.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/baseball2023/wada.jpg" class="dual_img"/>
      
    </div>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/baseball2023/sunada.jpg" class="dual_img"/>
    </div>

  <p>意外にグダることもなくスムーズに試合できたので，予想より楽しかったです．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/baseball2023/syuugou.jpg" class="img-width"/>
    </div>

  <p>試合後は研究室に残っていたメンバーで焼肉で打ち上がりました．</p>

  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/baseball2023/utiage.jpg" class="dual_img"/>
      
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