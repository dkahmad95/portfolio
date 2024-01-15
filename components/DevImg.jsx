import Image from 'next/image'
import React from 'react'

const DevImg = ({ containerStyles , imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority alt=''  />
    </div>
  )
}

export default DevImg