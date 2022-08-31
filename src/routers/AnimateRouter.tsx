import React, { FC, ReactNode } from 'react'
import { Location, Router } from '@gatsbyjs/reach-router'

interface Props {
  children: ReactNode
}

export const AnimateRouter: FC<Props> = ({ children }) => {
  return (
    <Location>
      {({ location }) => (
        <div className="lg:fixed absolute ">
            <Router key={location.key} location={location}>
              {children}
            </Router>
        </div>
      )}
    </Location>
  )
}
