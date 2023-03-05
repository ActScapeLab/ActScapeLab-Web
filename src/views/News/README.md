# News記事の追加方法

1. 各年度別にフォルダを作り，その中にNews記事となるVueファイルを作成する

1. 以下のテンプレートや，作成済みの記事のVueファイルを参考にして記事を執筆する

    - ArticleTemplateを用いることで，全ての記事が統一された見た目で描画されるようになる

    - 開始年と終了年が同じ場合は`endYear`を，開始月と終了月が同じ場合は`endMonth`を，1日のイベントの場合は`endDate`を省略することができる

    ```vue
    <script setup lang="ts">
    import ArticleTemplate from '@/components/News/ArticleTemplate.vue';
    </script>

    <template>
      <ArticleTemplate
        title="記事のタイトル"
        :startYear="2023"
        :startMonth="1"
        :startDate="1"
        :endYear="2023"
        :endMonth="2"
        :endDate="1"
        authorGrade="D1"
        authorName="John Doe"
      >
        // ここに記事の内容を記述する
      </ArticleTemplate>
    </template>
    ```

1. `NewsTree.ts`の`tree`に追加したい記事の情報を追記

    - ファイルに記述する順番と描画される順番は同じ

    - 各プロパティとその意味は以下の通り

        |プロパティ|必須|説明文|
        |:---:|:---:|:---|
        |type|〇|記事の種類を指定（種類は`NewsTree.ts`の`articleType`に定義）|
        |year|〇|年号|
        |month|〇|月|
        |date|〇|日付|
        |description|〇|説明（タイトル）|
        |link||外部ページのURLや記事のファイル名（指定しない場合はクリックできなくなる）|


# 注意点

- `NewsTree.ts`をもとにNewsやUpdatesを描画するため，`NewsTres.ts`を編集すれば，それぞれの記事のファイルを削除することなく描画するコンテンツを変更することができます

- Webシステムに各種ページを追加する際には，一般的に`router/index.ts`を編集することで，作成したVueファイルがWebページとして描画されるようになります．<br/>
本プロジェクトではこの編集を`buildRouter.py`によって自動化しているため，Routerの編集が不要になっています．<br/>
`buildRouter.py`は`views`フォルダのファイル構成を基に自動で`index.ts`を作成しているため，万が一ファイルを追加してもページが追加されない場合には`buildRouter.py`の中身をデバッグしてください

- 記事を新しく追加する場合にはホットリロードが対応しないため，記事となるVueファイルの追加を行い，News記事の場合には`NewsTree.ts`の編集を行った上で，`npm run serve`を命令することで，ページが反映されます