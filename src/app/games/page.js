// 'use client';

import Image from 'next/image';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';


function page() {
    const games = [
        {
            art: '/constructioncashew.png',
            href: 'https://www.tinytap.com/activities/g5gmc/play/cashew-gets-a-job',
            title: 'Cashew Gets A Job',
        },
        {
            art: '/cookingcashew.png',
            href: 'https://www.tinytap.com/activities/g5kz7/play/cooking-with-cashew',
            title: 'Cooking With Cashew'
        }
    ]

    return (
        <div id="games" className="flex flex-col h-fit min-h-screen">
            <div className="bg-gradient-to-b from-sky-700 from-20% via-[#a678f0] via-75% to-[#d987c2] to-100%">
                <NavBar />
                <div className="flex flex-grow flex-col justify-around">
                    {/* Brand Logos */}
                    <div className="flex w-full justify-center">
                        <Image 
                            className="flex justify-center w-4/5 mt-20 lg:mt-28 xl:mt-32 object-contain rounded-xl" 
                            src="/gamebrandslogo.webp"
                            alt="Game brands logo"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                    {/* Clouds and other background stuff */}
                    <div className="absolute w-full px-1 pt-14 lg:px-8">
                        <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        >
                        <div
                            style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff] to-[#3c3c3c] opacity-40 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
                        />
                        </div>
                        <div className="absolute lg:top-24 left-5 flex items-center justify-start z-30">
                            <Image 
                                className="max-w-80 w-1/3 md:w-1/4 lg:w-full max-h-96 object-contain"
                                src="/cloud1.svg" 
                                alt="Clouds"
                                width={500}
                                height={500}
                                priority
                            />
                        </div>
                        <div className="absolute -top-36 sm:-top-96 lg:-top-36 sm:-bottom-28 right-5 flex items-center justify-end z-30">
                            <Image 
                                className="max-w-80 w-1/3 md:w-1/4 lg:w-full max-h-96 object-contain"
                                src="/cloud2.svg" 
                                alt="Clouds"
                                width={500}
                                height={500}
                                priority
                            />
                        </div>
                        <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        >
                        <div
                            style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e17313] to-[#fde25c] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                        </div>
                    </div>
                    {/* Games */}
                    <div className="flex justify-center h-full w-full">
                        <div className="flex flex-col w-full lg:right-16 xl:right-30 mt-2 lg:mt-5 rounded-lg overflow-hidden">
                            <div className="relative w-full h-full flex justify-center items-center flex-col md:flex-row z-40">
                                {games.map((game, i) => {
                                    return (
                                        <div
                                        key={i}
                                        className="py-6 sm:py-2 px-4"
                                    >
                                        <div className="pb-0">
                                            <h1 className="flex justify-center text-gray-800 font-mouse text-3xl py-2 sm:text-4xl md:text-5xl lg:text-6xl border-x-2 border-t-2 border-black bg-[#c5f9ff] rounded-t-xl">{game.title}</h1>
                                        </div>
                                        <Image className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-2 border-black rounded-b-xl" src={game.art} alt="Game art" width={500} height={500} priority />
                                        <div className="flex justify-center mt-2">
                                            <a 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            type="button" 
                                            className="flex justify-center items-center text-gray-800 border-2 border-black rounded-full font-baloo text-xl lg:text-3xl w-fit h-fit px-4 py-1 my-2 bg-[#ffd500] hover:bg-[#ffe561]" 
                                            href={game.href}>
                                                Play here!
                                                </a>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <Image 
                        className='object-cover h-full w-full' 
                        src="/nifty_island.png"
                        alt="Nifty Island"
                        width={2560}
                        height={1230}
                        quality={100}
                        sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw"
                        priority
                    />
                    <a
                        type="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://niftyis.land/Cashew/0"
                        className="absolute w-9/12 xs:w-1/2 sm:w-[40%] max-w-[445px] flex items-center justify-center bottom-[20%] lg:bottom-[40%] left-1/2 -translate-x-1/2 bg-[#5cffa5] hover:bg-[#84ffbb] text-gray-900 font-baloo text-xl lg:text-3xl px-4 py-1 border-2 border-gray-900 rounded-full"
                    >
                        Explore Cashew&apos;s Island!
                    </a>
                </div>
            </div>
            <div className="relative flex justify-end w-full h-full">
                <Footer />
            </div>
        </div>
      )
}

export default page