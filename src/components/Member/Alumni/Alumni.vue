<script setup lang="ts">
import pageTitle from '@/components/parts/pageTitle.vue';
import graduate from '@/components/Member/Alumni/graduate.vue';
import { tree, getThesisType } from './AlumniTree';
</script>

<template>
  <pageTitle main="Alumni" sub="卒業生" />
  <div class="q-pa-md">
    <template v-for="(alumni) in tree" :key="index">
      <graduate 
      :firstName="alumni.firstName"
      :lastName="alumni.lastName"
      :grade="alumni.grade"
      :thesisType="getThesisType(alumni.grade)"
      :title="alumni.title" />
    </template>
  </div>
</template>