import { useSelector } from 'react-redux'

import { GlobalState } from '@store'

import { Button } from '../button/Button.component'
import { CartItem } from '../cart-item/CartItem.component'

import styles from './CardDropdown.module.scss'

export const CardDropdown = () => {
  const cartItems = useSelector((state: GlobalState) => state.cart.cartItems)

  return (
    <div className={styles.cardDropdownContainer}>
      <div className={styles.cartItems}>
        {cartItems ? (
          cartItems.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <span className={styles.emptyMessage}>Your cart is empty</span>
        )}
      </div>

      <Button>Go to Checkout</Button>
    </div>
  )
}
