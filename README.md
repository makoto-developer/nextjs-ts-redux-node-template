# JavaScriptフルスタックアプリ

TypeScript/Node.js/Next.jsで作られている

# Requirement

以下のツールが必須です。
- asdf
- docker

# Comment
- このリポジトリはMonorepoです
  - Yarn Workspaceを使っています。
  - eslint/tsconfigはフロントエンド、バックエンドともに共有しています
- 基本的にはJavaScriptのスキルセットがあれば開発可能なセットです(TypeScript/Node.js/Next.js/ES2021)

# Stack

## Frontend
React, Next.js, TypeScript, Redux

## Backend
Node.js ,TypeScript ,express ,Postgres

# Starting

## Start App

**事前準備**

```shell
git clone git@github.com:makoto-developer/nextjs-ts-redux-node-template.git
cd nextjs-ts-redux-node-template
asdf install
# yarnがなければインストールする
yarn install
```

**.envを用意する**

```shell
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp docker/.env.example docker/.env
```

**DBを起動**

```shell
cd docker
docker-compose up -d

# PostgreSQLが起動したことを確認する
docker ps -a
```

**バックエンドを起動**

```shell
yarn bdev
```

**フロントエンドを起動**

```shell
yarn fdev
```

## Linter

コードを修正したら実行する

```shell
# lintチェック
yarn lint

# lint エラーが発生している箇所を可能な限り修正
yarn lint-fix

# scssファイルのスタイル修正
yarn lint-style-fix
```
