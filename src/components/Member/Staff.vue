<script setup lang="ts">
import MemberCore from './memberCore.vue';

interface Props {
  url  : string;
  name: string;
  grade: string;
  from : string;
  hobby : string[];
  link: string
}
defineProps<Props>();
</script>

<template>
  <q-item clickable :href="link" class="q-pa-md">
    <MemberCore 
      :name="name"
      :img-path="url"
      :grade="grade"
    />
    <q-item-section side>
      <q-icon name="keyboard_arrow_right" size="24px"/>
    </q-item-section>
  </q-item>
</template>