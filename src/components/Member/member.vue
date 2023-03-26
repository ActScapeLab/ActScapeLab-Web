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
</script>

<template>
  <q-item :clickable="hasLink" :href="link" :target="target" :kind="kind" class="q-pa-md">
    <q-item-section side>
      <q-avatar size="130px">
        <q-img :src="loadAvatar(url)" class="avater-img"/>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <span class="title">{{ name }}</span>
      <p v-show="keywards !== void 0" class="theme">研究キーワード：{{ keywards }}</p>
    </q-item-section>
    <q-item-section side v-show="hasLink == true" class="detail-mark">
      <q-avatar icon="chevron_right" size="130px" square/>
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
.title {
  font-size: large;
}

.avater-img {
  height: 100%;
}

</style>