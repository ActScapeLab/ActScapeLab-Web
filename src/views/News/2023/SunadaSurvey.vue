<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="自転車の公道調査を開始しました"
    :startYear="2023"
    :startMonth="7"
    :startDate="12"
    authorGrade="M2"
    authorName="砂田"
  >
    <p>自転車で通勤・通学する人々の行動パターンを調査する新たな研究を開始しました．この調査は，弊研修室の修士2年生，砂田遼大が担当しています．</p>
    <p>この調査は，自転車通勤・通学者の行動パターンを詳細に理解し，都市の交通計画や自転車利用推進政策に役立てることを目指しています．</p>
    <ul>
        <li>調査方法</li>
        豊洲地区を起点または終点とする自転車通勤・通学者を対象に行われます．
        調査参加者は自宅から職場または学校への通勤・通学時に，GoPro付きヘルメット・首掛けGoPro・GPS機器+速度計を自転車もしくは体に装着します．
        <li>謝礼</li>
        一往復につき500円分のギフトカード(最大4往復)
        <li>その他</li>
        調査開始時と終了時に芝浦工業大学豊洲キャンパスで直接手渡しし，取り付けが行われます．
    </ul>
    <p>
        まずは話を聞いてみたいという方は，mh22011[at]shibaura.it.ac.jpまで連絡いただくか，直接研究室に来ていただいても構いません．
    </p>
    <p>
        早速参加していただける方は，下記チラシのLineQRコードから登録お願いします！！
        ご友人もお誘い合わせの上，是非ご参加お待ちしております！！
    </p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/SunadaSurvey/sunada.png" class="single_img"/>
    </div>

  </ArticleTemplate>
</template>