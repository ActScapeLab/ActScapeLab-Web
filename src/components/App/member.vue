<script setup lang="ts">

interface Props {
  url  : string;
  name: string;
  keywards : string;
  from : string;
  hobby : string;
}

const props = defineProps<Props>();
</script>

<template>
    <q-item>
    <!-- 写真の設定 -->
    <q-item-section avatar>
      <q-avatar><img src="@/assets/Member/murakami.png"/></q-avatar>
    </q-item-section>
    <!-- 名前・出身・趣味の設定 -->
    <q-item-section>
      <q-item-label>
        <div class="q-pa-md self-member" style="max-width: 1000px;">
          <q-markup-table flat>
            <tbody>
              <tr><td class="text-left self-name"> {{name}} </td></tr>
              <tr>
                <td class="text-left"><p class="self-contents-title">研究キーワード</p></td>
                <td class="text-left">{{keywards}}</td>
              </tr>
              <tr>
                <td class="text-left"><p class="self-contents-title">出身</p></td>
                <td class="text-left">{{from}}</td>
              </tr>
              <tr>
                <td class="text-left"><p class="self-contents-title">趣味</p></td>
                <td class="text-left">{{hobby}}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </q-item-label>
    </q-item-section>
  </q-item>

</template>

<style>

p.self-contents-title {
  width: 10em;
  margin: 0px;
  background: #ffffff;
  font-family: "Roboto", 'Noto Sans JP', sans-serif;
  line-height: 1.5;
  font-weight: 300;
  color: #383838;
}
p.self-contents-title:before {
  content: "<";
}
p.self-contents-title:after {
  content: ">";
}

div.q-item__label {
  font-size: 15px;
  margin-bottom: 0;
  word-break: keep-all;
  background: #ffffff;
  font-size: 15px;
  font-family: "Roboto", 'Noto Sans JP', sans-serif;
  line-height: 1.5;
  font-weight: 300;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  color: #383838;
}

.q-markup-table table tbody td{
  height: 0px;
}

.q-pa-md div{
  border-bottom-width: 0px
}

div.self-member {
  /* メンバーページのみ横幅を変更 */
    border-bottom-width: 0px;
    padding: 16px 16px;
    margin: 0px;
    width: initial;
}

.self-member div tbody{
  border-bottom-width: 0px;
}

</style>