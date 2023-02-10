import { ProductCard } from '@components/ui'

import SHOP_DATA from './Shop.data'
import styles from './Shop.module.scss'

const Shop = () => {
  return (
    <div className={styles.productsContainer}>
      {SHOP_DATA.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
