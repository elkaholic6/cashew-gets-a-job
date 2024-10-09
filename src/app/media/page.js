// 'use client';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';


function page() {

    return (
        <div id="games" className="flex flex-col h-fit min-h-screen">
            <div className="bg-gradient-to-b from-sky-700 from-20% via-[#d987c2] via-75% to-[#f1be4d] to-100%">
                <NavBar />
                <div className="flex flex-grow flex-col justify-around">
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
                        {/* <div className="absolute lg:top-24 left-5 flex items-center justify-start z-0">
                            <img 
                                className="max-w-80 w-1/3 md:w-1/4 lg:w-full max-h-96 object-contain"
                                src="/cloud1.svg" 
                            />
                        </div>
                        <div className="absolute -top-36 sm:-top-96 lg:-top-36 sm:-bottom-28 right-5 flex items-center justify-end z-0">
                            <img 
                                className="max-w-80 w-1/3 md:w-1/4 lg:w-full max-h-96 object-contain"
                                src="/cloud2.svg" 
                            />
                        </div> */}
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
                        <div className="flex flex-col w-full lg:right-16 xl:right-30 mt-2 lg:mt-5 rounded-lg overflow-hidden pl-4 pt-10 lg:pt-20">
                            <div className="flex flex-col z-10">
                                <div className="flex justify-center w-full">
                                    <h1 className="flex justify-start w-[90%] lg:w-[80%] text-6xl font-bold font-mouse py-3">
                                            Banners
                                    </h1>
                                </div>
                                <div className="flex flex-wrap w-full h-full justify-center">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[90%] lg:w-[80%] h-fit justify-items-center">
                                            <img src="/banner_1.png" className="w-full h-fit object-cover"/>
                                            <img src="/banner_2.png" className="w-full h-fit object-cover"/>
                                            <img src="/banner_3.png" className="w-full h-fit object-cover"/>
                                            <img src="/banner_4.png" className="w-full h-fit object-cover"/>
                                            <img src="/banner_5.png" className="w-full h-fit object-cover"/>
                                            <img src="/banner_6.png" className="w-full h-fit object-cover"/>
                                            <img src="/banner_7.png" className="w-full h-fit object-cover"/>
                                            <img src="/banner_8.png" className="w-full h-fit object-cover"/>
                                            <img src="/banner_9.png" className="w-full h-fit object-cover"/>
                                    </div>
                                </div>
                                <div className="flex justify-center w-full">
                                    <h1 className="flex justify-start w-[90%] lg:w-[80%] text-6xl font-bold font-mouse pt-5 pb-3">
                                            Wallpapers
                                    </h1>
                                </div>
                                <div className="flex flex-wrap w-fit h-fit justify-center">
                                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-10 w-[90%] lg:w-[80%] h-fit justify-items-center">
                                            <img src="/wallpaper_1.png" className="w-fit h-fit object-cover"/>
                                            <img src="/wallpaper_2.png" className="w-fit h-fit object-cover"/>
                                            <img src="/wallpaper_3.png" className="w-fit h-fit object-cover"/>
                                            <img src="/wallpaper_4.png" className="w-fit h-fit object-cover"/>
                                            <img src="/wallpaper_5.png" className="w-fit h-fit object-cover"/>
                                            <img src="/wallpaper_6.png" className="w-fit h-fit object-cover"/>
                                            <img src="/wallpaper_7.png" className="w-fit h-fit object-cover"/>
                                            <img src="/wallpaper_8.png" className="w-fit h-fit object-cover"/>
                                    </div>
                                </div>
                                <div className="flex justify-center w-full">
                                    <h1 className="flex justify-start w-[90%] lg:w-[80%] text-6xl font-bold font-mouse pt-5 pb-3">
                                            Gifs
                                    </h1>
                                </div>
                                <div className="flex flex-wrap w-full h-full justify-center pb-4">
                                    <div className="flex flex-col sm:flex-row gap-4 w-[90%] lg:w-[80%] h-full items-center mb-4">
                                        <div className="flex items-center justify-center w-[90%] sm:w-1/3">
                                            <img src="/gif_1.gif" className="w-fit h-fit object-cover"/>
                                        </div>
                                        <div className="flex items-center justify-center w-[90%] sm:w-1/3">
                                            <img src="/gif_3.gif" className="w-full sm:w-[56%] object-cover"/>
                                        </div>
                                        <div className="flex items-center justify-center w-[90%] sm:w-1/3">
                                            <img src="/gif_2.gif" className="h-fit object-cover"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
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