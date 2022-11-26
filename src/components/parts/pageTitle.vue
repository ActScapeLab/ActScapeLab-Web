<!-- 「Members | メンバー」のような各ページの先頭にあるタイトルを定義 -->
<template>
  <h1 class="pageTitle">
    {{main}}<span class="pageTitle">{{getSub(sub)}}</span>
  </h1>  
</template>

<!--
  setupを書いとくと，export defaultとかが必要なくなる
  変数の型に合わないやつが来たら自動検知できるようになる
-->
<script setup lang="ts">
interface Props {
  main: string;
  sub?: string;
}

// subの有無で処理を分けてる. subの指定があるかないかで縦棒をつけるかを決める
function getSub(sub?:string) {
  if (sub != null) return ' | ' + sub;
  else return;
}

// おまじない. pythonのクラスと同じで宣言するだけだと意味ないので，それを宣言してくれる
// defineProps<Props>(); だけで良い. これがないとクラス宣言しただけになる.
//  Typescriptに慣れよう
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
  background: #ffffff;
  font-family: "Roboto", 'Noto Sans JP', sans-serif;
  line-height: 1.4;
  font-weight: 300;
  color: #b2b8c2;
  font-size: 1.424em;
}
span.pageTitle {
  font-size: 0.64em;
}

@font-face {
    font-family: 'icomoon', 'Noto Sans JP', sans-serif;
    src: url("../../font/icomoon.eot");
    src: url("../../font/icomoon.eot") format("embedded-opentype"), url("../../font/icomoon.ttf") format("truetype"), url("../../font/icomoon.woff") format("woff"), url("../../font/icomoon.svg") format("svg");
    font-weight: normal;
    font-style: normal;
  }

</style>