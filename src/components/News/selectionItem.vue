<!-- リストとして表示するアイテムの体裁を定義 -->
<script setup lang="ts">
interface Props {
  icon: string,
  color: string,
  date: string,
  description: string,
  link?: string
}

const props = defineProps<Props>();

const hasLink = props.link !== undefined
const target = props.link?.slice(0, 4) == 'http' ? '_blank' : '_self'
</script>

<template>
  <q-timeline-entry :color="color" :icon="icon" class="base">
    <template v-slot:title>
      <q-item flat :clickable="hasLink" :href="link" :target="target" class="q-pa-none title">
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
.base {
  font-family: "Roboto", "Noto Sans JP", sans-serif;
}

.title {
  font-size: 15px;
  font-weight: 300;
}

.capitalize {
  text-transform: capitalize;
}

</style>