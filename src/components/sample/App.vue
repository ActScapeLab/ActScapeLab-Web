<!-- 中身の定義(htmlとか) -->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- ここが引数とれるようになってる -->
  <HelloWorld msg="コロッケ サービス券"/>
</template>

  <!-- テンプレートで使うプログラムを定義 Javascriptとかをかける プログラムの部分はscript -->
  <script>
  import HelloWorld from './components/sample/HelloWorld.vue'
  export default {
    name: 'App',
    components: {
      HelloWorld
    }
  }
  </script>

<!-- CSS -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- 
・プログラムが長くなりそうなら分ける
・よく変更するとか短めなコードはここに書く
コンポーネント（Webページを構成するパーツ）. ページの中身はコンポーネントに作る．App.vueは親ページ
パーツごとにほんとに分ける（メニューバーで一個，Updateで一個みたいな感じ. 本体部分）

親ページには中身は書かない．親ページは事前に定義したものを使う
最初のうちはとりあえずコンポーネントを宣言する（慣れてきたら使い分けを考える）
-->