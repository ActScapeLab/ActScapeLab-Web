<script setup lang="ts">
import pageTitle from '@/components/parts/pageTitle.vue';
import member from '@/components/Member/member.vue';
import {staff, student, getLink} from '@/views/Member/MemberTree';
</script>

<template>
  <!-- <Staff /> -->
  <pageTitle main="Staff" sub="教員"/>
  <template v-for="(page) in staff">
    <member
    :url="page.figPath"
    :name="page.firstName + page.lastName"
    :from="page.from"
    :hobby="page.hobby" 
    :link="getLink(page.link)"/>
  </template>


  <pageTitle main="Student" sub="学生"/>
  <template v-for="(page) in student">
    <member
    :url="page.figPath"
    :name="page.firstName + page.lastName"
    :keywards="page.keywards"
    :from="page.from"
    :hobby="page.hobby" 
    :link="getLink(page.link)"/>
  </template>
  <q-btn
    clickable
    class="Alumni"
    borderd
    to="/Alumni">
      Alumni
  </q-btn>
</template>

<style lang="scss" scoped>
.Alumni{
  width: 100%;
}
</style>