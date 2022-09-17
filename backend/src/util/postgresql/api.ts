import {Client as PostgresCleint} from 'pg'

// 環境変数取得
require('dotenv').config()
const env = process.env

class PosgresAPI {
  private static client: PostgresCleint | undefined = undefined;

  public static init = () => {
    const port = env.POSTGRES_PORT || 5432
    PosgresAPI.client = new PostgresCleint({
      user: env.POSTGRES_USER, // 環境変数から読み込みたい
      host: env.POSTGRES_HOST,
      database: env.POSTGRES_DB,
      password: env.POSTGRES_PASSWORD,
      port: Number(port)
    })
  }

  constructor() {
    PosgresAPI.init()
    if (PosgresAPI.client === undefined) throw new Error('client not initialized')
    PosgresAPI.client.connect()
  }

  public static getInstance = (): PostgresCleint => {
    if (PosgresAPI.client === undefined) {
      throw new Error('Postgres Client not initialized')
    }
    return PosgresAPI.client
  }

  public static clear = () => PosgresAPI.client = undefined

  public executeQuery = async ({query}: {
    query: {
      text: string,
      values?: Array<unknown>
    }
  }) => {
    const instance = PosgresAPI.getInstance()
    return instance.query(query)
      .then(res => {
        console.log("sql result: ", res.rows)
        return res.rows
      })
      .catch(e => new Error(e.stack))
      .finally(() => {
        console.log('sql:', query.text)
        console.log('sql param:', query.values)
      })
  }

}

export default new PosgresAPI()
