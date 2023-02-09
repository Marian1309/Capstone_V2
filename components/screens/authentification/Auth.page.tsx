import { SignInForm, SignUpForm } from '@components/ui'

import styles from './Auth.module.scss'

const Auth = () => {
  return (
    <div className={styles.authentificationContainer}>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Auth
