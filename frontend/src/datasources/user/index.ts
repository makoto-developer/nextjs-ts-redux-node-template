import API from '../../util/api'
import {GetUserListResponse} from "types/src/api/UserAPI";
import {User, Users} from "types/src/domain/user"

export const getUser = async ({id, limit, cursor, next}: {id: number, limit?: number, cursor?: number, next?: number}) => {
  const response: Users = await API.get<GetUserListResponse>({url:`/v1/user?id=${id}`})
  return response
}

export const getUserList = async () => {
  const response = await API.get<GetUserListResponse>({url: '/v1/user/'})
  return response
}

export const postUser = async (user: Omit<User, 'id'>) => {
  const response = await API.post<any, any>({url: '/v1/user', data: user})
  return response.data
}

export const patchUser = async (user: User) => {
  await API.patch( {url: '/v1/user', data: user})
}

export const removeUser = async (id: number) => {
  await API.delete( {url: '/v1/user', id})
}
