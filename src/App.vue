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
      <q-toolbar class="text-white rounded-borders">
        <q-toolbar-title>ActScapeLab</q-toolbar-title>
        <q-space />
        <!--
          notice shrink property since we are placing it
          as child of QToolbar
        -->
        <q-tabs shrink>
          <q-tab name="home" label="HOME" />
          <q-tab name="news" label="NEWS" />
          <q-tab name="member" label="MEMBER" />
          <q-tab name="research" label="RESEARCH" />
          <q-tab name="publication" label="PUBLICATION" />
          <q-tab name="contact" label="CONTACT" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title class="footer">@ 2022 ActScapeLab</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style>
  @font-face {
    font-family:'Abel';
    src: url("font/Abel-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  div.q-toolbar__title:first-child{
    padding-left: 150px;
  }

  div.q-toolbar__title.ellipsis{
    color: #5068A9;
    font-size: 20px;
    display: block;
    text-transform: uppercase;
    font-weight: 900;
    font-family: "Abel", sans-serif;
    letter-spacing: .1em;
  }
  
  div.q-toolbar__title.ellipsis.footer{
    font-size: 16px;
    font-weight: 300;
  }

  div.q-list{
    font-family: "Abel", sans-serif;
    letter-spacing: .1em;

  }

  header.fixed-top{
    padding-top: 100px;
    position: absolute;
  }

  footer.fixed-bottom{
    padding-bottom: 30px;
    position: relative;
  }

  footer.q-layout__section--marginal{
    background-color: white;
  }

  div.q-tab {
    padding: 5px;
  }

</style>