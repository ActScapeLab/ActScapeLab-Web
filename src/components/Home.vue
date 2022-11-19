<!-- まずはHomeのtemplete. 体裁は気にしない.
とにかく構造に基づいた記述を意識する
Homeとheader(一回見せる) -> CSS(コピるだけ)
+ UpdateはNewsitemみたいにして新しくコンポーネントにしてもいい
-->

<template>
    <div class="title">
        <h1>{{title}}</h1>
        <p>芝浦工業大学 土木工学科</p>
    </div>
    <p>より良い都市環境の設計に向けて,空間と人の行動とのポジティブな相互作用について研究しています.</p>
</template>

<script>
export default {
    name: 'HomeTitle',
    props: {
        title: String
    }
}
</script>