import { RouteComponentProps } from '@gatsbyjs/reach-router'
import { motion } from 'framer-motion'
import React from 'react'
import { ExperienceSection } from './components/ExperienceSection'
import { SkillSection } from './components/SkillSection'

export const StackScreen: React.FC<RouteComponentProps> = () => {
  return (
    <motion.div
      key="stack"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        y: { type: 'spring', stiffness: 150, damping: 100 },
        opacity: { duration: 1 }
      }}
    >
      <SkillSection />
      <ExperienceSection/>
    </motion.div>
  )
}
