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
  <q-timeline-entry class="selection"
        :title="description"
        :subtitle="date"
      />
</template>

<style>
.selection{
  font-family: "Roboto", "Noto Sans JP", sans-serif;
  padding-left: 10px;
}

div.q-timeline__subtitle{
  font-size: 15px;
  font-weight: 300;
  text-transform: capitalize;
}

.q-timeline__title{
  font-size: 15px;
  font-weight: 300;
}

</style>