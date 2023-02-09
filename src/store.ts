import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import ProductsSlice from './slices/products/ProductsSlice'
import userSlice from './slices/user/userSlice'

const allReducers = combineReducers({ user: userSlice, products: ProductsSlice })

const store = configureStore({
  reducer: allReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store

export type GlobalState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
