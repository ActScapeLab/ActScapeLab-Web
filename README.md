# actscapelab-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


# 開発指針

- 基本的にはコンポーネントを細かく定義し，後でそれらをくっつければ１つのWebページが作成できるようにする

- `src/components`フォルダのフラットレベルには各ページのコンポーネントを定義し，その子コンポーネントについては，各ページ名のフォルダを作成したうえでその中に格納する．

- ページ横断的に利用可能なコンポーネントについては`src/components/base`フォルダに格納する