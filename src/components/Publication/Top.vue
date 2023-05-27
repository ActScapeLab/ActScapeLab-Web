<script setup lang="ts">
import { bibRefereed } from "@/assets/articles/thesisRefereed";
import { bibOther } from "@/assets/articles/thesisOther";
import { bibBook } from "@/assets/articles/thesisBook";
import { bibInternational } from "@/assets/articles/thesisInternational";
import { bibGraduate } from "@/assets/articles/thesisGraduate";
import pageTitle from "@/components/parts/pageTitle.vue"
import journallist from "@/components/Publication/journalList.vue"
import graduate from "../Member/Alumni/graduate.vue";
import { alumni } from "@/views/Member/AlumniTree";

const refereedKeys = Object.keys(bibRefereed)
const InternationalKeys = Object.keys(bibInternational)
const bookKeys = Object.keys(bibBook)
const otherKeys = Object.keys(bibOther)
const graduateKeys = Object.keys(bibGraduate)
</script>

<template>
  <pageTitle main="研究実績"/>
  <q-list class="rounded-borders">
    <q-expansion-item
      switch-toggle-side
    >
      <template v-slot:header>
        <q-item-section class="theme-title">
          01/審査付き雑誌論文
        </q-item-section>
      </template>
      <q-card>
        <ol>
          <template v-for="key in refereedKeys">
            <journallist :article-key="key"/>
          </template>
        </ol>
      </q-card>
    </q-expansion-item>
    <q-separator spaced/>

    <q-expansion-item
      switch-toggle-side>
      <template v-slot:header>
        <q-item-section class="theme-title">
          02/国際会議(査読あり)
        </q-item-section>
      </template>
      <q-card>
        <ol>
          <template v-for="key in InternationalKeys">
            <journallist :article-key="key"/>
          </template>
        </ol>
      </q-card>
    </q-expansion-item>
    <q-separator spaced/>
    
    <q-expansion-item
      switch-toggle-side>
      <template v-slot:header>
        <q-item-section class="theme-title">
          03/分担著書
        </q-item-section>
      </template>
      <q-card>
        <ol>
          <template v-for="key in bookKeys">
            <journallist :article-key="key"/>
          </template>
        </ol>
      </q-card>
    </q-expansion-item>
    <q-separator spaced/>

    <q-expansion-item
      switch-toggle-side>
      <template v-slot:header>
        <q-item-section class="theme-title">
          04/学会発表(査読なし)
        </q-item-section>
      </template>
      <q-card>
        <ol>
          <template v-for="key in otherKeys">
            <journallist :article-key="key"/>
          </template>
        </ol>
      </q-card>
    </q-expansion-item>
    <q-separator spaced/>

    <q-expansion-item
      switch-toggle-side>
      <template v-slot:header>
        <q-item-section class="theme-title">
          05/学位論文
        </q-item-section>
      </template>
      <q-card>
        <template v-for="year in Object.keys(alumni).reverse()">
          <ol>
            <pageTitle :main="`${year}年度`" class="title"/>
            <template v-for="person in alumni[year]">
              <graduate
                :firstName="person.firstName"
                :lastName="person.lastName"
                :grade="person.grade"
                :title="person.title"
              />
            </template>
          </ol>
        </template>
      </q-card>
    </q-expansion-item>
    <q-separator spaced/>


  </q-list>
</template>

<style lang="scss" scoped>
.theme-title {
  font-size: large;
}
</style>