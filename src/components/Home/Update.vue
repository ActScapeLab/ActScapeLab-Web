<template>
  <pageTitle main="Updates" />
  <ul>
    <!-- TODO: 内部リンクの書き換え -->
    <selectionItem
      title="November 12-13,2022"
      description="土木計画学秋大会に参加してきました"
      link="news/jsce2022fall.html"/>
    
    <selectionItem
      title="November 10, 2022"
      description="論文がElsevier社の雑誌Travel Behaviour and Societyで公開されました"
      link="https://authors.elsevier.com/c/1g3SE,oML19xKG"/>

    <selectionItem
      title="September 23-25, 2022"
      description="行動モデル夏の学校＠東大で総合一位になりました!"
      link="news/summerschool2022.html"/>
    
    <selectionItem
      title="November 30, 2021"
      description="Oyama, Hara and Akamatsu (2022) Markovian traffic equilibrium assignment based on network generalized extreme
        value model がTransportation Research Part Bで公開されました．"
      link="https://www.sciencedirect.com/science/article/pii/S0191261521001934"/> 

  </ul>
</template>

<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import selectionItem from "@/components/parts/selectionItem.vue"
</script>