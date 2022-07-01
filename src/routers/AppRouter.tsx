import React from 'react'
import { HomeScreen } from '../components/home/HomeScreen'
import { StackScreen } from '../components/stack/StackScreen'
import { ProjectScreen } from '../components/projects/ProjectScreen'
import { AnimateRouter } from './AnimateRouter'

export const AppRouter = () => {
  return (
    <AnimateRouter>
      <HomeScreen path="/" />
      <StackScreen path="/stack" />
      <ProjectScreen path="/projects" />
    </AnimateRouter>
  )
}
