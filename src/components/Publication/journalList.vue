<!-- リストとして表示するアイテムの体裁を定義 -->
<script setup lang="ts">
import { getArticleItem } from '@/assets/articles/bibVue';

interface Props {
  articleKey: string
}
const props = defineProps<Props>();

let writer: string
let title:string
let journal:string
let url: string | undefined
[writer, title, journal,url] = getArticleItem(props.articleKey)
const hasLink = url !== void 0
</script>

<template>
  <q-item flat :clickable="hasLink" :href="url" target="_blank">
    <q-item-section>
      <li>
        <p v-if="hasLink" class="hasLink title"> {{ title }} </p>
        <p v-else class="title"> {{ title }} </p>
        <p> {{ journal }} </p>
        {{ writer }}
      </li>
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
.hasLink{
  color: $secondary;
}

.title{
  font-weight: 400;
  font-size: large;
  margin-bottom: 2px;
}

p {
margin: 0px;
}
</style>