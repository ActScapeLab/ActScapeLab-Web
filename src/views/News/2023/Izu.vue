<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="ゼミ合宿を開催しました!!@伊豆長岡,静岡県"
    :startYear="2023"
    :startMonth="5"
    :startDate="18"
    :endDate="20"
    authorGrade="M2"
    authorName="松村"
  >
    <p>5月18日(木)~20日(土)に静岡県伊豆の国市の「コナステイ伊豆長岡」にて，論文ゼミ合宿を開催しました．1日目は朝9時に三島駅に集合し,街歩きをしました．当日の発表に備える前泊勢も何人かいました．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/izu/aruku.jpg" class="img-width"/>
      <q-img src="@/assets/News/2023/izu/tamaki.jpg" class="img-width"/>
    </div>
    <p>街歩きでは三島大社や楽寿園といった歴史，水の都として名高い三島の親水空間を楽しみました．富士山の地下水が流れ込む小川はとても綺麗で癒されました．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/izu/shinsui1.jpg" class="img-width"/>
      <q-img src="@/assets/News/2023/izu/shinsui2.jpg" class="img-width"/>
    </div>
    <p>午後からは論文ゼミのために，コナステイに移動しました． このホテルはロードバイクをコンセプトとしたホテルであり，2020東京オリンピックの自転車チームが宿泊したということで，聖地となってるらしいです． 施設自体非常に綺麗で，無料のドリンクや焚き火の設備もあったので効用高めです．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/izu/bed.png" class="img-width"/>
    </div>
    <p>発表はコモンダイニングという食事会場を貸し切って行いました． 準備を頑張ったおかげで自分にとっても，みんなにとっても良い内容になったと思います！</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/izu/imamura.jpeg" class="img-width"/>
      <q-img src="@/assets/News/2023/izu/sunada.jpeg" class="img-width"/>
    </div>
    <p>二日目はレンタルサイクルで修善寺に行く予定でしたが，あいにくの雨だったので電車で移動しました． 修善寺駅では 修善寺まきのちゃん が迎えてくれました．可愛いです．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/izu/makino.jpeg" class="img-width"/>
    </div>
    <p>修善寺はその一帯も観光エリアになっており,「竹林の小径」や足湯も楽しみました．昼食は偶然見つけた「さくだ」というお蕎麦屋さんに行きました． 手作り屋台のような味のある店内では，十割そばが600円でいただけます．わさびと塩だけで食べる塩そばは美味しかったです． 夕方からは論文ゼミpart2と打ち上げをしました！！</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/izu/syuzenji1.jpg" class="img-width"/>
      <q-img src="@/assets/News/2023/izu/syuzenji2.jpg" class="img-width"/>
    </div>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/izu/soba.png" class="img-width"/>
    </div>
    <p>今回は大山研究室発足4年目にして初めての合宿でした． これを機に大山研の定例行事を増やしていきます！準備してくれたメンバーや会場を貸していただいたホテルの方々ありがとうございました！</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/izu/syugo.png"/>
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