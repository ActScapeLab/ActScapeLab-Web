<script setup lang="ts">
import selectionItem from "@/components/News/selectionItem.vue"
import { getLink, getSymbolColor, getSymbolIcon, setDate, tree } from "@/views/News/NewsTree";
</script>

<template>
  <div class="q-px-lg">
    <q-timeline color="secondary">
      <template v-for="(page, index) in tree" :key="index">
        <selectionItem
          :icon="getSymbolIcon(page.type)"
          :color="getSymbolColor(page.type)"
          :date="setDate(page.year, page.month, page.date)"
          :description="page.description"
          :link="getLink(page.year, page.link)" />
      </template>
    </q-timeline>
  </div>
</template>