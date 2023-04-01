<script setup lang="ts">
import { bibRefereed } from "@/assets/articles/thesisRefereed";
import pageTitle from "@/components/parts/pageTitle.vue"
import journallist from "@/components/Publication/journalList.vue"

const refereedKeys = Object.keys(bibRefereed)
</script>


<template>
  <pageTitle main="Refereed Journal Papers" sub="審査付き雑誌論文" />
  
  <ol class="q-pa-none">
    <template v-for="key in refereedKeys">
      <journallist :article-key="key"/>
    </template>
  </ol>
</template>