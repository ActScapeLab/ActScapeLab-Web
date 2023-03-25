<!-- リストとして表示するアイテムの体裁を定義 -->
<script setup lang="ts">
interface Props {
  people: string,
  year: string,
  title: string,
  journal: string,
  link: string
  pages?: string,
}

const props = defineProps<Props>();

</script>

<template>
  <q-item>
    <q-item-section>
      <li>
      {{ people }}({{ year }})<a href= {{link}} target="_blank">{{ title }}</a>.
        {{ journal }}.
      </li>
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>

li::before {
  width: 6px;
  height: 6px;
}

</style>