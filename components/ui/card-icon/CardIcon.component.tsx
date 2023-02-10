import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, GlobalState } from '@store'

import { setCartCount } from '@/slices/cart/cartSlice'

import styles from './CardIcon.module.scss'

export const CardIcon: FC<any> = ({ ...otherProps }) => {
  const { cartCount, cartItems } = useSelector((state: GlobalState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const newCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    dispatch(setCartCount({ newCount }))
  }, [cartItems])

  return (
    <div className={styles.cartIconContainer} {...otherProps}>
      <img
        src='/icons/shopping-bag.svg'
        alt='shopping bag'
        className={styles.shoppingIcon}
      />

      <span className={styles.itemCount}>{cartCount}</span>
    </div>
  )
}
