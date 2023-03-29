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
        {{ journal }}
        <span v-show="chapter !== void 0">,{{ chapter }}</span>
        <span v-show="pages !== void 0">,p.{{ pages }}</span>
        <ion-icon name="ribbon-outline"></ion-icon>
      </li>
        <p v-show="award !== void 0" class="award" margin="0px">
          <q-chip icon="bookmark" >{{award}}</q-chip>
        </p>
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>
.linkTitle{
  color: $secondary;
}

p {
margin: 0px;
}

.q-chip {
background-color: #ffdfca;
}

.q-item {
    padding: 8px 26px;
}
</style>