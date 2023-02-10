import { FC } from 'react'

import { shoppingBag } from '@icons'

import styles from './CardIcon.module.scss'

export const CardIcon: FC<any> = ({ ...otherProps }) => {
  return (
    <div className={styles.cartIconContainer} {...otherProps}>
      <img src={shoppingBag.default} alt='shopping bag' className={styles.shoppingIcon} />

      <span className={styles.itemCount}>0</span>
    </div>
  )
}
