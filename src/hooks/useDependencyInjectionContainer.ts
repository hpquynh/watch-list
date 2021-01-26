import { useContext } from 'react'
import { DependencyInjectionContext } from '../components/DependencyInjection'

export const useDependencyInjectionContainer = () => {
  return useContext(DependencyInjectionContext)
}
