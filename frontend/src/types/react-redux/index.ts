import 'redux'
import type { StoreState } from '../../stores'

declare module 'react-redux' {
  // eslint-disable-next-line
    interface DefaultRootState extends StoreState {}
}
