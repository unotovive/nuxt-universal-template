# Vue.js

## ファイル名

- フォルダ名はパスカルケースのコンポーネント名とし、基本は内部に `index.vue`, `index.test.js`, `index.story.js`, `props-template.js`, `style.scss` を置く。
- `src/components/Buttons` 内vueフォルダ名は `${フォルダ名}Button.svg` に統一する。
- `src/components/Modals` 内vueフォルダ名は `${フォルダ名}Modal.svg` に統一する。

## 命名規則

- ディレクトリ: パスカルケース `/HogeFuga`
- コンポーネント呼び出し: パスカルケース `<HogeFuga />`
- コンポーネント属性: ケバブケース `moge-fuga="hoge"`
- propsプロパティ: キャメルケース `props: { mogeFuga: String }`

Vue.jsのルールは[公式ドキュメント](https://jp.vuejs.org/v2/style-guide/index.html)が役立ちます。

## Vue.js内ブロックの並び

```txt
<docs> (必須)

<template> (必須)

<i18n> (任意)

<script> (必須)

<style lang="scss" src="./style.scss" scoped> (必須)
```

## docs

- Vueコンポーネント内には必ず `<docs>` タグを書き、そのコンポーネントを説明する。
- 初期実装者をリスト形式で最後に書く。

ページの場合 h1見出し

```html
<docs>
# ログイン

- 説明
</docs>
```

## Nuxt.jsパラメータ

ページコンポーネントでは必ず `common` ミックスインを呼んでください。

## コンポーネント

必ず同じフォルダに下記のファイルを含めてください。

- index.test.js (コンポーネントテスト)
- index.story.js (Storybookファイル)
- props-template.js (テストとStorybookで使うprops情報)

外部コンポーネントとして呼び出す際はファイル名と変数名を揃えてください。

- `import コンポーネント名 from '~/components/xxxxxx/oooooo/コンポーネント名';`

## 見出し・テキスト

- h1: 大見出し, ページ内に1つ
- h2: コンテンツ見出し
- h3: 太めのp
- p: 隣に別のものが並ばないテキスト
- span: 隣に別のものが並ぶテキスト

## img

`<img>` タグには必ずalt属性を書く。
