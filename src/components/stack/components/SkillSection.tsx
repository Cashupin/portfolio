import React from 'react'
import { SkillElementImage } from './SkillElementImage'
import { useTranslation } from 'react-i18next'

interface Props {}

export const SkillSection: React.FC<Props> = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="grid grid-cols-1 text-center w-full">
        <div className="w-full grid grid-rows-1 mt-20 text-white">
          <div>
            <div className="text-[3em] font-bold">
              <span className="inline-block align-baseline">
                {t('stack:skill')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-8 pr-10 pl-10 text-center w-full content-center">
        <SkillElementImage
          name="React"
          image="https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png"
        />
        <SkillElementImage
          name="JavaScript"
          image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        />
        <SkillElementImage
          name="Laravel"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png"
        />
        <SkillElementImage
          name="PHP"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
        />
        <SkillElementImage
          name="HTML5"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
        />
        <SkillElementImage
          name="CSS3"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
        />
        <SkillElementImage
          name="TailWindCss"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
        />
        <SkillElementImage
          name="TailWindCss"
          image="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png"
        />
      </div>
    </>
  )
}
