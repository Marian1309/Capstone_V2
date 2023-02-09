import { ChangeEvent, FormEvent, useState } from 'react'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '@/utils/Firebase'
import { ToastError } from '@/utils/Toasts'

import { Button } from '../button/Button.component'
import { FormInput } from '../form-input/FormInput.component'

import styles from './SignUpForm.module.scss'
import FORM_FIELDS from './formFields.data'
import { DefaultSignUpFormFields } from './formFields.interface'

const DEFAULT_FORM_FIELDS: DefaultSignUpFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const SignUpForm = () => {
  const [formFields, setFormFields] =
    useState<DefaultSignUpFormFields>(DEFAULT_FORM_FIELDS)
  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      ToastError('Passwords do not match')
      return
    }

    try {
      const { user }: any = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        ToastError('Cannot create a user, email already in use')
      } else {
        ToastError(err.code)
      }
    }
  }

  const resetFormFields = () => setFormFields(DEFAULT_FORM_FIELDS)

  return (
    <div className={styles.signUpContainer}>
      <h2>Do not have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        {FORM_FIELDS.map((field) => (
          <FormInput
            key={field.id}
            {...{ value: formFields[field.name], ...field }}
            onChange={handleChange}
          />
        ))}

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}
