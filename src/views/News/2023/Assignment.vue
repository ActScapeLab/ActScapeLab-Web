<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="新B4が配属されました！！"
    :startYear="2023"
    :startMonth="2"
    :startDate="15"
    authorGrade="M2"
    authorName="松村"
  >
    <p>本日（2/15）土木工学科の研究室配属が行われました．</p>
    <p>例年，配属優先権を持つ成績優秀者と院進勢を除いて，激しい枠争いが繰り広げられています．</p>
    <p>そんな中，大山研には新しく3人の学生が来てくれました． これから学生13人で新たなスタートを切ります．</p>
    <p>辛いことも多いですが，その分得られるモノはたくさんあります！ 一緒に頑張っていきましょう！！</p>
    <div class="row justify-evenly">
      <q-img src="@/assets/News/2022/SummerSchool/comprehensive_award.jpg" class="img-width"/>
      <q-img src="@/assets/News/2022/SummerSchool/Davis_award.jpg" class="img-width"/>
    </div>
  </ArticleTemplate>
</template>

<style lang="scss" scoped>
.img-width {
  width: min(50%, 300px)
}
</style>