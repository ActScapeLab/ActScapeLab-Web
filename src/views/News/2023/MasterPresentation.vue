<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="修論発表が終了しました！！"
    :startYear="2023"
    :startMonth="7"
    :startDate="22"
    authorGrade="M2"
    authorName="村上"
  >
    <p>7月23日に芝浦工業大学 大宮キャンパスにて秋入学の修論発表会が行われました．</p>
    <p>
        「異なる政策目標に対応する街路空間再配分のための多目的計画アルゴリズム」 というタイトルで私 (村上颯一朗) が発表いたしました．
        地元である埼玉県川越市をより魅力ある街にすべく3年間考え続けてきた集大成となりました．
    </p>
    <p>
        研究室メンバーや社会人の同期もわざわざ大宮まで聴講に来てくださったおかげでリラックスして発表することができました
    </p>
    <p>副査の岩倉先生・楽先生よりご質問，ご意見を頂きましたこと，この場を借りてお礼申し上げます．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/MasterPresentation/upperprob.jpg" class="dual_img"/>
      <q-img src="@/assets/News/2023/MasterPresentation/casestudy.jpg" class="dual_img"/>
    </div>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/MasterPresentation/loose.jpg" class="single_img"/>
    </div>
    <div class="row justify-evenly image-zone">
        <q-img src="@/assets/News/2023/MasterPresentation/up.jpg" class="single_img"/>
    </div>
    
    <p> 発表前日には，より良い分析結果を出すために研究室のPC総出で発表ギリギリまで計算がんばりました．</p>
    <p> サポートしていただいた研究室メンバーには感謝の気持ちでいっぱいです．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/MasterPresentation/eve_present1.jpeg" class="dual_img"/>
      <q-img src="@/assets/News/2023/MasterPresentation/eve_present2.jpeg" class="dual_img"/>
    </div>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/MasterPresentation/pc.jpg" class="single_img"/>
    </div>
    <p> 本論提出まではさらに残り2週間残されているので，より良い分析結果を出せるようにここからさらに加速させていきます！</p>

  </ArticleTemplate>
</template>