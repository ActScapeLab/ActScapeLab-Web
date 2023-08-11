<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
import ArticleList from '@/components/News/articleList.vue';
</script>

<template>
  <ArticleTemplate
    title="Bridging Transportation Researchers (BTR) で発表しました"
    :startYear="2023"
    :startMonth="8"
    :startDate="9"
    :endDate="10"
    authorGrade="M1"
    authorName="岡崎"
  >
  <p>8/9 - 10にオンラインで開催されたBridging Transportation Researchers (BTR) ConferenceにM1の岡崎が参加し，以下の題目で発表しました．</p>
  <ArticleList :keys="['Okazaki2023_BTR']"/>
  <p>学会参加自体がまだ2回目であるうえ，英語で発表することに対して少し不安を覚えていましたが，事前の練習のおかげで本番は緊張せずに発表することができました．</p>
  <p>学会はZoomを使用して開催されており，実際に研究者の方々と会うことはできませんでしたが，チャット上で質問やコメントをたくさん頂き，一歩成長できたと感じています．</p>
  <p>また来年も参加させてもらえるよう，明日から研究を頑張っていこうと思います．</p>
  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/BTR/presen.jpg" class="single_img"/>
  </div>
  </ArticleTemplate>
</template>

<style lang="scss" scoped>
.img-width {
  width: 45%
}

.image-zone{
  margin: 2% 0;
}
</style>