<script setup lang="ts">
import { getThesisType } from '@/views/Member/MemberTree';
interface Props{
  firstName : string
  lastName : string
  grade : string
  title : string
}
defineProps<Props>();
</script>

<template>
  <q-item>
  <q-item-section>
    <p class="self-name">{{ firstName + lastName + '/' +grade }}</p>
    <p>{{ getThesisType(grade) + ':' + title }}</p>
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