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
    return require(`@/assets/Home/${name}`)
  }
</script>

<template>
  <h1 class="theme">{{ theme }}</h1>
  <p class="result"> {{result}} </p>

  <!-- <q-avatar square size="200px" class="lt-md phone-img"> -->
  <div class="phone-img">
  <q-img :src="loadAvatar(imgPath)" class="lt-md"/>
  </div>
  <!-- あああああ -->
  <!-- </q-avatar> -->

  <q-item class="explan">
    <q-item-section class="abst">
      {{ abst }}  
    </q-item-section>
    
    <q-item-section side class="gt-sm pc-img">
      <q-avatar square size="250px">
        <q-img :src="loadAvatar(imgPath)" style="height: 100%;"/>
      </q-avatar>
    </q-item-section>
  </q-item>

  <div class="journal">
    <p class="q-py-none no-margin">論文</p>
    <ul class="q-py-none no-margin">
      <li>{{ journals1 }}</li>
      <li>{{ journals2 }}</li>
      <li>{{ journals3 }}</li>
    </ul>
  </div>
</template>

<style scoped setup="scss">

.abst{
  line-height: 30px;
}

h1 {
  margin-top: 5%;
}

.explan{
  margin: 1% 0;
}

.journal{
  font-size: 15px;
}

.phone-img{
  /* width: 50%; */
  max-width: 60%;
  /* text-align: center; */
  margin: 0 auto;
  /* background:#ffff00; */
}
.pc-img{
  margin-left: 2%;
}

</style>