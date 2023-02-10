import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@store'

import { addItemToCart } from '@/slices/cart/cartSlice'

import { Button } from '../button/Button.component'

import { ProductCardProps } from './ProductCard.interface'
import styles from './ProductCard.module.scss'

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>()

  const { imageUrl, name, price } = product

  return (
    <div className={styles.productCardContainer}>
      <img src={imageUrl} alt={name} />

      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>

      <Button onClick={() => dispatch(addItemToCart({ productToAdd: product }))}>
        Add to card
      </Button>
    </div>
  )
}
