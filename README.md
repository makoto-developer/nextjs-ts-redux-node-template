# フルスタックアプリ

# Requirement

- asdf
- docker

# Stack

- Monorepo
- Yarn Workspace

Frontend
- React
- Next.js
- TypeScript
- Redux
- axios

Backend
- Node.js
- TypeScript
- express
- prisma(入れる予定)
- PostgreSQL

# Starting

クローンして必要なライブラリなどを準備

```shell
git clone git@github.com:makoto-developer/nextjs-ts-redux-node-template.git
cd nextjs-ts-redux-node-template
asdf install
# yarnがなければインストールする
brew install yarn
or
npm i -g yarn
```

`.env`を用意する

```shell
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp docker/.env.example docker/.env
```

パスワードとかポートとか適宜修正する

```shell
vi .env
```

データベースを立ち上げる

```shell
cd docker
docker compose up -d

# PostgreSQLが起動したことを確認する
docker ps -a
```

seedsを使って初期データを投入する

```shell
seeds/user.sql
```

バックエンドを起動

```shell
yarn bdev
```

フロントエンドを起動

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
