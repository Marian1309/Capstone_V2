import { PropsWithChildren } from 'react'

export interface ButtonProps extends PropsWithChildren {
  buttonType: 'google' | 'inverted'
  type: 'reset' | 'button' | 'submit' | undefined
}

export interface ButtonTypeClasses {
  google: string
  inverted: string
}
