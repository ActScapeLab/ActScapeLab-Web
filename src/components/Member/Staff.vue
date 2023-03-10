<script setup lang="ts">
import pageTitle from "@/components/parts/pageTitle.vue"
</script>

<template>
  <pageTitle main="Staff" sub="スタッフ" />
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-img src="@/assets/Member/oyamajacket.jpeg" class="self-photo"/>
      <p>
        大山雄己/准教授
        <a href="https://yuki-oyama.github.io/index.html">>>> personal webpage</a>
      </p>
      <div class="q-my-md content-font">
        愛知県出身．主な研究関心は，都市空間上の人間行動およびネットワークのモデリング・デザイン． 
        2017年に，移動体通信情報に基づく移動・活動軌跡分析の枠組みを提示する内容で，東京大学都市工学専攻にて博士（工学）の学位を取得． 
        その後，日本学術振興会特別研究員PDとして東工大建築学系で土地利用モデルの研究を行う． 2017年10月から，EPFLのTransport and Mobility Laboratoryで，
        研究・教育助教として主に行動モデルと交通ネットワーク最適化に関する研究・教育， PM活動に従事．
        同時にEuroTechPostdoc Programmeのフェローシップを受け，EPFL/TUMで都市空間の最適化研究に取り組む．2019年10月より東京大学先端科学技術研究センターにて，
        物流の配送需要マネジメントの研究を行い，2020年4月より現職．
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.self-photo{
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

</style>