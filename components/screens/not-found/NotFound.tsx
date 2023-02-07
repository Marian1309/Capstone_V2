import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

export default function NotFound() {
  document.title = 'Not found'

  const text = 'Not Found 🤣 -> '

  return (
    <main className={styles.main}>
      <span>
        {text}
        <Link className={styles.link} to='/'>
          go Home
        </Link>
      </span>
    </main>
  )
}
