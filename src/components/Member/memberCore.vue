<script setup lang="ts">
interface Props {
  imgPath: string,
  name: string,
  grade: string,
  keywards?: string[]
  address?:string
}
defineProps<Props>()

function loadAvatar(name: string) {
  return require(`@/assets/Member/${name}`)
}
</script>

<template>
  <q-item-section side>
    <q-avatar size="130px">
      <q-img v-if="grade!=='秘書'" :src="loadAvatar(imgPath)" class="avater-img"/>
      <q-img v-else :src="loadAvatar(imgPath)" class="secretary-img"/>
    </q-avatar>
  </q-item-section>
  <q-item-section>
    <p class="title q-ma-none">{{ name }} / {{ grade }}</p>
    <span v-show="keywards !== void 0" class="theme">研究キーワード：{{ keywards?.join('・') }}</span>
    <span v-show="address !== void 0" class="theme"> 連絡先 : {{ address }} </span>
  </q-item-section>
</template>

<style scoped lang="scss">
.avater-img {
  height: 100%;
}

.secretary-img{
  height: 70%;
  width: 70%;
}

.title{
  font-weight: 400;
}

// .theme {
//   margin-top: 16px;
// }
</style>