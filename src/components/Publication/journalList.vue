<!-- リストとして表示するアイテムの体裁を定義 -->
<script setup lang="ts">
interface Props {
  people: string,
  year: string,
  title: string,
  journal: string,
  pages?: string,
  link?: string
}

const props = defineProps<Props>();

const hasLink = props.link !== undefined
const target = props.link?.slice(0, 4) == 'http' ? '_blank' : '_self'
</script>

<template>
  <div class="q-pa-md">
    <q-item>
      <li>{{ people }}({{ year }})<a href= {{link}} target="_blank">{{ title }}</a>.
        {{ journal }}.</li>
    </q-item>
  </div>
</template>

<style lang="scss" scoped>

.title {
  font-size: 15px;
  font-weight: 300;
}

.capitalize {
  text-transform: capitalize;
}

</style>