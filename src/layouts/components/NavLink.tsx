import { Link } from '@gatsbyjs/reach-router'
import React, { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
  to: string
  className: string
}

const NavLink: FC<Props> = (props) => {
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
