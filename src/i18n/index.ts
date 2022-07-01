import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './resources/en.json'
import es from './resources/es.json'

type Props = {
  lang: Object
  name: string
  img: string
}

interface P {
  [key: string]: Props
}

const resources: P = {
  en: {
    ...en,
    lang: en,
    name: 'English',
    img: process.env.PUBLIC_URL + 'svg/flags/en.svg'
  },
  es: {
    ...es,
    lang: es,
    name: 'Español',
    img: process.env.PUBLIC_URL + 'svg/flags/es.svg'
  }
}

export const resourcesLanguages = { ...resources }
export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  defaultNS: 'common',
  fallbackLng: 'en'
})
