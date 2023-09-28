<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="4研究室合同合宿に参加しました"
    :startYear="2023"
    :startMonth="9"
    :startDate="14"
    :endDate="15"
    authorGrade="B4"
    authorName="今村"
  >
    <p>東京大学・茨城大学・東京海洋大学・芝浦工業大学の研究室との合同合宿にM2松村，M1岡崎，M1鉄崎，B4今村が参加しました．</p>
    <p>14日の午前は，常陸那珂港を見学しました．常陸那珂港は，近年自動車や建設機械を多く輸出しており，当日はコンテナと完成自動車の荷役の様子を見ることができました．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Ibaraki/kontena.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/Ibaraki/export_car.jpg" class="dual_img"/>
    </div>
    <p>午後はかみすわ山荘にてゼミ発表を行いました．山荘の脇を流れる小川のせせらぎ，森の香りなどを感じることができるとても清閑な環境でした．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Ibaraki/name_kamisuwa.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/Ibaraki/kamisuwa.jpg" class="dual_img"/>
    </div>
    <p>
      合同ゼミでは，各研究室の学生が研究内容と最新の進捗を報告しました．発表を通じて，研究のフレームワークを固めることの必要性を再確認しました．
      また，他の大学の先生と学生からコメントをいただき，今後の方針を考え直す良い機会となりました．
    </p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Ibaraki/matu.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/Ibaraki/tetu.jpg" class="dual_img"/>
    </div>
    <p>
      夜は山荘前の広場でBBQや花火を行いました．他の大学と交流でき，非常に刺激的でした．
      最後になりますが，ゼミを主催していただいた先生方，会場設営をしていただいた茨城大学の皆様，ありがとうございました．
      これからも卒論に向けて，日々研究に心血注いでいきたいと思います．
    </p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Ibaraki/bbq.jpeg" class="dual_img"/>
      <q-img src="@/assets/News/2023/Ibaraki/hanabi.png" class="dual_img"/>
    </div>
  </ArticleTemplate>
</template>