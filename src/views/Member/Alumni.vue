<script setup lang="ts">
import pageTitle from '@/components/parts/pageTitle.vue';
import graduate from '@/components/Member/Alumni/graduate.vue';
import { alumni } from './AlumniTree';
</script>

<template>
  <pageTitle main="Alumni" sub="卒業生" />
  <div class="q-px-lg">
    <template v-for="year in Object.keys(alumni).reverse()">

      <pageTitle :main="`${year}年度`" class="title"/>
      
      <template v-for="person in alumni[year]">
        <graduate
          :firstName="person.firstName"
          :lastName="person.lastName"
          :grade="person.grade"
          :title="person.title"
        />
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