import { Link } from '@gatsbyjs/reach-router'
import React from 'react'

interface Props {
  children: React.ReactNode
  to: string
  className: string
}

const NavLink: React.FC<Props> = (props) => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          className: `${props.className} ${
            isCurrent ? 'md:border-b-2' : 'md:border-none'
          }`
        }
      }}
    />
  )
}

export default NavLink
