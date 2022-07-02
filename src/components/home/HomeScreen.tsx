import { RouteComponentProps } from '@gatsbyjs/reach-router'
import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Typed from 'typed.js'
import { ButtonWithIcon } from '../elements/ButtonWithIcon'

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
    <motion.div
      key="home"
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
              <span className="inline-block align-baseline">
                Juan Alvarez Carrera
              </span>
            </div>
          </div>
          <div className="text-[35px] text-shadow-white">
            <span ref={el}></span>
          </div>
          <div>
            <ButtonWithIcon text={t('homebuttons:cv')}>
              <i className="fa-solid fa-file-arrow-down mr-2"></i>
            </ButtonWithIcon>
            <ButtonWithIcon text={t('homebuttons:contact')}>
              <i className="fab fa-whatsapp mr-2 text-green-600"></i>
            </ButtonWithIcon>
          </div>
        </div>
        <div className="w-full grid grid-rows-1 md:px-10 p-5">
          <img
            // src={process.env.PUBLIC_URL + 'svg/main-dev.svg'}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEmaZGO-1gC2w/profile-displayphoto-shrink_800_800/0/1596565006053?e=1661990400&v=beta&t=aW0q0ss3VCM-QwB-LDbcgoHi1Ylv2Qxg-7xtQ0hEVTA"
            className="w-3/5 rounded-full m-auto "
          />
          <span className="text-white text-[30px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </motion.div>
  )
}
