<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import { tree } from "@/components/Publication/OthersTree";
import journalList from "./journalList.vue";
</script>

<template>
  <pageTitle main="Other Presentations" sub="学会発表(査読なし)" />
  <ol class="papers">
    <template v-for="(page, index) in tree" :key="index">
      <journalList
        :people="page.people"
        :year="page.year"
        :title="page.title"
        :journal="page.journal"
        :link="page.link" />
    </template>
  </ol>
</template>