<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import selectionItem from "@/components/parts/selectionItem.vue"
</script>

<template>
  <div class="outline">
    <pageTitle main="News" sub="ニュース" />

    <div class="q-px-lg q-pb-md">
        <q-timeline color="secondary">
        <!-- TODO: 内部リンクの書き換え -->
        
            <selectionItem
            date="November 12-13,2022"
            description="土木計画学秋大会に参加してきました"
            link="news/jsce2022fall.html"/>
        
            <selectionItem
            date="November 12-13,2022"
            description="土木計画学秋大会に参加してきました"
            link="news/jsce2022fall.html"/>
            <selectionItem
            date="November 12-13,2022"
            description="土木計画学秋大会に参加してきました"
            link="news/jsce2022fall.html"/>
            
            <selectionItem
            date="November 10, 2022"
            description="論文がElsevier社の雑誌Travel Behaviour and Societyで公開されました"
            link="https://authors.elsevier.com/c/1g3SE,oML19xKG"/>

            <selectionItem
            date="September 23-25, 2022"
            description="行動モデル夏の学校＠東大で総合一位になりました!"
            link="news/summerschool2022.html"/>
            
            <selectionItem
            date="November 30, 2021"
            description="Oyama, Hara and Akamatsu (2022) Markovian traffic equilibrium assignment based on network generalized extreme
            value model がTransportation Research Part Bで公開されました．"
            link="https://www.sciencedirect.com/science/article/pii/S0191261521001934"/> 

        </q-timeline>
    </div>
  </div>
</template>

<style>
.q-pa-md {
  /*横幅94%で左右に余白を持たせて中央寄せ*/
  width:500px;
  margin-right: auto;
  margin-left: auto;
}

.q-pa-md img {
   width:100%;/*スライダー内の画像を横幅100%に*/
   height:auto;
}

/*slickのJSで書かれるタグ内、スライド左右の余白調整*/
.q-pa-md .slick-slide {
   margin:0 10px;
}

div.q-timeline__dot:before{
  color: gray;
  height: 7px;
  width: 7px;
  top: 7px;
}

li{
  padding-left: 15px !important;
}

li.q-timeline__entry{
  padding-left: 10px;
}

</style>