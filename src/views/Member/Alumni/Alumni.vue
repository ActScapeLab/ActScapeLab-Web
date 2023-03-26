<script setup lang="ts">
import pageTitle from '@/components/parts/pageTitle.vue';
import graduate from '@/components/Member/Alumni/graduate.vue';
import { alumni, alumni_num } from '../MemberTree';
</script>

<template>
  <pageTitle main="Alumni" sub="卒業生" />
  <div class="q-px-lg">
    <template v-for="year in alumni_num" :key="index">
      <pageTitle :main="`${year.year}年度`" class="title"/>
      <template v-for="student in alumni" :key="index">
        <div v-if="year.year == student.year">
          <graduate 
            :firstName="student.firstName"
            :lastName="student.lastName"
            :grade="student.grade"
            :title="student.title"
          />
        </div>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.title{
  margin-top: 2%;
  margin-bottom: 0%;
}
</style>