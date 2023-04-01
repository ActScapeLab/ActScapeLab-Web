<!-- リストとして表示するアイテムの体裁を定義 -->
<script setup lang="ts">
import { getArticleItem } from '@/assets/articles/bibVue';

interface Props {
  articleKey: string
}
const props = defineProps<Props>();

let strLine: string
let url: string | undefined
[strLine, url] = getArticleItem(props.articleKey)
const hasLink = url !== void 0
</script>

<template>
  <q-item flat :clickable="hasLink" :href="url" target="_blank">
    <q-item-section>
      <li>{{ strLine }}</li>
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
.linkTitle{
  color: $secondary;
}

p {
margin: 0px;
}
</style>