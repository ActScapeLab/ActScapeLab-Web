<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
</script>

<template>
  <pageTitle main="News" sub="ニュース" />

  <!-- 
    ここの中にはrouter.tsの中身が入ってくる
    ここの中身がTop.vueが呼ばれてる
    
  -->

  <router-view></router-view>
</template>