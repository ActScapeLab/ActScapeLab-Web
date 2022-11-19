<!-- 中身の定義(htmlとか) -->
<template>
  <HomeHeader/>
  <!-- ここが引数とれるようになってる -->
  <Home/>
  <HomeFoot/>
</template>

<!-- テンプレートで使うプログラムを定義 Javascriptとかをかける プログラムの部分はscript -->
<script>
import HomeHeader from './components/base/HomeHeader.vue';
import Home from './components/Home.vue';
import HomeFoot from './components/base/HomeFoot.vue';

export default {
  components: {
    HomeHeader,
    Home,
    HomeFoot
  }
}
</script>

<!-- CSS -->
<style>
/* このWebページ全体にかかる設定 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
a {
  text-decoration: none;
}

.slider {
  /*横幅94%で左右に余白を持たせて中央寄せ*/
  width: 94%;
  margin: 0 auto;
}

.slider img {
  width: 30%;
  /*スライダー内の画像を横幅100%に*/
  height: auto;
}

@import "./css/Home.css"
</style>

<!-- 
・プログラムが長くなりそうなら分ける
・よく変更するとか短めなコードはここに書く
コンポーネント（Webページを構成するパーツ）. ページの中身はコンポーネントに作る．App.vueは親ページ
パーツごとにほんとに分ける（メニューバーで一個，Updateで一個みたいな感じ. 本体部分）

親ページには中身は書かない．親ページは事前に定義したものを使う
最初のうちはとりあえずコンポーネントを宣言する（慣れてきたら使い分けを考える）
-->