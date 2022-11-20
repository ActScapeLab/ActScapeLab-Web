<script setup lang="ts">

interface Props {
  link  : string;
  avatar: string;
  label : string;
}

const props = defineProps<Props>();
</script>

<template>
  <q-item to="/main">
    <q-item-section avatar>
      <q-icon name=school />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{label}}</q-item-label>
      <q-item-label caption>{{label}}</q-item-label>
    </q-item-section>
  </q-item>
</template>