import { FC } from 'react'

import { CartItemProps } from './CartItem.interface'
import styles from './CartItem.module.scss'

export const CartItem: FC<CartItemProps> = ({ name, quantity, imageUrl, price, id }) => {
  return (
    <div className={styles.cartItemContainer} key={id}>
      <img src={imageUrl} alt={name} />

      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}
