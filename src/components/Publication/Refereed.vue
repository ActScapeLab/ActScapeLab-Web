<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import journallist from "@/components/Publication/journalList.vue"
import { tree } from "@/components/Publication/RefereedTree";
</script>


<template>
  <pageTitle main="Refereed Journal Papers" sub="審査付き雑誌論文" />
    <ol>
    <template v-for="(page, index) in tree" :key="index">
      <journallist
      :people="page.people"
      :year="page.year"
      :title="page.title"
      :journal="page.journal"
      :pages="page.pages"
      :link="page.link" />
      </template>
    </ol>
</template>