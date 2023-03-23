<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import { tree } from "@/components/Publication/OthersTree";
</script>

<template>
  <pageTitle main="Other Presentations" sub="学会発表(査読なし)" />
  <div class="q-px-lg">
      <template v-for="(page, index) in tree" :key="index">
        <journallist
          :people="page.people"
          :year="page.year"
          :title="page.title"
          :journal="page.journal"
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