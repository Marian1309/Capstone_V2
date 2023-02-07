import cln from 'classnames'
import { FC } from 'react'

import styles from './Spinner.module.scss'

export const Spinner: FC<{ className?: string }> = ({ className }) => {
  return <div className={cln(styles.loader, className)}></div>
}
