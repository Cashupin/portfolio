import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  text: string
}

export const ButtonWithIcon: FC<Props> = ({ text, children }) => {
  return (
    <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all border-solid border-2 border-white rounded-xl hover:bg-white group mx-5 my-2">
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-200  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black">
        {children}
        {text}
      </span>
    </button>
  )
}
