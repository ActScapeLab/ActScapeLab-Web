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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
/* srcがいっぱいあるのは,各ブラウザに対応しているフォントを自動で検出するため */
@font-face {
    font-family:'Abel', 'Noto Sans JP', sans-serif;
    src: url("../../font/Abel-Regular.ttf") format("truetype") url("../../font/NotoSansJP-Thin.otf") format("truetype") ;
    font-weight: normal;
    font-style: normal;
  }

.pageTitle {
  /* TODO: フォントの決定 */
  /* タイトルだけでなく，ページ全体で全て同じなら styles/quasar.variables.scss に記述しても良い */
  margin: 1.414em 0 0.5em;
  padding: 0;
  line-height: 1.2;  
}

h1.pageTitle {
  background: #ffffff;
  font-family: "Abel", "Noto Sans JP", sans-serif;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 300;
  color: #4a525d;
}
span.pageTitle {
  font-size: 0.64em;
}


</style>