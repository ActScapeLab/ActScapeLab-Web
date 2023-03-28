<script setup lang="ts">
  interface Props {
    imgPath  : string;
    name: string;
    keywards : string;
    grade: string;
    from : string;
    hobby : string;
    journal?: string
  }
  const props = defineProps<Props>();


  const hasJournal = props.journal !== undefined
  const target = '_self'

  function loadAvatar(name:string) {
    return require(`@/assets/Member/${name}`)
  }
</script>

<template>
  <q-list bordered class="rounded-borders">
    <q-expansion-item>
      <template v-slot:header>
        <q-item-section side>
          <q-avatar size="130px">
            <q-img :src="loadAvatar(imgPath)" class="avater-img"/>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <span class="title">{{ name }} / {{ grade }}</span>
          <p v-show="keywards !== void 0" class="theme">研究キーワード：{{ keywards }}</p>
        </q-item-section>
      </template>

      <q-card class="card">
        <q-card-section class="q-pa-none">
          <p>出身：{{ from }}</p>
        </q-card-section>
        <q-card-section class="q-pa-none">
          <p>趣味：{{ hobby }}</p>
        </q-card-section>
        <q-card-section v-show="journal !== void 0" class="q-pa-none">
          <p class="journal">発表論文：</p>
          <ul v-for="paper in journal">
            <li>{{paper}}</li>
          </ul>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<style scoped lang="scss">
.card{
  margin:0 4%;
}

.avater-img {
  height: 100%;
}

</style>