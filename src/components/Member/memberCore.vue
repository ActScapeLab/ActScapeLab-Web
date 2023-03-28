<script setup lang="ts">
interface Props {
  imgPath: string,
  name: string,
  grade: string,
  keywards?: string[]
}
defineProps<Props>()

function loadAvatar(name: string) {
  return require(`@/assets/Member/${name}`)
}
</script>

<template>
  <q-item-section side>
    <q-avatar size="130px">
      <q-img :src="loadAvatar(imgPath)" class="avater-img"/>
    </q-avatar>
  </q-item-section>
  <q-item-section>
    <p class="title q-ma-none">{{ name }} / {{ grade }}</p>
    <p v-show="keywards !== void 0" class="theme desktop-only">研究キーワード：{{ keywards?.join('・') }}</p>
  </q-item-section>
</template>

<style scoped lang="scss">
.avater-img {
  height: 100%;
}

.theme {
  margin-top: 16px;
}
</style>