<!-- リストとして表示するアイテムの体裁を定義 -->
<script setup lang="ts">
interface Props {
  date: string,
  description: string,
  link?: string
}

const props = defineProps<Props>();

const hasLink = props.link !== undefined
</script>

<template>
  <q-timeline-entry class="base">
    <template v-slot:title>
      <q-item flat :clickable="hasLink" :href="link" target="_blank" class="title">
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

<style lang="scss" scoped>
/* TODO: 点のサイズを小さくして，色をグレーにする */
.base {
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