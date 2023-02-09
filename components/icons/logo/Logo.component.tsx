import { Link } from 'react-router-dom'

import { crown } from '@icons'

export const Logo = () => {
  return (
    <Link to='/'>
      <img src={crown.default} alt='logo' />
    </Link>
  )
}
