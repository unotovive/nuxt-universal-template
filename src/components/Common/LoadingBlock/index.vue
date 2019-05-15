<docs>
# ローディングブロック

読み込み中で表示するブロック。

## 使い方

```
<div v-if="apiList && apiList.length > 0"></div>
<NotfoundBlock v-else-if="apiList && apiList.length === 0" />
<LoadingBlock v-else />
```

高さを調節したい場合は `height` を呼び出し元SCSSファイルで書いてください。
</docs>

<template>
  <div class="loading-block">
    読み込み中
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped src="./style.scss"></style>
