import React, { ReactNode, createContext } from 'react'
import { AxiosInstance } from 'axios'
import { apiClient } from '../services/container'

export type DependencyInjectionContainer = {
  apiClient: AxiosInstance
}

export const DependencyInjectionContext = createContext<DependencyInjectionContainer>(undefined as any)
export type DependencyInjectionProps = {
  children?: ReactNode
}
export const DependencyInjection = (props: DependencyInjectionProps) => {
  const { children } = props

  const container: DependencyInjectionContainer = {
    apiClient: apiClient,
  }

  return <DependencyInjectionContext.Provider value={container}>{children}</DependencyInjectionContext.Provider>
}
