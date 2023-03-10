<script setup lang="ts">

interface Props{
  year : string
}

const props = defineProps<Props>();
</script>

<template>
  <q-item>
  <q-item-section class="content-font">
    {{ year }}
  </q-item-section>
  </q-item>
</template>


<style lang="scss" scoped>
  .content-font{
    font-size: 20px;
  }
</style>