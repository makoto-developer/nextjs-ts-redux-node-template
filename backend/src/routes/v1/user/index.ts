import express from 'express';
import {toUserObject, User as TypeUser, Users} from "types/src/domain/User";
import PostgresAPI from '../../../util/postgresql/api'
import * as HttpStatus from 'types/src/api/HttpsStatus'

const router = express.Router();

type ExpressRequest = express.Request
type ExpressResponse = express.Response

/**
 * get user list
 * idをクエリパラメータにして特定のユーザを返す
 * TODO ページネーションも将来的に実装予定
 */
router.get('/', async (req: ExpressRequest, res: ExpressResponse) => {
  console.log("user get id", req.query)
  const getUserById = async () => {
    const {id, limit, cursor, next} = req.query
    const sql = `select * from users`
    try {
      const query = {
        text: sql
      }
      const data = await PostgresAPI.executeQuery({query})
      console.log("get data from db:", data)
      return data
    } catch (e: unknown) {
      console.log('error:', e)
      res.status(HttpStatus.Bad_Request);
    }
  }

    type PostgresTypeUser = Record<keyof TypeUser, string>
    const user: Array<PostgresTypeUser> | any = await getUserById()
    console.log(':user:', user)

    try {
      const body: Users = user.map((user: PostgresTypeUser) => {
        return toUserObject(user)
      })
      console.log("body:", body)
      res.status(HttpStatus.Ok).json(body);
    } catch (error: any) {
      const body = {
        message: error.message
      }
      res.status(HttpStatus.Bad_Request).json(body);
    }
});

/**
 * ユーザ登録
 */
router.post('/', async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const {name, age, profile, avatar, role} = req.body
    const sql = 'insert into users(name, age, profile, avatar, role) values ($1, $2, $3, $4, $5)'
    const query = {
      text: sql,
      values: [name, age, profile, avatar, role]
    }
    const data = await PostgresAPI.executeQuery({query})
    const body = {
      message: {
        write: 'OK',
        data
      }
    }
    res.status(HttpStatus.Ok).json(body);
  } catch (error: any) {
    const body = {
      message: error.message
    }
    res.status(HttpStatus.Bad_Request).json(body);
  }
});

/**
 * ユーザ情報を更新
 */
router.patch('/', async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const {id, name, age, profile, avatar, role} = req.body
    const sql = `update "users" set "name" = $1, "age" = $2, "profile" = $3, "avatar" = $4, "role" = $5 where "id" = $6`

    const query = {
      text: sql,
      values: [name, age, profile, avatar, role, id]
    }
    const data = await PostgresAPI.executeQuery({query})
    const body = {
      message: {
        write: 'OK',
        data
      }
    }
    res.status(HttpStatus.Ok).json(body);
  } catch (error: any) {
    const body = {
      message: error.message
    }
    res.status(HttpStatus.Bad_Request).json(body);
  }
});

/**
 * ユーザを削除
 */
router.delete('/', async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const {id} = req.body
    const sql = `delete from "users" where "id" = $1`

    const query = {
      text: sql,
      values: [id]
    }
    const data = await PostgresAPI.executeQuery({query})
    const body = {
      message: {
        write: 'OK',
        data
      }
    }
    res.status(HttpStatus.Ok).json(body);
  } catch (error: any) {
    const body = {
      message: error.message
    }
    res.status(HttpStatus.Bad_Request).json(body);
  }
});

export default router;
