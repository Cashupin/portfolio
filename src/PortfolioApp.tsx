import React from 'react'
import { BaseApp } from './components/BaseApp'
import { Navbar } from './layouts/Navbar'
import { AppRouter } from './routers/AppRouter'

export const Portfolio = () => {
  return (
    <BaseApp>
      <Navbar />
      <AppRouter />
    </BaseApp>
  )
}
