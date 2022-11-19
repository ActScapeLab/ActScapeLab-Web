<!-- 「Members | メンバー」のような各ページの先頭にあるタイトルを定義 -->
<template>
  <h1>{{main}} | {{sub}}</h1>  
</template>

<script>
export default {
  name: "page-title",
  props: {
    main: String,
    sub: String
  }
}
</script>