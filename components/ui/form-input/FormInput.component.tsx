import clsx from 'clsx'
import { FC } from 'react'

import { FormInputProps } from './FormInput.interface'
import styles from './FormInput.module.scss'

export const FormInput: FC<FormInputProps> = ({ onChange, ...inputProps }) => {
  return (
    <div className={styles.group}>
      {inputProps.labeltitle && (
        <label
          className={clsx(
            inputProps.value.length ? styles.shrink : '',
            styles.formInputLabel
          )}
        >
          {inputProps.labeltitle}
        </label>
      )}
      <input required {...inputProps} onChange={onChange} className={styles.formInput} />
    </div>
  )
}
