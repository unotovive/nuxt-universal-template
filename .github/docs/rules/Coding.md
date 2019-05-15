# コーディング規約

他の人が読みやすいと思うようなコードを書いてください。

> 読みやすければ何でも大丈夫

## 基本ルール

以下のコンフィグルールに沿ってコーディングしてください。

（ある程度ビルド時に自動で修正されるようになっています）

- EditorConfig
- ESLint
- StyleLint
- Prettier

その他のルールはリポジトリを参照。

## フォルダ構成

コンポーネントのフォルダ構成は以下。

```txt
/コンポーネント名
    index.vue (<docs> <template>, <script>, <style lang="scss" src="./style.scss" scoped> を含む)
    style.scss
    /子コンポーネントフォルダ
    /子コンポーネントフォルダ
```

また、そのコンポーネントを呼び出す際は

```javascript
import コンポーネント名 from '~/components/コンポーネント名';
```

とする。

## アノテーションコメント

`TODO` , `FIXME` 等のアノテーションコメントは、ファインダビリティ向上のため以下の形式にしてください。

- `// TODO: 名前 内容`
- `<!-- FIXME: 名前 内容 -->`

接頭キーワードは[こちら](https://github.com/rubocop-hq/ruby-style-guide#comment-annotations)
