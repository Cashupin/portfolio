import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export const BaseApp: FC<Props> = ({ children }) => {
  return (
    <section className="h-screen bg-gradient-to-b from-slate-800 via-slate-600 to-slate-800 -z-10 ">
      <div className="h-full bg-[url('../../public/img/bg.png')]">
        {children}
      </div>
    </section>
  )
}
