type FieldName = 'displayName' | 'email' | 'password' | 'confirmPassword'

export interface FormFields {
  labeltitle: string
  type: string
  name: FieldName
  id: number
}

export interface DefaultSignUpFormFields {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}
