import { RouteComponentProps } from '@gatsbyjs/reach-router'
import React from 'react'

export const HomeScreen: React.FC<RouteComponentProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center w-full h-full content-center bg-gray-800">
      <div className="w-full grid grid-rows-3 p-20 text-white">
        <div className="text-[4em] font-bold text-shadow-white leading-[0.90] ">
          Juan Alvarez Carrera
        </div>
        <div className="">Developer</div>
        <div>
          <button className="border-solid border-2 border-white px-4 py-3 rounded-xl hover:bg-gray-700 active:bg-gray-600 m-3">
            Download Cv
          </button>
          <button className="border-solid border-2 border-green-300 px-4 py-3 rounded-xl hover:bg-green-700 active:bg-green-600">
            <i className="fab fa-whatsapp mr-2 text-green-300"></i>
            Contactar
          </button>
        </div>
      </div>
      <div className="">
        <p>Imagen</p>
      </div>
    </div>
  )
}
