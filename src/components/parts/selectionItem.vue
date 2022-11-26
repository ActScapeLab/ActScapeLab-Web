<!-- リストとして表示するアイテムの体裁を定義 -->
<script setup lang="ts">
interface Props {
  title: string,
  description: string,
  link: string
}

const props = defineProps<Props>();
</script>

<template>
  <li>
    <h1 class="selectionTitle">{{title}}</h1>
    <p class="selectionContents">
      <a :href="props.link" target="_blank">{{description}}</a>
    </p>
  </li>
</template>

<style>

li {
  font-family: "Roboto", sans-serif;
  color: #4a525d;
}

h1.selectionTitle {
  font-size: 12pt;
  text-align: left;
  margin: 0px;
  line-height: normal;
}

p.selectionContents {
  text-align: left;
  margin-top: 5px;
  margin-bottom: 15px;
}
</style>