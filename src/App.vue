<!-- TODO: ヘッダーやフッター，メニューなど，全ページで共通の要素を定義 -->
<script setup lang="ts">
// import は一番上に書く
import MenuItemVue from '@/components/App/menuItem.vue'

// 変数の宣言方法
const leftDrawerOpen = false
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />

        <q-toolbar-title>
          ActScapeLab
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>

        <!-- TODO: <@cvlSitt> linkとavatarの変数化がうまくいかない問題の解決 -->
        <MenuItemVue link="/main" avatar="school" label="HOME"/>
        <!-- TODO: 各ページのリンクを修正 -->
        <MenuItemVue link="/main" avatar="school" label="MEMBER"/>
        <MenuItemVue link="/main" avatar="school" label="NEWS"/>
        <MenuItemVue link="/main" avatar="school" label="RESEARCH"/>
        <MenuItemVue link="/main" avatar="school" label="PUBLICATION"/>
        <MenuItemVue link="/main" avatar="school" label="CONTACT"/>
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
