<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
import member from "./member.vue";
</script>

<template>
  <pageTitle main="Staff" sub="スタッフ" />
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-img src="@/assets/Member/oyamajacket.jpg" class="self-photo"/>
      <p>
        大山雄己/准教授
        <a href="https://yuki-oyama.github.io/index.html">>>> personal webpage</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.self-photo{
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

</style>