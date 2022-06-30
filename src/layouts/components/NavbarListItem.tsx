import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@gatsbyjs/reach-router'

interface Props {
  route: string
  name: string
}

export const NavbarListItem: React.FC<Props> = ({ route, name }) => {
  return (
    <li className="nav-item border-b-2 border-white md:border-none">
      <Link
        className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
        to={route}
      >
        <span className="ml-2 text-shadow-white">{name}</span>
      </Link>
    </li>
  )
}

NavbarListItem.propTypes = {
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
