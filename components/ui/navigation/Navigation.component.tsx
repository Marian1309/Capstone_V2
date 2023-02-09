import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { GlobalState } from '@store'

import { Logo } from '@components/icons'

import { signOutUser } from '@/utils/Firebase'

import { NavigationProps } from './Navigation.interface'
import styles from './Navigation.module.scss'

export const Navigation: FC<NavigationProps> = ({ element }) => {
  const currentUser = useSelector((state: GlobalState) => state.user.currentUser)

  return (
    <>
      <div className={styles.navigation}>
        <Logo />

        <div className={styles.linksContainer}>
          <Link to='/shop' className={styles.link}>
            Shop
          </Link>

          {currentUser ? (
            <span className={styles.link} onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link to='/auth' className={styles.link}>
              Sign in
            </Link>
          )}
        </div>
      </div>
      {element}
    </>
  )
}
