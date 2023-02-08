import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Crown } from '@icons'

import styles from './Navigation.module.scss'

interface NavigationProps {
  element: ReactNode
}

export const Navigation: FC<NavigationProps> = ({ element }) => {
  return (
    <>
      <div className={styles.navigation}>
        <img src={Crown.default} alt='logo' />

        <div className={styles.linksContainer}>
          <Link to='/shop' className={styles.link}>
            Shop
          </Link>

          <Link to='/sign-in' className={styles.link}>
            Sign in
          </Link>
        </div>
      </div>
      {element}
    </>
  )
}
