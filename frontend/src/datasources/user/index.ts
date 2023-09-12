import API from '../../util/api'
import {User, Users} from "types/src/domain/user"
import {AxiosResponse} from "axios";

export const getUser = async ({id, limit, cursor, next}: {id: number, limit?: number, cursor?: number, next?: number}) => {
  const response: AxiosResponse = await API.get({url: `/v1/user?id=${id}`})
  return response.data
}

export const getUserList = async () => {
  const response: AxiosResponse = await API.get({url: '/v1/user/'})
  console.log("get users res:", response)
  return response.data
}

export const postUser = async (user: Omit<User, 'id'>) => {
  const response: AxiosResponse = await API.post<any, any>({url: '/v1/user', data: user})
  return response.data
}

export const patchUser = async (user: User) => {
  await API.patch( {url: '/v1/user', data: user})
}

export const removeUser = async (id: number) => {
  await API.delete( {url: '/v1/user', id})
}
