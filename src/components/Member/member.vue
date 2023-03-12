<script setup lang="ts">
interface Props {
  url  : string;
  name: string;
  keywards? : string;
  from : string;
  hobby : string;
  link?: string
}
const props = defineProps<Props>();

function loadAvatar(name:string) {
  return require(`@/assets/Member/${name}`)
}

const hasLink = props.link !== undefined
// 三項演算子 を使ってる （?:True，コロン:False）となる
// _blank が新しいページ，_selfが自分自身を更新するという約束語
const target = '_self'
</script>

<template>
  <q-item :clickable="hasLink" :href="link" :target="target" class="q-pa-md">
    <q-item-section side>
      <q-avatar size="100px">
        <q-img :src="loadAvatar(url)"/>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <p class="title">{{ name }}</p>
      <p class="theme">{{ keywards }}</p>
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
.title {
  font-size: large;
}
</style>