import { ChangeEvent, FormEvent, useState } from 'react'

import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from '@/utils/Firebase'
import { ToastError } from '@/utils/Toasts'

import { Button } from '../button/Button.component'
import { FormInput } from '../form-input/FormInput.component'

import styles from './SignInForm.module.scss'
import FORM_FIELDS from './formFields.data'
import { DefaultSignInFormFields } from './formFields.interface'

const DEFAULT_FORM_FIELDS: DefaultSignInFormFields = {
  email: '',
  password: ''
}

export const SignInForm = () => {
  const [formFields, setFormFields] =
    useState<DefaultSignInFormFields>(DEFAULT_FORM_FIELDS)
  const { email, password } = formFields

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { user }: any = await signInAuthUserWithEmailAndPassword(email, password)

      resetFormFields()
    } catch (err: any) {
      if (err.code === 'auth/wrong-password') {
        ToastError('Wrong password')
      } else if (err.code === 'auth/user-not-found') {
        ToastError('No user associated with this email')
      } else {
        ToastError(err.code)
      }
    }
  }

  const signInWithGoogle = async () => {
    const { user }: any = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  const resetFormFields = () => setFormFields(DEFAULT_FORM_FIELDS)

  return (
    <div className={styles.signInContainer}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        {FORM_FIELDS.map((field) => (
          <FormInput
            key={field.id}
            {...{ value: formFields[field.name], ...field }}
            onChange={handleChange}
          />
        ))}

        <div className={styles.buttonsContainer}>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}
