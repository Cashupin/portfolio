import { Link } from '@gatsbyjs/reach-router'
import React, { useState } from 'react'

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              Juan Alvarez
            </Link>
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
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="stack"
                >
                  <span className="ml-2">Stack</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="projects"
                >
                  <span className="ml-2">Projects</span>
                </Link>
              </li>
            </ul>
            <div className="relative w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto hidden md:flex">
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="https://www.linkedin.com/in/jalvarezcarrera/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin text-lg leading-lg text-white opacity-75" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="https://twitter.com/jalvarezc96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="https://api.whatsapp.com/send?phone=56934305335&text=Hola%20Juan%2C%20te%20contacto%20a%20traves%20de%20tu%20portafolio."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp text-lg leading-lg text-white opacity-75" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="https://github.com/cashupin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github text-lg leading-lg text-white opacity-75" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
