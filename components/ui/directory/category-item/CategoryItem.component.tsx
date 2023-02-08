import { FC } from 'react'

import { CategoryItemProps } from './CategoryItem.interface'
import styles from './CategoryItem.module.scss'

export const CategoryItem: FC<CategoryItemProps> = ({ id, imageUrl, title }) => {
  return (
    <div className={styles.categoryContainer} key={id}>
      <img className={styles.categoryImage} src={imageUrl} alt={title} />

      <div className={styles.categoryBodyContainer}>
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}
