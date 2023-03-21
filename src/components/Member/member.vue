<script setup lang="ts">
interface Props {
  url  : string;
  name: string;
  keywards? : string;
  from : string;
  hobby : string;
  link?: string
  kind?: string
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

function addResarchWard(kind:string, keywards:string){
  if (kind=='student'){
    return "研究キーワード：" + keywards
  }
}

</script>

<template>
  <q-item :clickable="hasLink" :href="link" :target="target" :kind="kind" class="q-pa-md">
    <q-item-section side>
      <q-avatar size="130px">
        <q-img :src="loadAvatar(url)"/>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <span class="title">{{ name }}</span>
      <p class="theme">{{ addResarchWard(kind, keywards) }}</p>
    </q-item-section>
    <q-item-section v-if="hasLink==true" class="detail-mark">
      {{ addTransMark(hasLink) }}
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
.title {
  font-size: large;
}

.detail-mark{
  text-align: center;
}

</style>