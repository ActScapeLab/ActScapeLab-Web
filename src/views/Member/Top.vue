<script setup lang="ts">
import pageTitle from '@/components/parts/pageTitle.vue';
import staff from '@/components/Member/Staff.vue';
import student from '@/components/Member/student.vue';
import {staffs, students} from '@/views/Member/MemberTree';
</script>

<template>
  <!-- <Staff /> -->
  <pageTitle main="Staff" sub="教員"/>
  <template v-for="staff in staffs">
    <staff
      :url="staff.figPath"
      :name="staff.firstName + staff.lastName"
      :grade="staff.grade"
      :from="staff.from"
      :hobby="staff.hobby" 
      :link="staff.link"
    />
  </template>

  <pageTitle main="Student" sub="学生"/>
  <template v-for="student in students">
    <student
      :img-path="student.figPath"
      :name="student.firstName + student.lastName"
      :keywards="student.keywards"
      :grade="student.grade"
      :from="student.from"
      :hobby="student.hobby" 
      :journal="student.journal"
    />
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