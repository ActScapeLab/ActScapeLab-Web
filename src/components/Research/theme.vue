<script setup lang="ts">
import { getArticleItem } from '@/assets/articles/bibVue';

interface Props {
  theme: string
  result:string
  abst: string
  imgPath: string
  journalKeys: string[]
}
const prop = defineProps<Props>();

const article2url = prop.journalKeys.map(key => getArticleItem(key))

function loadAvatar(name:string) {
  return require(`@/assets/Research/${name}`)
}
</script>

<template>
  <q-list class="rounded-borders">
      <q-expansion-item
        switch-toggle-side>
        <template v-slot:header>
          <q-item-section class="theme-title">
            {{ theme }}
          </q-item-section>
        </template>
        <q-card>
          <q-card-section class="card q-pa-none">
            <!-- <q-avatar square size="400px" class="q-pa-none img-width"> -->
            <q-img :src="loadAvatar(imgPath)" class="img-width"/>
            <!-- </q-avatar> -->
          </q-card-section>
          <q-card-section>
            {{ abst }}
          </q-card-section>

          <q-card-section>
            <p class="q-py-none no-margin">論文</p>
            <ul class="q-py-none no-margin">
              <li v-for="data in article2url">
                <a :href="data[1]" target="_blank">{{ data[0] }}</a>
              </li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator spaced/>
    </q-list>
</template>

<style scoped setup="scss">

.theme-title {
  font-size: large;
}

.card{
  text-align: center;

}

.img-width {
  width: min(500px, 100%);
  margin-top: 2%;
}

</style>