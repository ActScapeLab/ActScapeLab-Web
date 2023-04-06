# BibVueとは？

サイト内に掲載する論文全てについてのデータベースです

ここで登録した論文をそれぞれのページで呼び出すことにより、論文をホームページの各ページで掲載していきます

卒論の執筆などで使用するLaTeXには論文を管理するためのシステムとして`BibTeX`というものがあります

BibVueはBibTeXと同じような操作感で論文をサイト上で扱うために作成しました

> なお、BibVueは本プロジェクト特有のシステムなので、ブラウザで検索しても出てきません

> 本ドキュメントやすでに作成済みのファイルを参考にご利用ください



# 使い方

## データベースへ登録

それぞれの`thesis.ts`は以下の意味に基づいてデータの分割を行っている

各ファイルの意味に基づいて論文の加筆場所を選択することで、後から確認しやすいデータベースを構築することができる

|ファイル名|意味|
|:---:|:---|
|thesisRefereed.ts|査読付きの論文|
|thesisBook.ts|分担著書のような本|
|thesisInternational.ts|国際会議に基づく英語論文|
|thesisOther.ts|査読なしのようなその他の学会発表論文|
|thesisGraduate.ts|卒業(修士)論文|

以下のサンプルコードをいずれかの`thesis.ts`に加筆し、それぞれのデータを埋めていくことで、論文をデータベースに登録できる

```typescript
'Key': {
  author: '著者名',
  title: '論文のタイトル',
  journal: '論文の発行元',
  volume: '第〇巻 のような論文集の連番',
  number: '第〇号 のような論文集の連番'
  pages: '掲載ページ',
  year: '掲載年度',
  url: '掲載場所のURL'
},
```

入力データについて、特に注意を要する項目を以下に掲載

- Key

    - Keyでは論文を任意の文字列でナンバリングし、その文字列を使用することで論文を簡単に呼び出せるようにする

    - Keyは全ての`thesis.ts`を通じて固有な文字列とする必要があり、重複があると文字列によって特定１つの論文を呼び出せなくなる

    - 本プロジェクトではKeyを以下の命名規則に従って命名することにより、Keyの重複なく論文をナンバリングしている

        - Keyは全てアルファベットで表記する

        - `(名前)(年号)_(発行元の略称)`を命名規則とする

        - 発行元の略称は以下の通り

            > 発行元が追加された場合は以下の表も編集しておくと良い

            |略称|発行元|
            |:---:|:---|
            |CPIJ|都市計画論文集|
            |JSCE|土木学会論文集 D3(土木計画学)|
            |JSCEsp|土木計画学研究発表会(春大会)|
            |JSCEau|土木計画学研究発表会(秋大会)|
            |JSCEall|土木学会全国大会|
            |JSAI|人工知能学会全国大会|
            |JSTE|交通工学論文集|
            |TRPB|Transportation Research Part B: Methodological|
            |TRPC|Transportation Research Part C: Emerging Technologies|
            |TBS|Travel Behaviour and Society|
            |IATBR|International Conference on Travel Behaviour research|
            |hEART|European Association for Research in Transportation|
            |HKSTS|Hong Kong for Transportation Studies|
            |TRISTAN|Transportation Analysis|
            |ERTICO|European Congress|
            |CUPUM|Computers in Urban Planning and Urban Management|
            |IASDR|International Association of Societies of Design Research|
            |HUM|Handbook of Urban Mobilities|


    - Keyを日本語で指定するなど、これらの命名規則に従わない文字列を利用することもできる


- author

    - 著者名は日本語、英語両方指定可能

    - 英語で著者名を指定する場合、ホームページに掲載する際には`Oyama, Y.`のようになるが、データベースに入力する際には以下のデータ形式をサポートしている

        - Yuki Oyama

        - Y. Oyama

        - Oyama, Yuki

        - Oyama, Y.

    - 著者が複数の場合はそれぞれの著者名を`and`で区切り、その両端は半角スペースを入れる


- volume, number, pages, url

    - これらの値は省略することができるため、該当情報がない場合は記載の必要なし



## ホームページに掲載

ホームページに論文を掲載する際には以下のようにVueファイルへ記載することで論文を掲載する

`getArticleItem(key)`によって`thesis.ts`で登録したKey文字列を基に論文を掲載するときに利用可能な文字列と論文のURLを取得できる

いずれの`thesis.ts`に書いたデータであっても、`getArticleItem(key)`のKeyを指定することで論文を呼び出すことができる

urlがundefinedで流れてくる場合には、aタグを使用しないようにしたり、`components/Publication/journalList.vue`のようにclickable属性を調整したりするべき

```Vue
<script>
import { getArticleItem } from '@/assets/articles/bibVue';

let strLine: string
let url: string | undefined
[strLine, url] = getArticleItem('Oyama2023_TRPC')

</script>

<template>
<!-- これで以下のように論文を掲載できる -->
<!-- Oyama Y. (2023) Capturing positive network attributes during the estimation of recursive logit models: A prism-based approach. Transportation Research Part C: Emerging Technologies, 147, p.104014 -->
<p>{{ strLine }}</p>

<!-- リンクを付けたい場合は以下のようにすれば良い -->
<a :href="url">{{ strLine }}</a>
</template>
```



# 技術情報

- 本システムのベースプログラムは`bibVue.ts`であり、`thesis???.ts`は各データを格納するためのプログラムファイルとして機能する

- `thesis???.ts`にて宣言される各データ（正確には宣言された変数）は`bibVue.ts`の`data`変数の宣言時に全ての`thesis.ts`を統合することで、`getArticleItem(key)`による統一的な検索機能を提供している

- 本システムにおける各論文の言語判定は`judgeLang(title)`で行われており、各論文のタイトルが半角英数字で構成されている場合に英語であると判定し、その他を日本語と判定している。今後、言語を追加する場合は`Language`型に'JP', 'EN'以外を追加し、`judgeLang(title)`と`allNames(names, LangType)`を修正することで、言語を追加できる

- `getArticleItem(key)`で提供される表示形式以外の形式が必要な場合は、`get???(key)`のようなメソッドを新しく作成し、`getArticleItem(key)`の実装を参考に実装する