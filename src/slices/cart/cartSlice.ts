import { createSlice } from '@reduxjs/toolkit'

import { CartState } from './cartSlice.interface'

const initialState: CartState = {
  isCartOpen: false,
  cartItems: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartIsOpen: (state) => {
      state.isCartOpen = !state.isCartOpen
    }
  }
})

export const { setCartIsOpen } = cartSlice.actions

export default cartSlice.reducer
