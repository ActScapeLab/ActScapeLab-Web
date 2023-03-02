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
  <q-timeline-entry class="selection">
    <template v-slot:title>
      <q-item flat clickable :to="link" class="title">
        {{ description }}
      </q-item>
    </template>
    <template v-slot:subtitle>
      <div class="title capitalize">
        {{ date }}
      </div>
    </template>
  </q-timeline-entry>
</template>

<style>
.selection{
  font-family: "Roboto", "Noto Sans JP", sans-serif;
  padding-left: 10px;
}

.title {
  font-size: 15px;
  font-weight: 300;
}

.capitalize {
  text-transform: capitalize;
}

</style>