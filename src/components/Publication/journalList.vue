<!-- リストとして表示するアイテムの体裁を定義 -->
<script setup lang="ts">
import { colors } from 'quasar';


interface Props {
  people: string,
  year: string,
  title: string,
  journal: string,
  link?: string,
  chapter?:string,
  pages?: string,
  award?: string
}

const props = defineProps<Props>();

</script>

<template>
  <q-item flat color="white" :clickable="link !== void 0" :href="link" target="_blank">
    <q-item-section>
      <li>
        {{ people }}({{ year }})
        <span v-if="link !== void 0" class="linkTitle">{{ title }}</span>.
        <span v-if="link === void 0">{{ title }}</span>.
        {{ journal }} {{ chapter }} {{ pages }} {{ award }}
      </li>
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
.linkTitle{
  color: $secondary;
}
</style>