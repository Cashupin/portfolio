import React from 'react'
import PropTypes from 'prop-types'
import Link from './NavLink'

interface Props {
  route: string
  name: string
}

export const NavbarListItem: React.FC<Props> = ({ route, name }) => {
  return (
    <li className="nav-item border-b-2 border-white md:border-none w-11/12 md:w-auto">
      <Link
        to={route}
        className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75 border-white"
      >
        <span className="ml-2 ">{name}</span>
      </Link>
    </li>
  )
}

NavbarListItem.propTypes = {
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
