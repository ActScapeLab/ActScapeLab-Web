<script setup lang="ts">
interface Props {
  url  : string;
  name: string;
  keywards : string;
  from : string;
  hobby : string;
}
defineProps<Props>();

function loadAvatar(name:string) {
  return require(`@/assets/Member/${name}.png`)
}
</script>

<template>
  <q-item clickable class="q-pa-md">
    <q-item-section side>
      <q-avatar size="100px">
        <q-img :src="loadAvatar(url)"/>
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <p class="title">{{ name }}</p>
      <p>{{ keywards }}</p>
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
.title {
  font-size: large;
}
</style>