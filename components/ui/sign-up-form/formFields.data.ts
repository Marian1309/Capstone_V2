import { FormFields } from './formFields.interface'

const FORM_FIELDS: FormFields[] = [
  {
    labeltitle: 'Display Name',
    type: 'text',
    name: 'displayName',
    id: 1
  },
  {
    labeltitle: 'Email',
    type: 'email',
    name: 'email',
    id: 2
  },
  {
    labeltitle: 'Password',
    type: 'password',
    name: 'password',
    id: 3
  },
  {
    labeltitle: 'Confirm Password',
    type: 'password',
    name: 'confirmPassword',
    id: 4
  }
]

export default FORM_FIELDS
