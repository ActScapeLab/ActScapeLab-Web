<!-- まずはHomeのtemplete. 体裁は気にしない.
とにかく構造に基づいた記述を意識する
Homeとheader(一回見せる) -> CSS(コピるだけ)
+ UpdateはNewsitemみたいにして新しくコンポーネントにしてもいい
-->
<script setup lang="ts">
import Main from "@/components/Home/Main.vue";
import Update from "@/components/Home/Update.vue";
</script>

<template>
  <Main />
  <Update />
</template>