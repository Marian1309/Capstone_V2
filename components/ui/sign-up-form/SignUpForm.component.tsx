import { ChangeEvent, FormEvent, useState } from 'react'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '@/utils/Firebase'
import { ToastError } from '@/utils/Toasts'

import { FormInput } from '../form-input/FormInput.component'

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
    <>
      <h1>Sign up with your email and password</h1>

      <form onSubmit={handleSubmit} className='text-black'>
        {FORM_FIELDS.map((field) => {
          const changebleValue = formFields[field.name]
          const props = { value: changebleValue, ...field }

          return <FormInput key={field.id} {...props} onChange={handleChange} />
        })}

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
