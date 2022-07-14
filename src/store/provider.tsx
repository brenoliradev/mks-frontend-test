import React, { ReactChild, ReactChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { cartStore } from './store'

interface ProviderProps {
  children: Element | ReactChild | ReactChildren | ReactElement
}

const ShopProvider = ({ children }: ProviderProps) => {
  return <Provider store={cartStore}>{children}</Provider>
}

export default ShopProvider
