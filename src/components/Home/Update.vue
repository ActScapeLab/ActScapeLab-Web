<template>
  <h1>Update</h1>
  <ul>
    <selectionItem
      title="November 12-13,2022"
      description="土木計画学秋大会に参加してきました"
      link="news/jsce2022fall.html"/>
    <selectionItem
      title="November 10, 2022"
      description="論文がElsevier社の雑誌Travel Behaviour and Societyで公開されました"
      link="https://authors.elsevier.com/c/1g3SE,oML19xKG"/>

    <!-- TODO: 以下同様に置き換え -->
    <li>October 26, 2022
      <p>
        都市計画論集で3本の論文が公開されました．
        <a href="https://doi.org/10.11361/journalcpij.57.622" target="_blank">[その1]</a>
        <a href="https://doi.org/10.11361/journalcpij.57.666" target="_blank">[その2]</a>
        <a href="https://doi.org/10.11361/journalcpij.57.1025" target="_blank">[その3]</a>
        詳細は<a href="publications.html" target="_blank">こちら(Publication)</a>.
      </p>
    </li>

    <li>September 23-25, 2022
      <p>
        <a href="news/summerschool2022.html">行動モデル夏の学校＠東大で総合一位になりました!</a>
      </p>
    </li>
    <li>November 30, 2021
      <p>
        Oyama, Hara and Akamatsu (2022) "Markovian traffic equilibrium assignment based on network generalized extreme
        value model" がTransportation Research Part Bで公開されました．
        <a href="https://www.sciencedirect.com/science/article/pii/S0191261521001934" target="_blank">[Link]</a>
      </p>
    </li>
  </ul>
</template>

<script>
import selectionItem from "@/components/parts/selectionItem.vue"

export default {
  name: 'HomeTitle',
  components: {
    selectionItem
  }
}
</script>