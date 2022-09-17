import { useMemo } from 'react'

import { initializeStore } from '../stores'

export const useService = () => {
  const store = useMemo(() => initializeStore(), [])

  return {
    store,
  }
}
