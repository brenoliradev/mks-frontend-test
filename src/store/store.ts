import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './ rootReducer'

export const cartStore = configureStore({
  reducer: { rootReducer },
})

export type RootState = ReturnType<typeof cartStore.getState>
export type AppDispatch = typeof cartStore.dispatch
