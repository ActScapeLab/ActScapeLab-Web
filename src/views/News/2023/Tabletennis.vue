<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
</script>

<template>
  <ArticleTemplate
    title="研究室の卓球大会も終幕しました！！"
    :startYear="2023"
    :startMonth="6"
    :startDate="30"
    authorGrade="M2"
    authorName="杉山"
  >
    <p>6月30日にActscape Table Tennis League（ATTL） 2023の決勝戦が実施されました．</p>


    <p>
      ATTLとは，大学内に自由に使用できる卓球場が設けられたことをきっかけに，メンバーの数人が卓球にハマったことから開催が決定したメンバー全員参加の卓球大会です．
    </p>
    <p>
      4月下旬にリーグ戦が開幕し，約2ヶ月に及ぶ総当たり形式の予選を行った後，成績上位6人によるknockout-stageが行われました．
    </p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Tabletennis/matsu.jpeg" class="single_img"/>
    </div>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Tabletennis/yoshi.png" class="dual_img"/>
      <q-img src="@/assets/News/2023/Tabletennis/mura.png" class="dual_img"/>
    </div>
    <p>
      長期間の予選とknockout-stageを勝ち進み決勝に残ったのは，特に卓球に熱中していた大山先生と岡崎君．決勝戦は序盤から岡崎君が流れを掴み，途中競る場面もありましたが，そのまま流れを離すことなく岡崎君が勝利しました．
      岡崎君は予選も含め全勝と圧倒的な実力での優勝となりました！！！
      優勝者には先生から当日夜行われた「打ち上げ代の奢り」が贈呈されました．
    </p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Tabletennis/oka.png" class="single_img"/>
    </div>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/Tabletennis/winner.png" class="single_img"/>
    </div>
    <p>
      秋季大会の開催も予定されているので，自分を含め今回結果が残せなかったメンバーはオフシーズン中に練習に励み秋季大会では結果を残せるよう頑張りましょう．優勝した岡崎君は慢心することなく練習を続け，他のメンバーを引っ張ってもらいたいと思います．
    </p>
  </ArticleTemplate>
</template>