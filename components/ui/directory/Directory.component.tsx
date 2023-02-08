import styles from './Directory.module.scss'
import CATEGORIES from './categories.data'
import { CategoryItem } from './category-item/CategoryItem.component'

export const Directory = () => {
  return (
    <div className={styles.categoriesContainer}>
      {CATEGORIES.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  )
}
