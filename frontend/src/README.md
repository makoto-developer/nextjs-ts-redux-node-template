# コンポネントの作り方

## ルーティング

pagesにディレクトリを作ってください。

```
pages/debug/ui/index.tsx
```

ルーティングに関するルールは`components/pages/README.md`を参照すること。

## View

ページの中身は`components/`にあります。`PageXxxx`がそれです。

```
# ページ本体
components/PageXXXX
```

各部品は`components/`配下にあり`import`して使っています。

## ビジネスロジック

ページごとに用意する。

```
components/PageXxxxx/service.tsx
```

## データストア

Reduxを使っています。

`stores/`にあります。

```
stores/user/
```

それぞれ意味は、

```
# ビジネスロジックから呼ばれるインターフェース
actions.ts

# Redux本体(Action/Reducer)
index.ts

# ストアで使われるデータ型を管理
model.ts

# slicer。storeのデータ設計を書く。
slice.ts
```

## 外部との接続(APIやStorageなど)

`datasources`に格納します。

```
# fetch関数などを書く
datasources/user/index.tsx
```

## デザイン

`styles/`に共通となるデザインのコードを置く。

コンポネントやページのデザインは`components/`配下の各ディレクトリ内に`styles.module.scss`に書く。

```
# 共通デザイン
styles/

# ページデザイン
components/PageXxxx/style.module.scss

# 部品のデザイン
components/Header/style.module.scss
```

scssの書き方などデザインのルールは`styles/`を参照すること。
