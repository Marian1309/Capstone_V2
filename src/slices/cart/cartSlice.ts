import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CartState, ProductToAddData } from './cartSlice.interface'

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartIsOpen: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
    addItemToCart: (state, action: PayloadAction<{ productToAdd: ProductToAddData }>) => {
      const { productToAdd } = action.payload

      const addCartItem = (cartItems: typeof state.cartItems, productToAdd: any) => {
        const existingCartItem = cartItems.find(
          (cartItem) => cartItem.id === productToAdd.id
        )

        if (existingCartItem) {
          return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        }

        return [...cartItems, { ...productToAdd, quantity: 1 }]
      }

      state.cartItems = addCartItem(state.cartItems, productToAdd)
    },
    setCartCount: (state, action: PayloadAction<{ newCount: number }>) => {
      state.cartCount = action.payload.newCount
    }
  }
})

export const { setCartIsOpen, addItemToCart, setCartCount } = cartSlice.actions

export default cartSlice.reducer
