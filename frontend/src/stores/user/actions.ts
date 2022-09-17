import { getUser,getUserList, postUser, patchUser, removeUser } from '../../datasources/user'
import {User, Users} from "types/src/domain/user"
import { actions } from './index'
import type { AsyncAction } from '..'
import {GetUserListResponse, GetUserResponse} from "types/src/api/UserAPI";

/**
 * storeのUserを初期化
 */
export const resetUser = (): AsyncAction => async dispatch => {
  dispatch(actions.resetUser())
}

/**
 * UserIDをキーにユーザ情報を取得する
 * @param id
 */
export const fetchUserById = (id: number): AsyncAction => async dispatch => {
  const data: Array<User> = await getUser({id})

  console.log("data[0]:", data[0], data)
  if (data.length < 1) {
    dispatch(actions.setUser(null))
    return
  }
  dispatch(actions.setUser(data[0]))
}

/**
 * すべてのユーザ情報を取得する
 */
export const fetchUsers = (): AsyncAction => async dispatch => {
  const data: GetUserListResponse = await getUserList()
  console.log("users: , data", data)

  dispatch(actions.setUsers(data))
}

/**
 * ユーザを追加する
 * @param user
 */
export const addUser = (user: Omit<User , 'id'>): AsyncAction => async dispatch => {
  await postUser(user)
}

/**
 * ユーザ情報を更新する
 * @param user
 * @param users
 */
export const updateUser = (user: User, users: Users): AsyncAction => async dispatch => {
  await patchUser(user)

  // 更新できたら既存のユーザリストから更新したユーザを探して更新する
  if (users !== undefined) {
    dispatch(actions.setUsers([ ...users.filter(u => u.id !== user.id), user]))
  }
  dispatch(actions.setUser(user))
}

/**
 * ユーザを削除する
 * @param id
 */
export const deleteUser = (id: number): AsyncAction => async dispatch => {
  await removeUser(id)
  await fetchUserById(id)
}
