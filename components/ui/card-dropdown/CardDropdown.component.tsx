import { Button } from '../button/Button.component'
import { CartItem } from '../cart-item/CartItem.component'

import styles from './CardDropdown.module.scss'

export const CardDropdown = () => {
  return (
    <div className={styles.cardDropdownContainer}>
      <div className={styles.cartItems}>
        {[].map((item) => (
          <CartItem />
        ))}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  )
}
