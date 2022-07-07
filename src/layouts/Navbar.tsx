import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  SelectLanguage,
  NavbarListItem,
  NavbarListItemIcon
} from './components'

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto text-right">
              <div
                onClick={() => setNavbarOpen(false)}
                className="w-screen md:w-auto"
              >
                <NavbarListItem route="/" name={t('menu:home')} />
              </div>
              <div onClick={() => setNavbarOpen(false)}>
                <NavbarListItem route="/stack" name={t('menu:stack')} />
              </div>
              <div onClick={() => setNavbarOpen(false)}>
                <NavbarListItem route="/projects" name={t('menu:projects')} />
              </div>
              <li className="nav-item block md:hidden text-left w-11/12 md:w-auto">
                <SelectLanguage />
              </li>
            </ul>
            <div className="relative w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto hidden lg:flex">
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <NavbarListItemIcon link="https://www.linkedin.com/in/jalvarezcarrera/">
                  <i className="fab fa-linkedin text-3xl leading-lg text-white opacity-75" />
                </NavbarListItemIcon>
                <NavbarListItemIcon link="https://twitter.com/jalvarezc96">
                  <i className="fab fa-twitter text-3xl leading-lg text-white opacity-75" />
                </NavbarListItemIcon>
                <NavbarListItemIcon link="https://api.whatsapp.com/send?phone=56934305335&text=Hola%20Juan%2C%20te%20contacto%20a%20traves%20de%20tu%20portafolio.">
                  <i className="fab fa-whatsapp text-3xl leading-lg text-white opacity-75" />
                </NavbarListItemIcon>
                <NavbarListItemIcon link="https://github.com/cashupin">
                  <i className="fab fa-github text-3xl leading-lg text-white opacity-75" />
                </NavbarListItemIcon>
              </ul>
            </div>
            <div className="hidden md:block">
              <SelectLanguage />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
