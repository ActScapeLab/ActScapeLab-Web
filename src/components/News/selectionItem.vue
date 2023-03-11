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
// 三項演算子 を使ってる （?:True，コロン:False）となる
// _blank が新しいページ，_selfが自分自身を更新するという約束語
const target = props.link?.slice(0, 4) == 'http' ? '_blank' : '_self'
</script>

<template>
  <q-timeline-entry :color="color" :icon="icon" class="content-font">
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

.title {
  font-size: 15px;
  font-weight: 300;
}

.capitalize {
  text-transform: capitalize;
}

</style>