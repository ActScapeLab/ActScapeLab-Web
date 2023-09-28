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
    <p></p>東大，茨城大，東大，の研究室との合同合宿にM2松村，M1岡崎，M1鉄崎，B4今村が参加しました．
    <p>14日の午前は，常陸那珂港を見学しました．常陸那珂港は，近年自動車や建設機械を多く輸出しており，当日はコンテナと完成自動車の荷役の様子を見ることができました．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Ibaraki/kontena.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/Ibaraki/export_car.jpg" class="dual_img"/>
    </div>
    <p>午後はかみすわ山荘にてゼミを行いました．山荘の脇を流れる小川のせせらぎ，森の香りなどを感じることができるとても清閑な環境でした．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Ibaraki/name_kamisuwa.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/Ibaraki/kamisuwa.jpg" class="dual_img"/>
    </div>
      
     <p> ゼミでは，それぞれ研究内容と現在の進捗を発表しました．他の大学の先生と学生からコメントをいただき．今後の方針を考え直す良い機会となりました．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Ibaraki/matu.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/Ibaraki/tetu.jpg" class="dual_img"/>
    </div>
    <p>夜は山荘前の広場でBBQ，花火を行いました．他の大学と多くの交流をすることができました．
    </p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Ibaraki/bbq.jpeg" class="dual_img"/>
      <q-img src="@/assets/News/2023/Ibaraki/hanabi.png" class="dual_img"/>
    </div>
  </ArticleTemplate>
</template>