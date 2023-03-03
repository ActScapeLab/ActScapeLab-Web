<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import selectionItem from "@/components/parts/selectionItem.vue"
import { getLink, tree } from "./News/NewsTree";

// 日付表記
function setDate(year:string, month:string, date:string) {
  return `${month} ${date}, ${year}`
}

</script>

<template>
  <div class="outline">
    <pageTitle main="News" sub="ニュース" />

    <div class="q-px-lg q-pb-md">
        <q-timeline color="secondary">
          <template v-for="(page, index) in tree" :key="index">
            <selectionItem
              :date="setDate(page.year, page.month, page.date)"
              :description="page.description"
              :link="getLink(page.link, page.year)"/>
          </template>
        </q-timeline>
    </div>
  </div>
</template>