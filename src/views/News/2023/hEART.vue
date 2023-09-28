<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
import ArticleList from '@/components/News/articleList.vue';
</script>

<template>
  <ArticleTemplate
    title="スイスで開催された学会に参加してきました！"
    :startYear="2023"
    :startMonth="9"
    :startDate="5"
    :endDate="8"
    authorGrade="M1"
    authorName="岡崎"
  >
    <p>スイスのチューリッヒで9月5日~8日に開催された，11th Symposium of the European Association for Research in Transportation @ETH Zurich に大山先生とM1の岡崎が参加してきました．以下の題目で発表しました．</p>
    <ArticleList :keys="['Okazaki2023', 'Parady2023']"/>
    <p>対面の国際学会への参加は初めてでしたが，久しぶりに海外に行けるということで非常にワクワクしていました．ETH ZurichのHönggerbergキャンパスは小高い山の上に位置し，気持ちの良い場所でした．</p>
    <p>発表前夜のWelcome receptionではいきなり欧州を中心として世界中の研究者の方々と会話をする機会があり，これまで日本では経験したことのない雰囲気に戸惑いました．自分のたどたどしい英語にも優しく耳を傾けて頂けたことがとても嬉しかったです．
       Choice modelsをはじめとする様々なテーマのセッションが開かれる中，私はLogisticsのセッションで発表しました．まだまだ自分の知識や英語力が足りず，積極的な議論を行うことができなかったことが悔しいですが，レベルアップしてまた参加できるように日々研究を頑張りたいと思います．このような貴重な機会をいただき，大山先生には大変感謝しています．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/hEART/heart-013.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/hEART/campus.jpg" class="dual_img"/>
    </div>
    <p>
      スイス滞在中に，ルツェルン近くの山に登りました．山の上からは湖や街並みを望むことができ，沢山の地元民と観光客で賑わっていました．ルツェルンの街並みもとても美しかったです．
    </p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/hEART/ropeway.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/hEART/mountain.jpg" class="dual_img"/>
    </div>
    <p>
      チューリッヒ旧市街のトランジットモールは私にとって非常に新鮮で，快適に街歩きをすることができました．また，滞在中は雲１つ無い快晴の日が続き，美しい湖も相まってとても気分が良かったです．いつかまた訪れたいと思いました．
    </p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/hEART/LRT.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/hEART/lakeside.jpg" class="dual_img"/>
    </div>
  </ArticleTemplate>
</template>