<script setup lang="ts">
import { bibBook } from "@/assets/articles/thesisBook";
import pageTitle from "@/components/parts/pageTitle.vue"
import journallist from "@/components/Publication/journalList.vue"

const bookKeys = Object.keys(bibBook)
</script>


<template>
  <pageTitle main="Book Chapters" sub="分担著書" />
  
  <ol>
    <template v-for="key in bookKeys">
      <journallist :article-key="key"/>
    </template>
  </ol>
</template>