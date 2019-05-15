# Gitルール

## リポジトリモデル

- Git Flow

![Git Flow](https://datasift.github.io/gitflow/IntroducingGitFlow.html)

## ブランチ名

例:

- release
- master
- develop
- feature/components/コンポーネント名-◯◯◯-×××...
- fix/plugins/プラグイン名

第3キーワードの例: common|nuxt|assets|components|layouts|middleware|pages|plugins|static|store|utils|test|config|lib|docs|ci|special

## コミットルール

例:

- fix: nuxt.jsのコンパイルエラー修正

メッセージ本文は日本語

プレフィックスは以下のルール

```txt
Type
Must be one of the following:

feat: A new feature
fix: A bug fix
docs: Documentation only changes
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf: A code change that improves performance
test: Adding missing or correcting existing tests
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
```

引用元: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type

## プルリクエストルール

- レビュアーは最低2人
- 2人以上のアクセプトでマージ
- セルフマージはしない
