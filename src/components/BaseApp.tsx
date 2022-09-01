import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export const BaseApp: FC<Props> = ({ children }) => {
  return (
    <section className="h-full min-h-screen bg-gradient-to-b from-slate-800 via-slate-600 to-slate-800 ">
      <div className="h-full min-h-screen bg-[url('../../public/img/bg.png')] bg-repeat">
        {children}
      </div>
    </section>
  )
}
