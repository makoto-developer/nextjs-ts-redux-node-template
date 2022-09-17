import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import {User} from 'types/src/domain/user'

type InitialStateType = {
  user: User | undefined | null
  users: Array<User> | undefined
}

const initialState: InitialStateType = {
  user: undefined,
  users: undefined,
}

const userReducer = {
  // ユーザ詳細 リセット
  resetUser: (state: any, action: PayloadAction<void>) => {
    state.user = undefined
    state.users = undefined
  },
  // ユーザ詳細
  setUser: (state: any, action: PayloadAction<User | null>) => {
    state.user = action.payload
  },
  // ユーザ一覧
  setUsers: (state: any, action: PayloadAction<Array<User>>) => {
    state.users = action.payload
  },
  addUser: (state: any, action: PayloadAction<User>) => {
    state.users = [...state.users, action.payload]
  },
  deleteUser: (state: any, action: PayloadAction<{ id: number }>) => {
    if (state.users === undefined) return
    state.users = [...state.users.filter((user: User) => user.id !== action.payload.id)]
  },
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: userReducer,
})

const {
  actions,
  reducer,
} = slice

export default slice

export { actions, reducer }
