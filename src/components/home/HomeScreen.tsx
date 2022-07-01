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
    <div className="grid grid-cols-1 lg:grid-cols-2 text-center w-full lg:mt-36 content-center bg-gray-800">
      <div className="w-full grid lg:grid-rows-5 grid-rows-3 p-20 text-white">
        <div>
          <div className="text-[4em] font-bold text-shadow-white leading-[0.90] md:row-span-3 2xl:px-20">
            <span className="inline-block align-baseline">
              Juan Alvarez Carrera
            </span>
          </div>
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
      <div className="w-full grid grid-rows-1 md:px-10 p-5">
        <div className="text-center">
          <img
            // src={process.env.PUBLIC_URL + 'svg/main-dev.svg'}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEmaZGO-1gC2w/profile-displayphoto-shrink_800_800/0/1596565006053?e=1661990400&v=beta&t=aW0q0ss3VCM-QwB-LDbcgoHi1Ylv2Qxg-7xtQ0hEVTA"
            className="lg:w-3/5 w-full rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
