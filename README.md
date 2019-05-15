<h1 align="center">LAB</h1>

## 環境構築 🥚

[Yarn](https://yarnpkg.com/lang/ja/), [ndenv](https://github.com/riywo/ndenv) インストール後、下記のコマンドを実行。

```bash
# モジュールのインストール
$ yarn

# 開発用ローカルサーバーの起動
$ yarn dev

# ビルド
$ yarn build

# 静的ページ生成
$ yarn generate
```

## ドキュメント 📚

- コーディング規約: `/.github/docs` フォルダ

## ポート 🎰

- (20170) 開発用ローカルサーバー: `yarn dev`
- (20171) 各種マップ: `yarn dev` or `yarn serve-map`
- (20172) Storybook: `yarn storybook`

## アプリ内共通設定 🔧

アプリ内共通設定ファイルは `/src/assets/js/common-config.js` にあります。

## ツール 🐥

### マップ

- 本リポジトリでは開発用に「アイコン」「ページ」の一覧ページが用意されています。
- `yarn maps` で `src` 内のファイルを元に各種一覧ページを生成します。
- 生成後は `http://localhost:20171/pagemap.html` で確認できます。

### Storybook

- `yarn storybook` で `src/components` 内の `*.story.js` ファイルを元にStorybookを生成します。
- 生成後は `http://localhost:20172/` で確認できます。
