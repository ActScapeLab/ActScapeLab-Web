<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import selectionItem from "@/components/News/selectionItem.vue"
import { getLink, setDate, tree } from "@/views/News/NewsTree";
</script>

<template>
  <pageTitle main="News" sub="ニュース" />

  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <template v-for="(page, index) in tree" :key="index">
        <selectionItem
          :date="setDate(page.year, page.month, page.date)"
          :description="page.description"
          :link="getLink(page.year, page.link)" />
      </template>
    </q-timeline>
  </div>
</template>