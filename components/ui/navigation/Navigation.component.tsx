import { FC } from 'react'
import { Link } from 'react-router-dom'

import { crown } from '@icons'

import { NavigationProps } from './Navigation.interface'
import styles from './Navigation.module.scss'

export const Navigation: FC<NavigationProps> = ({ element }) => {
  return (
    <>
      <div className={styles.navigation}>
        <img src={crown.default} alt='logo' />

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
