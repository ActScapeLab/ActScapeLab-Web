<script setup lang="ts">
interface Props{
  firstName : string
  lastName : string
  grade : string
  thesisType: string
  title : string
}
defineProps<Props>();
</script>

<template>
  <q-item>
  <q-item-section>
    <p class="self-name">{{ firstName + lastName + '/' +grade }}</p>
    <p>{{ thesisType + ':' +title }}</p>
  </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
p {
  margin: 0px;
}

.self-name::before{
  content: "・";
}
</style>