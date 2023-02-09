import { createSlice } from '@reduxjs/toolkit'

import { ProductsState } from './products.interface'

const initialState: ProductsState = {
  products: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export default productsSlice.reducer
