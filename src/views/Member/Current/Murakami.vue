<script setup lang="ts">
import pageTitle from '@/components/parts/pageTitle.vue';
import question from '@/components/Member/question.vue';
</script>

<template>
  <pageTitle main="村上颯一朗" sub="mukakami " />
  <div class="img">
  <q-img src="@/assets/Member/murakami.png" class="img"/>
  </div>
  <pageTitle main="プロフィール" sub="profile" />
  <p class="profile">
    埼玉県川越市出身．研究テーマは最適な歩行者街路空間設計手法の開発．趣味は麻雀・ヒップホップからポケモンと幅広い，
    最近の楽しみは土日に一歳になる娘と公園で遊ぶこと．
  </p>

  <question 
  question="どうして大山研を選んだんですか？"
  result="地元を変えたかったから"
  answer="私の地元・川越には蔵造りの街並みや時計台といった観光名所が広く点在しています．
  しかし，観光エリア周辺は車通りが多く，歩行者の自由な観光活動に大きな影響を与えてしまっているのです．
  私は，大好きな街・川越にもっと多くの人に訪れてもらいたい，もっと愛してもらいたい，と思っていました．
  そんな時，まちづくりを専門とされている棟梁（大山先生）と出会いました．「ここしかない」って思いましたね．"
  />
  <question 
  question="研究で内容を教えてください"
  result="街路空間再配分"
  answer="街路空間再配分とは，既存の車両と歩道で構成されている道路空間を交通量や歩行者の量から新たに設計する
  ことです．例えば，交通量が多い道路は道路を拡幅，歩行者が多く車両が少ない街路は歩行者専用空間として整備する
  というイメージです．私の研究では，埼玉県川越市を対象として，数理最適化のアルゴリズムを用いて最適な歩行者専用街路の
  創出に取り組んでいます．"
  />
  <question 
  question="研究で気をつけていることはありますか"
  result="常に考え続けること"
  answer="これは研究室に入れば棟梁から繰り返し言われることです，当たり前のことなんですが，意外とできてない人が
  多いですね（笑）．考え続けることで全く関係ないとき，例えば普通に街を歩いている時なんかにアイデアがフッと
  浮かんでくることがよくあります．考え続けていると日常の見え方が変わります．特に我々は人の行動，ひいては都市を
  相手に研究やらせてもらってるので，日常にヒントが隠れてることは多いですね．"
  />

  <pageTitle main="関連記事" />

</template>

<style>

.profile{
  width: 90%;
  font-size: 18px;
  color: #4a525d;
  line-height: 1.2;
  margin-left: 2%;
  line-height: 150%
}

.img{
  width: 30%;
  margin-left: 25%;
}
</style>