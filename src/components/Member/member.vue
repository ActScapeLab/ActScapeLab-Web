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


const hasLink = props.link !== undefined
const target = '_self'

function loadAvatar(name:string) {
  return require(`@/assets/Member/${name}`)
}
function addTransMark(hasLink:boolean) {
  if (hasLink) {
    return ">>>"
  }
}
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
    <q-item-section>
      {{ addTransMark(hasLink) }}
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
.title {
  font-size: large;
}
</style>