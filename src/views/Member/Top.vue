<script setup lang="ts">
import pageTitle from '@/components/parts/pageTitle.vue';
import MemberCore from '@/components/Member/memberCore.vue';
import studentDetail from '@/components/Member/studentDetail.vue';
import {staffs, students} from '@/views/Member/MemberTree';
</script>

<template>
  <pageTitle main="Staff" sub="教員"/>
  <q-list v-for="staff in staffs">
    <q-item clickable :href="staff.link" class="q-pa-md">
      <MemberCore
        :name="staff.firstName+staff.lastName"
        :img-path="staff.figPath"
        :grade="staff.grade"
      />
      <q-item-section side>
        <q-icon name="keyboard_arrow_right" size="24px"/>
      </q-item-section>
    </q-item>
  </q-list>
    
  <pageTitle main="Student" sub="学生"/>
  <q-list v-for="student in students">
    <q-list class="rounded-borders">
      <q-expansion-item>
        <!-- 画像部分 -->
        <template v-slot:header>
          <MemberCore
            :name="student.firstName+student.lastName"
            :img-path="student.figPath"
            :grade="student.grade"
            :keywards="student.keywards"
          />
        </template>

        <!-- 下の拡張部分 -->
        <studentDetail
          :keywards="student.keywards"
          :from="student.from"
          :hobby="student.hobby"
          :journal-keys="student.journalKeys"
        />
      </q-expansion-item>

      <q-separator spaced/>
    </q-list>
  </q-list>

  <q-btn
    label="Alumni"
    clickable
    borderd
    href="/Member/Alumni"
    class="Alumni"
  />
</template>

<style lang="scss" scoped>
.Alumni{
  width: 100%;
  margin-top: 5%;
}
</style>