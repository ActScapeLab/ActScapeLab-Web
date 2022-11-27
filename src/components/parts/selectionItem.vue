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
  <q-timeline-entry
    :title="description"
    :subtitle="date"
  />
</template>
