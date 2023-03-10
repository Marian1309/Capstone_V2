import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppDispatch, GlobalState } from '@store'

import { Logo } from '@components/icons'

import { setCartIsOpen } from '@/slices/cart/CartSlice'

import { signOutUser } from '@/utils/Firebase'

import { CardDropdown } from '../card-dropdown/CardDropdown.component'
import { CardIcon } from '../card-icon/CardIcon.component'

import { NavigationProps } from './Navigation.interface'
import styles from './Navigation.module.scss'

export const Navigation: FC<NavigationProps> = ({ element }) => {
  const currentUser = useSelector((state: GlobalState) => state.user.currentUser)
  const isCartOpen = useSelector((state: GlobalState) => state.cart.isCartOpen)

  const dispatch = useDispatch<AppDispatch>()

  const toggleIsCartOpen = () => {
    dispatch(setCartIsOpen())
  }

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

          <CardIcon onClick={toggleIsCartOpen} />
        </div>
        {isCartOpen && <CardDropdown />}
      </div>
      {element}
    </>
  )
}
