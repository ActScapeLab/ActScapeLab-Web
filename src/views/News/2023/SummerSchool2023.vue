<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="行動モデル夏の学校2023に参加しました"
    :startYear="2023"
    :startMonth="9"
    :startDate="18"
    :endDate="20"
    authorGrade="B4"
    authorName="和田"
  >
  <p>行動モデル夏の学校2023が終了しました。このイベントは、9月18日から21日までの3日間にわたりました。</p>
  <p>最終日は、プローブパーソンデータを用いてモデルを構築し、他の学校とモデルの優劣を競い合うプレゼンテーションの日でした。</p>
  <p>私たちは道後温泉本館の混雑率に焦点を当て、温泉利用者のアクティビティーパターンの選択について分析しました。</p>
  <p>前日のエスキスを元に、B4とM1の学生たちで最終日まで準備しました。最終日には、コードが上手くいかず、寝てしまうという失態を犯し、大変迷惑をかけてしまいましたが、先輩たちのフォローもあり、無事プレゼンに臨めました。</p>
  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/SummerSchool2023/wada.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/SummerSchool2023/yoshisaku.jpg" class="dual_img"/>
    </div>
  <p>今年は優勝することはできませんでしたが、この経験を今後の研究の励みにしようと考えています。B4の学生は来年もありますので、優勝を目指して頑張りましょう。 </p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/SummerSchool2023/matumura.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/SummerSchool2023/syuugou.jpeg" class="dual_img"/>
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