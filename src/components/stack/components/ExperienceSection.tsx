import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {}

export const ExperienceSection: React.FC<Props> = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="grid grid-cols-1 text-center w-full">
        <div className="w-full grid grid-rows-1  text-white">
          <div>
            <div className="text-[3em] font-bold">
              <span className="inline-block align-baseline">
                {t('stack:experience')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
