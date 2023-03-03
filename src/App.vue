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
    <q-header flat class="bg-primary text-white">
      <q-toolbar class="text-white rounded-borders">
        <q-btn flat label="ActScape Lab." to="/" />
        <q-space />
        <!--
          notice shrink property since we are placing it
          as child of QToolbar
        -->
        <q-tabs shrink class="gt-sm">
            <q-route-tab name="home" label="HOME" to="/" />
            <!-- <QRouteTab name="home" label="HOME"/> -->
            <!-- <q-tab name="home" label="HOME" /> -->
            <q-route-tab name="news" label="NEWS" to="/news"/>
            <q-route-tab name="member" label="MEMBER" to="/member"/>
            <q-route-tab name="research" label="RESEARCH" to="/research"/>
            <q-route-tab name="publication" label="PUBLICATION" to="/publication"/>
            <q-route-tab name="contact" label="CONTACT" to="/contact"/>
        </q-tabs>
        <div class="lt-md">
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
        <MenuItemVue link="/"            avatar="home"       label="HOME"/>
        <MenuItemVue link="/news"        avatar="newspaper"    label="NEWS"/>
        <MenuItemVue link="/member"      avatar="people"       label="MEMBER"/>
        <MenuItemVue link="/research"    avatar="school"      label="RESEARCH"/>
        <MenuItemVue link="/publication" avatar="auto_stories" label="PUBLICATION"/>
        <MenuItemVue link="/contact"     avatar="call"         label="CONTACT"/>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer flat>
      <q-toolbar>
        <q-toolbar-title class="footer">@ 2023 ActScapeLab</q-toolbar-title>
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

  div.q-toolbar {
    /* ヘッダーのフォント指定 */
    font-family:'Abel', 'sans-serif';
    color: #a4abb6;
    font-weight: 400;
    padding-left: 50px;
    padding-right: 50px;
    /* 下記はメニューバーのみに適用されている */
    letter-spacing: .1em;
  }

  span.block{
    /* 研究室名を調整 */
    color: #5068A9;
    font-size: 20px;
    letter-spacing: .1em;
    font-weight: 900;
  }

  a.q-tab{
    padding: 0px;
  }

  div.relative-position{
    padding: 0 10px;

  }

  .q-tab__label{
    letter-spacing: .1em;
  }

  div.q-toolbar__title:first-child{
    /* フッターのX軸を調整 */
    padding-left: 150px;
  }

  div.q-toolbar__title.ellipsis{
    /* フッターの文字フォントを調整 */
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

  header.fixed-top{
    /* ヘッダーの上に空白を付ける */
    padding-top: 100px;
    position: absolute;
  }

  footer.fixed-bottom{
    /* フッターを自動追跡させない */
    padding-bottom: 30px;
    position: relative;
  }

  footer.q-layout__section--marginal{
    /* フッターの背景を白色 */
    background-color: white;
  }

</style>