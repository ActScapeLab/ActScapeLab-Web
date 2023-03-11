<script setup lang="ts">
interface Props{
  year : string
}
defineProps<Props>();

</script>


<template>
  <q-item>
  <q-item-section class="year">
    {{ year }}
  </q-item-section>
  </q-item>
</template>


<style lang="scss" scoped>
.year{
  font-size: 20px;
}
</style>