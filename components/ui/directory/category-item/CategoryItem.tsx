import { FC } from 'react'

import styles from './CategoryItem.module.scss'

interface CategoryItemProps {
  id: number
  imageUrl: string
  title: string
}

export const CategoryItem: FC<CategoryItemProps> = ({ id, imageUrl, title }) => {
  return (
    <div className={styles.categoryContainer} key={id}>
      <img className={styles.categoryImage} src={imageUrl} alt='' />

      <div className={styles.categoryBodyContainer}>
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}
