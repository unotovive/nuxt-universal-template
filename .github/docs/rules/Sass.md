# Sassルール

## ファイル名

- ケバブケース

## 設計思想

クラス名は [BEM(Two Dashes style)](https://en.bem.info/methodology/naming-convention/#two-dashes-style) のルールに則る。

例: `hoge-button__moge-icon--primary`

## ベーススタイル

ベーススタイルを変更したい場合はチームメンバーに確認をとってください。

## 言語

- `.vue` 内で読み込む `.scss` にSCSSで書く。

## 単位

- `font-size, line-height, letter-spacing` 等の文字プロパティは `rem` で統一する。
  - 例: デザイン上のサイズ `16px` → `1.6rem`。
- その他は基本 `px` で統一する。

## 変数

- カラー、文字サイズ、画面幅のみ変数化。
- 色変数名は `color-` から始める。
- 基本カラーコード指定。透明度を利用する場合のみ `rgba` で記述する。
- 線、背景、文字で使われるモノクロ色は変数化しない。

利用可能な変数名プレフィックス: `default|color|size|width|num|zindex`

## PC/SPの出し分け

表示非表示は、各コンポーネントのスタイルでメディアクエリを使い出し分けをする。

```scss
// 例
@include only-sp;

@include sp {
  display: flex;
}
```

## プラグイン

cssnextの構文は使わない。
