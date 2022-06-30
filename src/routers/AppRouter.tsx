import React from 'react'
import { Router } from '@gatsbyjs/reach-router'
import { HomeScreen } from '../components/home/HomeScreen'
import { StackScreen } from '../components/stack/StackScreen'
import { ProjectScreen } from '../components/projects/ProjectScreen'
// import { HomeScreen } from '../components/home/HomeScreen'
// import { ProjectScreen } from '../components/projects/ProjectScreen'
// import { StackScreen } from '../components/stack/StackScreen'

export const AppRouter = () => {
  return (
    <Router>
      <HomeScreen path="/" />
      <StackScreen path="stack" />
      <ProjectScreen path="projects" />
    </Router>
  )
}
