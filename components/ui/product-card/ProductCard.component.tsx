import { FC } from 'react'

import { Button } from '../button/Button.component'

import { ProductCardProps } from './ProductCard.interface'
import styles from './ProductCard.module.scss'

export const ProductCard: FC<ProductCardProps> = ({ name, imageUrl, price }) => {
  return (
    <div className={styles.productCardContainer}>
      <img src={imageUrl} alt={name} />

      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>

      <Button>Add to card</Button>
    </div>
  )
}
