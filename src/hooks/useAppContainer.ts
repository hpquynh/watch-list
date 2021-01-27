import { useContext } from 'react'
import { AppContext } from '~/src/contexts/AppContext'

export const useAppContainer = () => {
  return useContext(AppContext)
}
