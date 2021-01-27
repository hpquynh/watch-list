import React, { ReactNode, createContext } from 'react';

export type AppContainer = {
  color: string
}

export const AppContext = createContext<AppContainer>(undefined as any)
export type AppProps = {
  children?: ReactNode
}
export const AppProvider = (props: AppProps) => {
  const { children } = props;

  const container: AppContainer = {
    color: 'hihi',
  };

  return <AppContext.Provider value={container}>{children}</AppContext.Provider>
}
