// 'use client';

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
        <div id="games" className="flex flex-col h-fit min-h-screen bg-gradient-to-b from-sky-700 from-20% via-[#43e2d8] via-75% to-[#cadba8] to-100%">
            <NavBar />
            <div className="flex flex-grow flex-col justify-around">
                {/* Brand Logos */}
                <div className="flex w-full justify-center">
                    <img 
                        className="flex justify-center w-4/5 mt-20 object-contain rounded-xl" 
                        src="/gamebrandslogo.webp"
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
                    <div className="absolute lg:top-24 left-5 flex items-center justify-start">
                        <img 
                            className="max-w-80 w-1/3 md:w-1/4 lg:w-full max-h-96 object-contain"
                            src="/cloud1.svg" 
                        />
                    </div>
                    <div className="absolute -top-36 sm:-top-96 lg:-top-36 sm:-bottom-28 right-5 flex items-center justify-end">
                        <img 
                            className="max-w-80 w-1/3 md:w-1/4 lg:w-full max-h-96 object-contain"
                            src="/cloud2.svg" 
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
                    <div className="w-full lg:right-16 xl:right-30 mt-2 lg:mt-5 rounded-lg overflow-hidden z-40">
                        <div className="relative w-full h-full flex justify-center items-center flex-col md:flex-row">
                            {games.map((game, i) => {
                                return (
                                    <div
                                    key={i}
                                    className="py-6 sm:py-2 px-4"
                                >
                                    <div className="pb-0">
                                        <h1 className="flex justify-center text-gray-800 font-mouse text-3xl py-2 sm:text-4xl md:text-5xl lg:text-6xl border-x-2 border-t-2 border-black bg-[#c5f9ff] rounded-t-xl">{game.title}</h1>
                                    </div>
                                    <img className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-2 border-black rounded-b-xl" src={game.art} />
                                    <div className="flex justify-center mt-2">
                                        <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        type="button" 
                                        className="flex justify-center items-center text-gray-800 border-2 border-black rounded-full font-baloo text-3xl lg:text-5xl w-fit h-fit px-4 py-1 my-2 bg-[#ffd500] hover:bg-[#ffe561]" 
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
            <div className="relative flex justify-end w-full h-full">
                    <Footer />
                </div>
        </div>
      )
}

export default page