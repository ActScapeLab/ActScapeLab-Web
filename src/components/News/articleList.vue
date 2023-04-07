<script setup lang="ts">
import { getArticle4News } from '@/assets/articles/bibVue';

interface Props {
  keys: string[]
}
defineProps<Props>()
</script>

<template>
  <ol>
    <template v-for="data in keys.map(name => getArticle4News(name))">
      <li>
        <a :href="data[1]">{{ data[0] }}</a>
      </li>
    </template>
  </ol>
</template>