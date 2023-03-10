<!-- 「Members | メンバー」のような各ページの先頭にあるタイトルを定義 -->
<template>
  <h1 class="pageTitle title-font">
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

<style lang="scss" scoped>
h1.pageTitle {
    background: #ffffff;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 300;
    color: #4a525d;
  }

.pageTitle {
  /* TODO: フォントの決定 */
  /* タイトルだけでなく，ページ全体で全て同じなら styles/quasar.variables.scss に記述しても良い */
  margin: 1.414em 0 0.5em;
  padding: 0;
  line-height: 1.2;
  letter-spacing: 1.5px;
  text-transform: uppercase; 
}

span.pageTitle {
  font-size: 0.64em;
}
</style>