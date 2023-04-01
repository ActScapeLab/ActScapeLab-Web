<script setup lang="ts">
interface Props {
  keywards : string[];
  from : string;
  hobby : string[];
  journal?: string[]
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
    <q-card-section v-show="journal !== void 0" class="q-pa-none">
      <p class="journal">発表論文：</p>
      <ul v-for="paper in journal">
        <li>{{ paper }}</li>
      </ul>
    </q-card-section>
  </q-card>
</template>