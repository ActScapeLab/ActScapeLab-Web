<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import selectionItem from "@/components/parts/selectionItem.vue"
import { getLink, setDate, tree } from "@/views/News/NewsTree";

// Newsのうち，Updatesに表示する件数
const showCounts = 3

</script>

<template>
  <pageTitle main="Updates"/>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <template v-for="(page, index) in tree.slice(0, showCounts)" :key="index">
        <selectionItem
          :date="setDate(page.year, page.month, page.date)"
          :description="page.description"
          :link="getLink(page.link, page.year)"/>
      </template>
    </q-timeline>
  </div>
</template>