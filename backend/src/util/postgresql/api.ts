import {Client as PostgresCleint} from 'pg'

// 環境変数取得
require('dotenv').config()
const env = process.env

class PosgresAPI {
  private static client: PostgresCleint | undefined = undefined;

  public static init = () => {
    const port = env.POSTGRES_PORT || 5432
    console.log("port:", port)
    PosgresAPI.client = new PostgresCleint({
      user: env.POSTGRES_USER,
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
      .catch(e => {
        console.error("cause erro postgresql client err:", e)
        new Error(e.stack)
      })
      .finally(() => {
        console.info('sql:', query.text)
        console.info('sql param:', query.values)
      })
  }

}

export default new PosgresAPI()
