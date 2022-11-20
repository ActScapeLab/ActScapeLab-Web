<!-- 「Members | メンバー」のような各ページの先頭にあるタイトルを定義 -->
<template>
  <h1 class="pageTitle">
    {{main}}<span class="pageTitle">{{getSub(sub)}}</span>
  </h1>  
</template>



<script setup lang="ts">
interface Props {
  main: string;
  sub?: string;
}

function getSub(sub?:string) {
  if (sub != null) return ' | ' + sub;
  else return;
}

const prop = defineProps<Props>();
</script>



<style>
.pageTitle {
  /* TODO: フォントの決定 */
  /* タイトルだけでなく，ページ全体で全て同じなら styles/quasar.variables.scss に記述しても良い */
  font-family: inherit;
  
  margin: 1.414em 0 0.5em;
  padding: 0;
  line-height: 1.2;  
}
h1.pageTitle {
  font-size: 1.424em;
}
span.pageTitle {
  font-size: 0.64em;
}
</style>