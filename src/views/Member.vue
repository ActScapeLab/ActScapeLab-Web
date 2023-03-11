<script setup lang="ts">
import Staff from "@/components/Member/Staff.vue";
import Students from "@/components/Member/Students.vue";
</script>


<template>
  <Staff/>
  <Students/>
  <q-btn
    flat
    label=">>> Alumni"
    to="/Alumni"
    class="button-style"
  />
</template>


<style lang="scss" scoped>
.button-style {
  margin-left: 70%;
  color: $secondary;
}
</style>