import React from 'react'

function NFTs() {
  return (
    <div className='bg-[#eaffea]'>
        <h1 className="flex justify-center font-mouse text-[240px] text-gray-800">
            CASHEWS
        </h1>
        
        <div className="flex flex-row p-6">
            <div className="w-full">
                <img 
                    className="object-contain rounded-xl"
                    src="/zookeeper.png" 
                />
            </div>
            <div className="flex justify-center items-center">
                <div className="px-10 lg:px-20 font-mouse text-5xl text-gray-700 text-center w-full">
                    Cashew’s Journey to Success—a pup with boundless determination. 3,333 Cashews are here to remind us that the key to success is getting up one more time than you fall.
                </div>
            </div>
        </div>
    </div>
  )
}

export default NFTs