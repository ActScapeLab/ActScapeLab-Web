<script setup lang="ts">

interface Props{
  question:string
  result:string
  answer:string
}

const prop = defineProps<Props>();

</script>

<template>
  <h2 class="question">{{ prop.question }}</h2>
  <h1 class="result">{{ prop.result }}</h1>
  <h3 class="answer">{{ prop.answer }}</h3>
</template>

<style scoped lang="scss">

h1.result {
  font-size: 26px;
  font-weight: 700;
  margin-left: 2%;
  line-height: 150%;
}

h2.question {
  font-size: 18px;
  color: $info;
  line-height: 1.2;
  letter-spacing: 1.5px;
  margin-top: 5%;
}

h3.answer {
  font-size: 18px;
  color: #4a525d;
  line-height: 1.2;
  margin-left: 2%;
  line-height: 150%
}

.question::before{
  content: 'ー';
}

</style>