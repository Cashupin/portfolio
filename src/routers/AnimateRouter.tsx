import React, { FC, ReactNode } from 'react'
import { Location, Router } from '@gatsbyjs/reach-router'
import { AnimatePresence } from 'framer-motion'

interface Props {
  children: ReactNode
}

export const AnimateRouter: FC<Props> = ({ children }) => {
  return (
    <Location>
      {({ location }) => (
        <div className="lg:fixed absolute -z-10">
          <AnimatePresence>
            <Router key={location.key} location={location}>
              {children}
            </Router>
          </AnimatePresence>
        </div>
      )}
    </Location>
  )
}
