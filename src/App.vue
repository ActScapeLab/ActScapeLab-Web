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
    <q-header flat reveal class="bg-primary absolute-top">
      <q-toolbar>
        <q-btn flat label="ActScape Lab." to="/" class="logo abel"/>
        <q-space/>
        <!--
          notice shrink property since we are placing it
          as child of QToolbar
        -->
        <q-tabs
          dense
          active-color="secondary"
          indicator-color="transparent"
          class="gt-sm text-grey headerTabs"
        >
            <q-route-tab name="home"        label="HOME"        to="/"/>
            <q-route-tab name="news"        label="NEWS"        to="/news"/>
            <q-route-tab name="member"      label="MEMBER"      to="/member"/>
            <q-route-tab name="research"    label="RESEARCH"    to="/research"/>
            <q-route-tab name="publication" label="PUBLICATION" to="/publication"/>
            <q-route-tab name="contact"     label="CONTACT"     to="/contact"/>
          </q-tabs>
          <div class="lt-md text-black">
            <q-btn
            flat dense round
            @click="leftDrawerOpen = !leftDrawerOpen"
            icon="menu"
            aria-label="Menu"
            />
          </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <!-- avatarの一覧 -> https://fonts.google.com/icons?selected=Material+Icons -->
        <MenuItemVue link="/"            avatar="home"         label="HOME"/>
        <MenuItemVue link="/news"        avatar="newspaper"    label="NEWS"/>
        <MenuItemVue link="/member"      avatar="people"       label="MEMBER"/>
        <MenuItemVue link="/research"    avatar="school"       label="RESEARCH"/>
        <MenuItemVue link="/publication" avatar="auto_stories" label="PUBLICATION"/>
        <MenuItemVue link="/contact"     avatar="call"         label="CONTACT"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="outline">
        <router-view></router-view>
      </div>
    </q-page-container>

    <q-footer flat class="bg-primary absolute-bottom abel">
      <q-toolbar>
        <q-toolbar-title class="footer text-secondary">@ 2023 ActScapeLab</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>
  @font-face {
    font-family:'Abel';
    src: url("font/Abel-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  .abel {
    font-family:'Abel', 'sans-serif';
  }

  .outline {
    width: min(900px, 90%);
    margin: 4em auto;
    margin-bottom: 0;
  }

  .headerTabs {
    margin: 30px 0;
  }

  .logo {
    /* 研究室名を調整 */
    color: $secondary;
    font-size: 20px;
    letter-spacing: .1em;
    font-weight: 900;
  }

  .footer {
    text-align: right;
    margin: 10px 0;
  }
</style>