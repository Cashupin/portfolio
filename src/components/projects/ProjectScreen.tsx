import { RouteComponentProps } from '@gatsbyjs/reach-router'
import { motion } from 'framer-motion'
import React from 'react'

export const ProjectScreen: React.FC<RouteComponentProps> = () => {
  return (
    <motion.div
      key="project"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        y: { type: 'spring', stiffness: 150, damping: 100 },
        opacity: { duration: 1 }
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center w-full lg:mt-36 content-center">
        <div className="w-full grid grid-rows-3 p-20 text-white">
          <div>
            <div className="text-[4em] font-bold text-shadow-white leading-[0.90]">
              <span className="inline-block align-baseline">Proyectos</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
