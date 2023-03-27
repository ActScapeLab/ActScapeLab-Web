<script setup lang="ts">
import refereed from "@/components/Publication/Refereed.vue";
import book from "@/components/Publication/Book.vue";
import international from "@/components/Publication/International.vue";
import others from "@/components/Publication/Others.vue";
</script>


<template>
  <div class="q-px-xl layout">
    <refereed/>
    <book/>
    <international/>
    <others/>
  </div>
</template>

<style lang="scss" scoped>
.layout{
  padding: 0 10%;
}

</style>