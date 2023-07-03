<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="基礎ゼミが終了しました！！"
    :startYear="2023"
    :startMonth="6"
    :startDate="30"
    authorGrade="B4"
    authorName="今村"
  >
  <p>6月30日，基礎ゼミ2023最終発表会が行われました．</p>
  <p>今年度の基礎ゼミは，4月から週に2回，M1M2がB4に教える形で行われ，プログラミング・行動モデル・最適化について学習しました．</p>
  <p>今回の最終発表では，B4がそれぞれ違うデータを扱い，ゼミでの学習をもとに演習を行い，データ分析・プログラミング・政策シミュレーションの結果を発表しました．活発な質疑応答が行われ，充実した発表会となりました．</p>
  <p>私は，物流顧客SP調査データを用いて顧客の配送方法選択行動について分析し，顧客満足度と配送業者の効率性を考慮した配送料金の課金額最適化を行いました．</p>
  <div class="row justify-evenly image-zone">
    <q-img src="@/assets/News/2023/Baseseminar/happyou.jpeg" class="single_img"/>
  </div>
  <div class="row justify-evenly image-zone">
    <q-img src="@/assets/News/2023/Baseseminar/semi_final1.png" class="single_img"/>
  </div>
  <div class="row justify-evenly image-zone">
    <q-img src="@/assets/News/2023/Baseseminar/semi_final2.png" class="single_img"/>
  </div>
  
  <p>発表に向けては先輩方のお力添えのおかげで，考えを深めることができました．
    M1，M2の先輩方，ゼミの準備や演習での多くのアドバイスありがとうございました．B4は基礎ゼミで得た学び・反省を今後の研究活動にしっかり繋げていきましょう．</p>

  <div class="row justify-evenly image-zone">
    <q-img src="@/assets/News/2023/Baseseminar/help.png" class="dual_img"/>
    <q-img src="@/assets/News/2023/Baseseminar/sakuyoshi.jpeg" class="dual_img"/>
  </div>
  
  <p>  
    発表後は研究室メンバー全員で近所のハンバーガー屋さんで打ち上げを行いました！徹夜の体にアルコールが染み渡りました！
  </p>
  <div class="row justify-evenly image-zone">
    <q-img src="@/assets/News/2023/Baseseminar/yoshi.jpeg" class="dual_img"/>
    <q-img src="@/assets/News/2023/Baseseminar/wada.jpeg" class="dual_img"/>
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