<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import journalList from "./journalList.vue";
import { bibOther } from "@/assets/articles/thesisOther";

const otherKeys = Object.keys(bibOther)
</script>

<template>
  <pageTitle main="Other Presentations" sub="学会発表(査読なし)" />
  
  <ol class="q-pa-none">
    <template v-for="key in otherKeys">
      <journalList :article-key="key"/>
    </template>
  </ol>
</template>