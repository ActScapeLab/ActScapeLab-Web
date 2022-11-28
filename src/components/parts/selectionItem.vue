<!-- リストとして表示するアイテムの体裁を定義 -->
<script setup lang="ts">
interface Props {
  date: string,
  description: string,
  link: string
}

const props = defineProps<Props>();
</script>

<template>
  <div class="selection">
    <q-timeline-entry
      :title="description"
      :subtitle="date"
    />
  </div>
</template>

<style>
div.selection{
  font-family: "Roboto", "Noto Sans JP", sans-serif;
  padding-left: 10px;
}

div.q-timeline__subtitle{
  font-size: 15px;
  font-weight: 300;
  text-transform: capitalize;
}

h6.q-timeline__title{
  font-size: 15px;
  font-weight: 300;
}

</style>