<script setup lang="ts">
import MemberCore from './memberCore.vue';

interface Props {
  imgPath  : string;
  name: string;
  keywards : string[];
  grade: string;
  from : string;
  hobby : string[];
  journal?: string[]
}
defineProps<Props>();
</script>

<template>
  <q-list class="rounded-borders">
    <q-expansion-item>
      <template v-slot:header>
        <member-core
          :img-path="imgPath"
          :name="name"
          :grade="grade"
          :keywards="keywards"
        />
      </template>

      <q-card class="q-pa-md">
        <q-card-section class="q-pa-none mobile-only">
          <p>研究キーワード：</p>
          <ul>
            <li v-for="keyward in keywards">{{ keyward }}</li>
          </ul>
        </q-card-section>
        <q-card-section class="q-pa-none">
          <p>出身：{{ from }}</p>
        </q-card-section>
        <q-card-section class="q-pa-none">
          <p>趣味：{{ hobby?.join('・') }}</p>
        </q-card-section>
        <q-card-section v-show="journal !== void 0" class="q-pa-none">
          <p class="journal">発表論文：</p>
          <ul v-for="paper in journal">
            <li>{{ paper }}</li>
          </ul>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator spaced/>
  </q-list>
</template>