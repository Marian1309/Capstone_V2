import { ChangeEvent } from 'react'

export interface FormInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  labeltitle: string
  value: string
  name: string
  type: string
}
