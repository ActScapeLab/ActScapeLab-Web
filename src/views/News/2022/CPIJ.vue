<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
import ArticleList from '@/components/News/articleList.vue';
</script>

<template>
  <ArticleTemplate
    title="都市計画学会@宇都宮大学, 栃木"
    :startYear="2022"
    :startMonth="12"
    :startDate="3"
    :endDate="4"
    authorGrade="M1"
    authorName="松村"
  >
    <p>12月3日(土),4日(日)に宇都宮大学陽東キャンパスで開催された第57回論文発表会(主催:都市計画学会)に参加してきました． 本研究室からは，藤條(B4), 松村(M1), 村上(M2)が以下の題目にて発表しました．</p>

    <ArticleList :keys="['Tojo2022_CPIJ', 'Matsumura2022_CPIJ', 'Murakami2022_CPIJ']"/>

    <p>
      都市計画学会は土木計画学に比べて数理モデルに比較的馴染みがない分野の方が多く参加するだろうと考え，分野を問わず面白いと思ってもらえるような資料作りや発表を心がけました． その結果，多くの質問や議論の機会をいただくことができました． それぞれの発表に対して,質疑・コメントいただいた皆様,ありがとうございました.この場をお借りしてお礼申し上げます.
    </p>
    <div class="row justify-evenly">
      <q-img src="@/assets/News/2022/cpij2022.png" class="img-width"/>
    </div>
  </ArticleTemplate>
</template>

<style lang="scss" scoped>
.img-width {
  width: min(500px, 100%);
}
</style>