<script setup lang="ts">
import refereed from "@/components/Publication/Refereed.vue";
import book from "@/components/Publication/Book.vue";
import international from "@/components/Publication/International.vue";
import others from "@/components/Publication/Others.vue";
</script>


<template>
  <refereed/>
  <book/>
  <international/>
  <others/>
</template>


<style lang="scss" scoped>
.button-style {
  margin-left: 70%;
  color: $secondary;
}
</style>