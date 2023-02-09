import clsx from 'clsx'
import { FC } from 'react'

import { ButtonProps, ButtonTypeClasses } from './Button.interface'
import styles from './Button.module.scss'

const BUTTON_TYPE_CLASSES: ButtonTypeClasses = {
  google: 'googleSignIn',
  inverted: 'inverted'
}

export const Button: FC<ButtonProps> = ({
  children,
  buttonType = 'inverted',
  ...otherProps
}) => {
  return (
    <button
      className={clsx(styles.buttonContainer, styles[BUTTON_TYPE_CLASSES[buttonType]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
