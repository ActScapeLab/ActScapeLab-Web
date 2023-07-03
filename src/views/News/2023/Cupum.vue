<script setup lang="ts">
import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
import ArticleList from '@/components/News/articleList.vue';
</script>

<template>
  <ArticleTemplate
    title="カナダで開催された学会に参加してきました！！ ＠モントリオール"
    :startYear="2023"
    :startMonth="6"
    :startDate="19"
    :endDate="23"
    authorGrade="M2"
    authorName="村上"
  >
    <p>
      カナダのモントリオールにて，6月20-23に開催されたCupum2023 @McGill UniversityにM2の村上が参加してきました．以下の題目で発表しました．
    </p>
    <ArticleList :keys="['Murakami2023']"/>

    <p>
      初の国際学会で英語での発表ということで，今までに感じたことのない緊張と不安を感じました．
      改めて振り返ってみると，今回のCupum2023への参加では様々なことを学ことができ，とても貴重な体験になりました．
      どの発表での議論が活発に行われていたことが印象に残っています．質疑・コメントをいただいた皆様，ありがとうございました!
      貴重な機会をいただきありがとうございました!!
    </p>

    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/CUPUM/murakami.jpg" class="img-width"/>
      <q-img src="@/assets/News/2023/CUPUM/city.jpg" class="img-width"/>
    </div>
    <p>学会の最終日に行われたフィールドトリップでは，モントリオールの旧市街を散策しました．旧市街の街並みは歴史的な石造りの重厚な建物や石畳の街路で構成されていてとても綺麗でした．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/CUPUM/pic1.jpg" class="img-width"/>
      <q-img src="@/assets/News/2023/CUPUM/pic3.jpg" class="img-width"/>
    </div>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/CUPUM/pic2.jpg" class="img-width"/>
    </div>
    <p>モントリオールに滞在中は，天候に恵まれ終始過ごしやすい気候でした．また，街中の至る所にリスが生息しており，自然豊かで癒されました．</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/CUPUM/risu.jpg" class="img-width"/>
      <q-img src="@/assets/News/2023/CUPUM/pic4.jpg" class="img-width"/>
    </div>
    <p>今回のモントリオール滞在は，学会参加をはじめ，あらゆることが初めての経験であり貴重な時間を過ごすことができました．卒業まで残る期間も少ないですが，今回の経験を今後の研究活動に活かしていきたいと思います!</p>
    <div class="row justify-evenly image-zone">
      <q-img src="@/assets/News/2023/CUPUM/city.jpg" class="img-width"/>
      <q-img src="@/assets/News/2023/CUPUM/baguru.jpg" class="img-width"/>
    </div>

  </ArticleTemplate>
</template>

<style lang="scss" scoped>
.img-width {
  width: 45%
}

.image-zone{
  margin: 2% 0;
}
</style>