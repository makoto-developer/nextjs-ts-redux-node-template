import axios, {AxiosInstance, AxiosRequestConfig} from 'axios'

class ApiClient {
  private static axios: AxiosInstance

  constructor(token?: string) {
    ApiClient.init(token)
  }

  private static init = (token?: string) => {
    // TODO ここは環境変数で設定したい
    const baseURL = 'http://localhost:25000'
    ApiClient.axios = ApiClient.createAxiosInstance(baseURL)
    if (token) ApiClient.setToken(token)
  }

  private static initIfNot = () => {
    if (!ApiClient.axios) {
      ApiClient.init()
    }
  }

  private static createAxiosInstance = (baseURL: string) => {
    console.log("baseURL:", baseURL)
    if (!baseURL) throw new Error('base url is required.')
    const instance = axios
      .create({
        baseURL, // TODO .envから読み込むように変更
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10_000,
      })
    axios.interceptors.response.use(
      config => this.requestSuccess(config),
      config => this.requestFailure(config),
    )
    return instance
  }

  public static setToken = (token: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ApiClient.axios.defaults.headers['X-Api-Key'] = token;
  }

  static requestSuccess(config: AxiosRequestConfig) {
    console.log('// REQUEST SUCCESS', config)
    return config
  }

  static requestFailure(config: AxiosRequestConfig) {
    console.log('// REQUEST FAILURE', config)
    return Promise.reject(config)
  }

  async get<Response>({url}: {url: string}) {
    ApiClient.initIfNot()
    try {
      console.log('url:', url)
      return await ApiClient.axios.get<null, Response>(url)
    } catch (error: unknown) {
      console.log('error:', error)
      throw new Error('get method cause error:')
    }
  }

  async post<Request, Response>({url, data}: { url: string, data: Request }) {
    ApiClient.initIfNot()
    try {
      return await ApiClient.axios.post<Request, Response>(url, data)
    } catch (error: unknown) {
      console.log('error:', error)
      throw new Error('post method cause error:')
    }
  }

  async delete<Response>({url, id}: { url: string, id: number }) {
    ApiClient.initIfNot()
    try {
      return await ApiClient.axios.delete<null, Response>(url)
    } catch (error: unknown) {
      console.log('error:', error)
      throw new Error('post method cause error:')
    }
  }

  async patch<Request, Response>({url, data}: { url: string, data: Request }) {
    ApiClient.initIfNot()
    try {
      return await ApiClient.axios.patch<null, Response>(url, data)
    } catch (error: unknown) {
      console.log('error:', error)
      throw new Error('post method cause error:')
    }
  }
}

export default new ApiClient()
