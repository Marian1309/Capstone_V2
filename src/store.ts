import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import cartSlice from './slices/cart/cartSlice'
import productsSlice from './slices/products/productsSlice'
import userSlice from './slices/user/userSlice'

const allReducers = combineReducers({
  user: userSlice,
  products: productsSlice,
  cart: cartSlice
})

const store = configureStore({
  reducer: allReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store

export type GlobalState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
