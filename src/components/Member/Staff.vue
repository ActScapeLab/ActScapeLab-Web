<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
</script>

<template>
  <pageTitle main="Staff" sub="スタッフ" />
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-skeleton type="circle"/>
      <p>准教授 / 大山雄己</p>
      <q-skeleton height="150px"/>
    </div>
  </div>
</template>