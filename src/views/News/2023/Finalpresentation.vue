<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="卒論発表会が行われました"
    :startYear="2023"
    :startMonth="2"
    :startDate="8"
    :endDate="9"
    authorGrade="B4"
    authorName="鉄崎"
  >
    <p>2/8-9は土木工学科の卒論発表会が行われ，大山研の学部4年7名が壇上に立ちました.</p>
    <p>一年間の中で研究が行き詰まり苦しいこともありましたが，緊張感に包まれながらも堂々と発表をするみなさんは とてもかっこよかったです.</p>
    <p>発表を終え大山研で共に過ごせる時間も残り少ないですが， 一年間頑張ってきたこの経験を糧に，それぞれ頑張っていきましょう.</p>
    <div class="row justify-evenly">
      <q-img src="@/assets/News/2023/sakurai.jpg" class="img-width"/>
    </div>
  </ArticleTemplate>
</template>

<style lang="scss" scoped>
.img-width {
  width: min(50%, 300px)
}
</style>