import React from 'react'
import Image from 'next/image'

function Roadmap() {
  return (
    <div className="bg-[#eaffea]">
        <div className="flex justify-center">
            <Image
                className="object-contain rounded-xl"
                src="/Roadmap.webp" 
                alt="roadmap"
                width={500} 
                height={500}
            />
        </div>
    </div>
  )
}

export default Roadmap