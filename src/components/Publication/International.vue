<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import journallist from "@/components/Publication/journalList.vue"
import { tree } from "@/components/Publication/InternationalTree";
</script>


<template>
  <pageTitle main="International Conferences" sub="国際会議(査読あり)" />
  <ol>
    <template v-for="(page, index) in tree" :key="index">
      <journallist
        :people="page.people"
        :year="page.year"
        :title="page.title"
        :journal="page.journal"
        :link="page.link" />
    </template>
  </ol>
</template>

<style lang="scss" scoped>
.button-style {
  margin-left: 70%;
  color: $secondary;
}
</style>