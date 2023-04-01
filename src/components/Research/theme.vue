<script setup lang="ts">
  interface Props {
    theme: string,
    result:string,
    abst: string,
    imgPath: string
    journals1: string
    journals2: string
    journals3: string
  }

  const props = defineProps<Props>();

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
            <q-avatar square size="400px" class="q-pa-none">
              <q-img :src="loadAvatar(imgPath)"/>
            </q-avatar>
          </q-card-section>
          <q-card-section>
            {{ abst }}
          </q-card-section>

          <q-card-section>
            <p class="q-py-none no-margin">論文</p>
            <ul class="q-py-none no-margin">
              <li>{{ journals1 }}</li>
              <li>{{ journals2 }}</li>
              <li>{{ journals3 }}</li>
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

</style>