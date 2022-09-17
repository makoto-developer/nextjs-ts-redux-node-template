import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'

import user from './user'

import type {
  Action,
  ThunkAction,
} from '@reduxjs/toolkit'
import type { ThunkDispatch } from 'redux-thunk'

const reducer = combineReducers({
  user: user.reducer,
})

export const initializeStore = (preloadedState = undefined) => {
  return configureStore({
    reducer,
    middleware: getDefaultMiddleware => [ ...getDefaultMiddleware() ],
    preloadedState,
    devTools: true,
  })
}

export type StoreState = ReturnType<typeof reducer>

export type AsyncAction<R = void> = ThunkAction<Promise<R>, StoreState, undefined, Action<string>>

export type Dispatch = ThunkDispatch<StoreState, any, Action>
