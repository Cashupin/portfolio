import { RouteComponentProps } from '@gatsbyjs/reach-router'
import React from 'react'

export const HomeScreen: React.FC<RouteComponentProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center w-full">
      <div className="w-full p-10 bg-red-50">
        <p className='text-[40px] font-bold'>Juan Alvarez</p>
        <p>Desarrollador</p>
      </div>
      <div>2</div>
    </div>
  )
}
