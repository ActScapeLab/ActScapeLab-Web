<!-- 「Members | メンバー」のような各ページの先頭にあるタイトルを定義 -->
<template>
  <h1>{{main}} | {{sub}}</h1>  
</template>

<script setup lang="ts">
interface Props {
  main: string;
  sub : string;
}

const prop = defineProps<Props>();
</script>

<style>
h1 {
  /* TODO: フォントの決定 */
  /* タイトルだけでなく，ページ全体で全て同じなら styles/quasar.variables.scss に記述しても良い */
  font-family: inherit;
}
</style>