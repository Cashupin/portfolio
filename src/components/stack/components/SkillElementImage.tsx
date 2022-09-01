import React from 'react'

interface Props {
  image: string
  name: string
}

export const SkillElementImage: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="w-full grid grid-rows-2 text-white p-5 text-center">
      <img
        src={image}
        alt={name}
        className="max-h-24 mx-auto align-middle"
      />
      <span className="text-[1.5em]">{name}</span>
    </div>
  )
}
