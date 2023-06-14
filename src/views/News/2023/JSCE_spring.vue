<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
import ArticleList from '@/components/News/articleList.vue';
</script>

<template>
  <ArticleTemplate
    title="土木計画学秋大会に参加してきました"
    :startYear="2023"
    :startMonth="6"
    :startDate="3"
    :endDate="4"
    authorGrade="M1"
    authorName="岡崎"
  >
    <p>6月3日，4日に福岡大学七隈キャンパスで開催された第67回土木計画学研究発表会・春大会にM1の岡崎が以下の題目で参加しました．</p>

    <ArticleList :keys="['Okazaki2023_JSCEsp', 'Parady2023_JSCEsp']"/>

    <p>
      1時間半のセッションに割り当てられた発表者が2人であったため，発表・質疑ともに20分を越える大変充実した発表会となりました．
      初めての学会発表でしたが，多くの学外の方々と交流することができ，大変良い経験となりました．
      柔軟に対応してくださった司会者の花岡伸也先生（東京工業大学），質問やコメントをしてくださった皆様，ありがとうございました．
    </p>
    <p>
      発表後は福岡の繁華街に繰り出し，屋台街や卓球を楽しみました！
    </p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/JSCE_spring/okazaki.png" class="img-width"/>
      <q-img src="@/assets/News/2023/JSCE_spring/minnato.png" class="img-width"/>
    </div>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/JSCE_spring/ramen.jpg" class="img-width"/>
      <q-img src="@/assets/News/2023/JSCE_spring/table_tennis.jpg" class="img-width"/>
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