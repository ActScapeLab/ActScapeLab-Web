<script setup lang="ts">

interface Props{
  name : string
  title : string
}

const props = defineProps<Props>();

</script>

<template>
  <q-item>
  <q-item-section class="content-font">
    <p class="self-name">{{ name }}</p>
    <p>{{ title }}</p>
  </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>

p{
  margin: 0px;
}

.self-name::before{
  content: "・";
}

</style>