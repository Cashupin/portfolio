import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../../i18n'
// import { availableLanguages } from '../i18n'

export const SelectLanguage = () => {
  const { i18n } = useTranslation()
  const [toggle, setToggle] = useState(false)
  const handleChangeLanguage = (value: string) => {
    setToggle(!toggle)
    i18n.changeLanguage(value)
  }
  return (
    <div
    >
      <button
        id="selectLanguage"
        data-dropdown-toggle="dropdown"
        className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <i className="fa-solid fa-globe mr-2"></i>
        {i18n.language}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className={`z-10bg-white divide-y divide-gray-100 ${
          toggle ? 'absolute' : 'hidden'
        } rounded shadow  dark:bg-gray-700 w-40`}
      >
        <ul
          className="py-1 text-sm text-white w-full"
          aria-labelledby="selectLanguage"
        >
          {availableLanguages.map((language) => (
            <li key={language}>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                onClick={() => {
                  handleChangeLanguage(language)
                }}
              >
                {language}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
