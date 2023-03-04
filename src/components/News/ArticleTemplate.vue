<script setup lang="ts">
interface Props {
  title: string
  startYear: number
  startMonth: number
  startDate: number
  endYear?: number
  endMonth?: number
  endDate?: number
  authorGrade: string
  authorName: string
}

const prop = defineProps<Props>()

/**
 * タイトル横に表示する日付の体裁を決定
 */
function getDate() {
  const start = `${prop.startYear}.${prop.startMonth}.${prop.startDate}`
  if (prop.endYear==undefined && prop.endMonth==undefined && prop.endDate==undefined) {
    return start
  }
  
  let end = ''
  if (prop.endYear !=undefined && prop.startYear!=prop.endYear) {
    end = `${prop.endYear}.${prop.endMonth}.${prop.endDate}`
  }
  else if (prop.endMonth!=undefined && prop.startMonth!=prop.endMonth) {
    end = `${prop.endMonth}.${prop.endDate}`
  }
  else if (prop.endDate !=undefined && prop.startDate !=prop.endDate) {
    end = `${prop.endDate}`
  }

  return `${start} - ${end}`
}
const date = getDate()
</script>

<template>
  <div class="q-pb-md">
    <div class="row justify-between header">
      <h1 class="title">{{ title }}</h1>
      <p class="vertical-center date">{{ date }}</p>
    </div>
    <slot></slot>
    <p class="signature">(文責 / {{ authorGrade }}:{{ authorName }})</p>
  </div>
</template>

<style lang="scss" scoped>
.vertical-center {
  margin: auto 0;
  vertical-align: middle;
}

.header {
  margin: 4vh 0;
}

.title {
  font-size: 20pt;
  line-height: 2.5rem;
}

.date {
  font-size: medium;
}

.signature {
  text-align: right;
}
</style>