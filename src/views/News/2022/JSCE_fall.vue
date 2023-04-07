<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
import ArticleList from '@/components/News/articleList.vue';
</script>

<template>
  <ArticleTemplate
    title="土木計画学秋大会に参加してきました"
    :startYear="2022"
    :startMonth="11"
    :startDate="12"
    :endDate="13"
    authorGrade="M2"
    authorName="村上"
  >
    <p>11月12日(土),13日(日)に琉球大学千原キャンパスにて開催された第66回土木計画学研究発表会に参加しました. 本研究室からは,大山,村上(M2),松村(M1)が以下の題目にて発表しました．</p>

    <ArticleList :keys="['Oyama2022_JSCEau', 'Murakami2022_JSCEau', 'Matsumura2022_JSCEau']"/>

    <p>
      学生は初めての対面での学会参加で緊張しましたが,他大学の学生の発表を聞くことは今後の研究を進める上で良い刺激になりました. 
      それぞれの発表に対して,質疑・コメントいただいた皆様,ありがとうございました.この場をお借りしてお礼申し上げます.
    </p>
    <p>
      発表後は，首里城周辺を散策しました．石垣やシーサーといった沖縄ならではの街並みは歩いていてとても楽しかったです． 今後の学会で地方に行った際もその街ならではの風土や魅力を体験できたらいいなと思います．
    </p>
    <div class="row justify-evenly">
      <q-img src="@/assets/News/2022/oyama.jpg" class="img-width"/>
    </div>
  </ArticleTemplate>
</template>

<style lang="scss" scoped>
.img-width {
  width: min(500px, 100%);
}
</style>