<script setup lang="ts">
import pageTitle from '@/components/parts/pageTitle.vue';
import member from '@/components/Member/member.vue';
import member_new from '@/components/Member/member_new.vue';
import {staff, student} from '@/views/Member/MemberTree';
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
    :link="page.link"/>
  </template>

  <pageTitle main="Student" sub="学生"/>
  <template v-for="(page) in student">
    <member_new
    :img-path="page.figPath"
    :name="page.firstName + page.lastName"
    :keywards="page.keywards"
    :from="page.from"
    :hobby="page.hobby" 
    :journal="page.journal"/>
  </template>

  <q-btn
    clickable
    borderd
    to="/member/alumni/alumni"
    class="Alumni">
      Alumni
  </q-btn>
</template>

<style lang="scss" scoped>
.Alumni{
  width: 100%;
  margin-top: 5%;
}
</style>