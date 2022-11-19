<!-- リストとして表示するアイテムの体裁を定義 -->
<template>
  <li>
    <h1 class="selectionTitle">{{title}}</h1>
    <p class="selectionContents"><a href={{link}}>{{description}}</a></p>
  </li>
</template>

<script>
export default {
  name: "selection-item",
  props: {
    title: String,
    description: String,
    link: URL
  }
}
</script>

<style>
h1.selectionTitle {
  font-weight: lighter;
  font-size: 14pt;
  text-align: left;
  margin: 0px;
}
p.selectionContents {
  text-align: left;
  margin-top: 5px;
  margin-bottom: 15px;
}
</style>