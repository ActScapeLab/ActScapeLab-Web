<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="ゼミ合宿を開催しました！！ ＠上水内郡，長野県"
    :startYear="2023"
    :startMonth="12"
    :startDate="24"
    :endDate="26"
    authorGrade="M2"
    authorName="玉木"
  >
  <p>12月下旬に，長野県上水内郡の「黒姫ライジングサンホテル」にて，修論・卒論の中間発表とスノーアクティビティを兼ねた合宿を開催しました．</p>
  <p>1日目は長野駅から善光寺までまち歩きをしました．善光寺表参道を歩き，おやきや甘酒などを食べ歩きしました．近頃大山研究室では，アイスじゃんけんなるものが流行しており，今回の食べ歩きでも実施されました．</p>
  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/huyugassyuku/tabearuki.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/huyugassyuku/janken.jpeg" class="dual_img"/>
    </div>
  <p>昼食は善光寺表参道を外れた場所にある「かんただ」という蕎麦屋さんを訪問しました．店名の「かんだた」は、芥川竜之介の「蜘蛛の糸」に出てくる登場人物の名前から取られたものです．
    悪いことをしてで地獄にいるところを，蜘蛛の糸をたぐって、極楽まで登っていこうとする男の話で，「かんだた」は，自分ばかりが助かろうとしたため，途中で糸が切れ，再び地獄に落ちてしまうのです．
    お店で出されている細めの蕎麦が「細くて切れやすい」ということから，この話にかけた店名となっているそうです．自家製野菜の小鉢や巣ごもりという打ちたてのそばをさくっと揚げたあんかけそばなど，とても美味しかったです．</p>
  <p>午後は発表のために「黒姫ライジングサンホテル」に移動し，夕食前に発表を行いました．夕食を食べ終えた後は，各々自由行動で，発表会場でM-1を視聴する人，翌日の発表に備える人もいました．令和ロマンさん優勝おめでとうございます！</p>
  <div class="row justify-evenly image-zone">
    <q-img src="@/assets/News/2023/huyugassyuku/happyou1.jpeg" class="dual_img"/>
    <q-img src="@/assets/News/2023/huyugassyuku/happyou2.jpeg" class="dual_img"/>
  </div>
  <p>2日目は，スノーボードチーム，クロスカントリーチームに分かれ，スノーアクティビティを楽しみました．私自身2年ぶりのスノーボードでしたが，新雪もありとても楽しめました．</p>
  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/huyugassyuku/yukimiti.jpeg" class="dual_img"/>
      <q-img src="@/assets/News/2023/huyugassyuku/sunobo.jpg" class="dual_img"/>
    </div>
  <p>夕方からは残りの発表を実施しましたが，午前中に運動したこともあり，みんな疲れ切っていました．</p>
  <p>3日目は長野駅にて解散し，電車を撮りに行く人，日本酒を飲みに行く人など各々自由な時間を過ごしました．</p>
  <p>今回は発表合宿に加え，スノーアクティビティも実施され，とても有意義な合宿となりました．企画，進行をしてくれたM1の岡崎くん，送迎や会場設営をしてくださった黒姫ライジングサンホテルの方々ありがとうございました！</p>
  
  <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/huyugassyuku/syuugou.jpg"/>
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