<!-- まずはHomeのtemplete. 体裁は気にしない.
とにかく構造に基づいた記述を意識する
Homeとheader(一回見せる) -> CSS(コピるだけ)
+ UpdateはNewsitemみたいにして新しくコンポーネントにしてもいい
-->

<template>
    <pageTitle main="大山研究室" sub="芝浦工業大学 土木工学科"/>
    
    <p>より良い都市環境の設計に向けて,空間と人の行動とのポジティブな相互作用について研究しています.</p>

    <ul class="slider">
        <li><img src="@/assets/Home/bench.png"></li>
        <li><img src="@/assets/Home/murakami.png"></li>
        <li><img src="@/assets/Home/tsukechi.png"></li>
        <li><img src="@/assets/Home/tojo.png"></li>
    </ul>

    <Update/>

</template>

<script>
import Update from "@/components/Home/Update.vue";
import pageTitle from "@/components/parts/pageTitle.vue"

export default {
    name: 'HomeTitle',
    components: {
        pageTitle,
        Update,
    }
}
</script>
<!-- <script src="./src/components/js/slideshow.js"></script> -->