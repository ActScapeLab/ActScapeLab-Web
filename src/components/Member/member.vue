<script setup lang="ts">

interface Props {
  url  : string;
  name: string;
  keywards : string;
  from : string;
  hobby : string;
}
const props = defineProps<Props>();

const rows = [
  {
    name: '<研究キーワード>',
    calories: props.keywards
  },
  {
    name: '<出身>',
    calories: props.from
  },
  {
    name: '<趣味>',
    calories: props.hobby
  }
]

const memberName = props.name
const src = props.url

</script>

<template>
  <q-item class="intro-table">
    <!-- 写真の設定 -->
    <!-- <q-item-section avatar class="photo-box"> -->
    <q-img src="@/assets/Member/murakami.png" class="self-photo"/>
    <!-- </q-item-section> -->
    <!-- 名前・出身・趣味の設定 -->
    <q-item-section>
      <q-item-label>
        <div class="q-pa-md" style="max-width: 1000px;">
          <q-table
            :title="memberName"
            :rows="rows"
            row-key="name"
            hide-header
            hide-bottom
            flat
            dense
            separator="none"
          />
        </div>
      </q-item-label>
    </q-item-section>
  </q-item>

</template>

<style lang="scss" scoped>

.self-photo{
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

</style>