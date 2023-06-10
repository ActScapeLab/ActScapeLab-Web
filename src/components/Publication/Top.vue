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
  <pageTitle main="研究実績 (2020~)"/>
    <p class="intro q-pl-md">
      2019年以前の実績は
      <a href="https://yuki-oyama.github.io/publications.html">こちら</a>

    </p>
  <q-list class="rounded-borders">
    <q-expansion-item
      switch-toggle-side
    >
      <template v-slot:header>
        <q-item-section class="theme-title">
          1 / 審査付き雑誌論文
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
          2 / 国際会議発表
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
          3 / 分担著書
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
          4 / 国内学会発表
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
          5 / 学位論文
        </q-item-section>
      </template>
      <q-card>
        <template v-for="year in Object.keys(alumni).reverse()">
          <ol>
            <pageTitle :main="`${year}年度`" class="year-bar"/>
            <div class="alumni-block">
              <template v-for="person in alumni[year]">
                <graduate
                  :firstName="person.firstName"
                  :lastName="person.lastName"
                  :grade="person.grade"
                  :title="person.title"
                />
            </template>
          </div>
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

.year-bar{
  padding-left: 19px;
  margin: 0;
}

.alumni-block{
  padding-bottom: 5px;
}
</style>