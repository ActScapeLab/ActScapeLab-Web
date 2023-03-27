<!-- リストとして表示するアイテムの体裁を定義 -->
<script setup lang="ts">
interface Props {
  people: string,
  year: string,
  title: string,
  journal: string,
  link?: string
  pages?: string,
}

const props = defineProps<Props>();

</script>

<template>
  <q-item flat color="white" :clickable="link !== void 0" :href="link" target="_blank">
    <q-item-section>
      <li>
      {{ people }}({{ year }})<span class="title">{{ title }}</span>.
        {{ journal }}.
      </li>
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
.title{
  color: $secondary;
}

</style>