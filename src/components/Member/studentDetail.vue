<script setup lang="ts">
import { getArticleItem } from '@/assets/articles/bibVue';

interface Props {
  keywards : string[];
  from : string;
  hobby : string[];
  journalKeys?: string[]
}
defineProps<Props>()
</script>

<template>
  <q-card class="q-pa-md">
    <q-card-section class="q-pa-none mobile-only">
      <p>研究キーワード：</p>
      <ul>
        <li v-for="keyward in keywards">{{ keyward }}</li>
      </ul>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <p>出身：{{ from }}</p>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <p>趣味：{{ hobby?.join('・') }}</p>
    </q-card-section>
    <q-card-section v-show="journalKeys !== void 0" class="q-pa-none">
      <p class="journal">発表論文：</p>
      <ul>
        <template v-for="data in journalKeys?.map(name => getArticleItem(name))">
          <li>
            <a v-if="data[3]"  :href="data[3]" target="_blank" class="hasLink">{{ data[1] }}，{{ data[0] }}</a>
            <a v-else>{{ data[1] }}，{{ data[0] }}</a>
          </li>
        </template>
      </ul>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>

.hasLink{
  color: $secondary;
}

</style>