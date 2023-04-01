<script setup lang="ts">

interface Props {
  link  : string;
  avatar: string;
  label : string;
}

const props = defineProps<Props>();
</script>

<template>
  <q-item :to="link" active-class="menu-link">
    <q-item-section avatar>
      <q-icon :name="avatar" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{label}}</q-item-label>
      <q-item-label caption>{{label}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<style scoped lang="scss">
.menu-link{
  color: $secondary;
}

</style>