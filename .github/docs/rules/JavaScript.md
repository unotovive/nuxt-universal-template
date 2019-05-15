# JavaScriptルール

## ファイル名

- ケバブケース

## 命名規則

- メソッド: キャメルケース `hogeFuga()`
- 定数: アッパーケース `const HOGE_FUGA`
- クラス: パスカルケース `class HogeFuga`

## コード共通

consoleコードはcommitしない。

## Store

- ページの状態はStoreで持つ。
- それぞれ別のmoduleに分ける。
  - 例: tag, article, profile
- mutationは対応するテストを同じフォルダ `ストア名.test.js` に最低1つは書く。

### Vueファイルからのアクセス

- `/src/components` 内のコンポーネントで state, getter, mutation(commit) を直接参照しないでください。
- 状態は `/src/pages` 内のページからpropsとして渡してください。
