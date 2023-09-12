# Backend

# Stack
- Node.js
- TypeScript
- Express

## Starting

環境変数をコピーして編集する

```zsh
cp .env.example .env
```

## コマンド

ユーザ一覧を取得
```zsh
curl http://localhost:25000/v1/users
```

ユーザを登録
```zsh
curl -H "Accept: application/json" \
 -H "Content-type: application/json" \
 -XPOST http://localhost:25000/v1/user \
 -d '{ "name": "taro",  "age": 30, "profile": "profile sample", "avatar": "https://pickaface.net/gallery/avatar/20141113_103013_1662_PJ.png", "role": "User" }'
```
 
ユーザ情報を更新
```
curl -H "Accept: application/json" \
 -H "Content-type: application/json" \
 -XPUT http://localhost:25000/v1/user \
 -d '{ "id": 4, "role": "User" }'
```
 
ユーザを削除
```
curl -H "Accept: application/json" \
 -H "Content-type: application/json" \
 -XDELETE http://localhost:25000/v1/user \
 -d '{"id": 34 }'
```
