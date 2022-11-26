<!-- ヘッダーやフッター，メニューなど，全ページで共通の要素を定義 -->
<script setup lang="ts">
// import は一番上に書く
import MenuItemVue from '@/components/App/menuItem.vue'
import { ref } from 'vue';

// 変数の宣言方法
const leftDrawerOpen = ref(false)
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />
        <q-toolbar-title>
          ACTSCAPELAB
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>

        <!-- avatarの一覧 -> https://fonts.google.com/icons?selected=Material+Icons -->
        <MenuItemVue link="/"            avatar="school"       label="HOME"/>
        <MenuItemVue link="/member"      avatar="people"       label="MEMBER"/>
        <MenuItemVue link="/news"        avatar="newspaper"    label="NEWS"/>
        <MenuItemVue link="/research"    avatar="biotech"      label="RESEARCH"/>
        <MenuItemVue link="/publication" avatar="auto_stories" label="PUBLICATION"/>
        <MenuItemVue link="/contact"     avatar="call"         label="CONTACT"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>@ 2022 ActScapeLab</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style>

  @font-face {
    font-family: 'icomoon', 'Noto Sans JP', sans-serif;
    src: url("../src/font/icomoon.eot");
    src: url("../src/font/icomoon.eot") format("embedded-opentype"), url("../src/font/icomoon.ttf") format("truetype"), url("../src/font/icomoon.woff") format("woff"), url("../src/font/icomoon.svg") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  .glossy {
    background: #3d0707;
    font-size: 18px;
    font-family: "Roboto", 'Noto Sans JP', sans-serif;
    line-height: 1.8;
    font-weight: 300;
    color: #b2b8c2;
  }

</style>