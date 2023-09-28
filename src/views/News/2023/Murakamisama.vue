<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="秋期学位記授与式が行われました"
    :startYear="2023"
    :startMonth="9"
    :startDate="21"
    authorGrade="M1"
    authorName="多田"
  >
    <p>秋期学位記授与式が行われ，本研究室M2の村上さんの修士課程が修了しました．</p>
    <p>研究，学業面はもちろんのこと，誰にでも優しく親身になってくれる村上さんのことを研究室メンバーみんなが尊敬しています！</p>

    <p>私もB4の時から研究でお世話になりました．駐車場配置に関する研究において私が悩んだりした際も村上さんがその悩み，疑問1つ1つに丁寧に対応していただきました．とにかく村上さんのおかげでここまで来れました．感謝してもしきれません．おそらく一生感謝しても足りないかもしれません．</p>
    <p>最後になりますが，お体に気をつけてこれからの社会人生活を頑張ってください！そして，我々後輩一同も，村上さんに追いつけ追い越せという気持ちで研究，学業を頑張っていきます！</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Murakamisama/murakamisama.jpg" class="single_img"/>
    </div>
  </ArticleTemplate>
</template>