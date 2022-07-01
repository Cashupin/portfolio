import { RouteComponentProps } from '@gatsbyjs/reach-router'
import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Typed from 'typed.js'

export const HomeScreen: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  const el = useRef<HTMLSpanElement | null>(null)
  useEffect(() => {
    const typed = new Typed(el.current as Element, {
      strings: [t('typed:dev'), t('typed:design')], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    })
    // Destropying
    return () => {
      typed.destroy()
    }
  }, [t])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center w-full h-full content-center bg-gray-800">
      <div className="w-full grid grid-rows-3 p-20 text-white">
        <div className="text-[4em] font-bold text-shadow-white leading-[0.90] ">
          Juan Alvarez Carrera
        </div>
        <div className="text-[35px] text-shadow-white">
          <span ref={el}></span>
        </div>
        <div>
          <button className="border-solid border-2 border-white px-4 py-3 rounded-xl hover:bg-gray-700 active:bg-gray-600 m-3">
            {t('homebuttons:cv')}
          </button>
          <button className="border-solid border-2 border-green-300 px-4 py-3 rounded-xl hover:bg-green-700 active:bg-green-600">
            <i className="fab fa-whatsapp mr-2 text-green-300"></i>
            Contactar
          </button>
        </div>
      </div>
      <div className="w-full grid grid-rows-1 p-20">
        <div className="text-center">
          <img
            src={process.env.PUBLIC_URL + 'svg/main-dev.svg'}
            className="w-3/5"
          />
        </div>
      </div>
    </div>
  )
}
