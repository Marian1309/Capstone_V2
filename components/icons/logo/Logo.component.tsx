import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/'>
      <img src='/icons/crown.svg' alt='logo' />
    </Link>
  )
}
