type FieldName = 'email' | 'password'

export interface DefaultSignInFormFields {
  email: string
  password: string
}

export interface FormFields {
  labeltitle: string
  type: string
  name: FieldName
  id: number
}
