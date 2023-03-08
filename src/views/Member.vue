<script setup lang="ts">
import Staff from "@/components/Member/Staff.vue";
import Students from "@/components/Member/Students.vue";
import Alumni from "@/components/Member/Alumni/Alumni.vue";
</script>

<template>
  <Staff/>
  <Students/>
  <Alumni/>
  <q-btn
  flat
  label=">>> Alumni"
  to="/Alumni"
  class="content-font"
  />
</template>

<style lang="scss" scoped>
.content-font{
  margin-left: 70%;
  color: $secondary;
}

</style>