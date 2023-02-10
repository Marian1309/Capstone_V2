export interface CartState {
  isCartOpen: boolean
  cartItems: any[]
  cartCount: number
}

export interface ProductToAddData {
  id: number
  name: string
  imageUrl: string
}
