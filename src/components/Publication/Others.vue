<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import { getLink, getSymbolColor, getSymbolIcon, setDate, tree } from "@/components/Publication/OthersTree";
</script>

<template>
  <pageTitle main="Refereed Journal Papers" sub="審査付き雑誌論文" />
  <div class="q-px-lg">
      <template v-for="(page, index) in tree" :key="index">
        <journallist
          :people="page.people"
          :year="page.year"
          :title="page.title"
          :journal="page.journal"
          :pages="page.pages"
          :link="page.link" />
      </template>
  </div>
</template>

<style lang="scss" scoped>
.button-style {
  margin-left: 70%;
  color: $secondary;
}
</style>