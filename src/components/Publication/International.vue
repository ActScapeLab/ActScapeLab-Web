<script setup lang="ts">
import { bibInternational } from "@/assets/articles/thesisInternational";
import pageTitle from "@/components/parts/pageTitle.vue"
import journallist from "@/components/Publication/journalList.vue"

const InternationalKeys = Object.keys(bibInternational)
</script>


<template>
  <pageTitle main="International Conferences" sub="国際会議(査読あり)" />
  
  <ol class="q-pa-none">
    <template v-for="key in InternationalKeys">
      <journallist :article-key="key"/>
    </template>
  </ol>
</template>