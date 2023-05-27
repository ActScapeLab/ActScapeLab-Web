<script setup lang="ts">
import { bibBook } from "@/assets/articles/thesisBook";
import pageTitle from "@/components/parts/pageTitle.vue"
import journallist from "@/components/Publication/journalList.vue"

const bookKeys = Object.keys(bibBook)
</script>


<template>
  <pageTitle main="分担著書" />
  
  <ol class="q-pa-none">
    <template v-for="key in bookKeys">
      <journallist :article-key="key"/>
    </template>
  </ol>
</template>