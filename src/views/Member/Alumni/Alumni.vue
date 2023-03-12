<script setup lang="ts">
import pageTitle from '@/components/parts/pageTitle.vue';
import graduate from '@/components/Member/Alumni/graduate.vue';
import { alumni, getThesisType } from '../MemberTree';
</script>

<template>
  <pageTitle main="Alumni" sub="卒業生" />
  <div class="q-pa-md">
    <template v-for="(student) in alumni" :key="index">
      <graduate 
      :firstName="student.firstName"
      :lastName="student.lastName"
      :grade="student.grade"
      :thesisType="getThesisType(student.grade)"
      :title="student.title" />
    </template>
  </div>
</template>