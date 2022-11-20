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