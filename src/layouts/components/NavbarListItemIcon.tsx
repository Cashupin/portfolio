import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  link: string
}

export const NavbarListItemIcon: FC<Props> = ({ children, link }) => {
  return (
    <li className="nav-item">
      <a
        className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 rounded-xl text-shadow-white"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </li>
  )
}
