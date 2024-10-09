
import React from 'react';
import { FaXTwitter, FaLinkedin, FaDiscord, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { RiFacebookBoxFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="w-full py-5 sm:py-10 px-4 bg-gray-900 font-baloo"> {/* Container */}
      <h2 className="sr-only">Cashew Gets A Job</h2>
      <div className="flex flex-col-reverse lg:justify-around">

        {/* :SITE NAME & SOCIAL NETWORKS */}
        <div className="relative mt-14 sm:mt-0 px-3 flex flex-col justify-center items-center text-gray-500">
          <h1 className="font-title text-6xl text-center text-yellow-400 font-medium mt-auto font-mouse">Cashew Gets A Job</h1>
          <div className="flex flex-row gap-12 py-2">
              <div className="text-lg text-blue-100 font-baloo">
                <a
                    href="https://www.cashewgetsajob.com/pages/contact"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Contact
                </a>
              </div>
              <div className="text-lg text-blue-100 font-baloo">
                <a
                    href="/FAQ"
                >
                    Policies/FAQ
                </a>
              </div>
              <div className="text-lg text-blue-100 font-baloo">
                <a
                    href="/legal"
                >
                    Legal
                </a>
              </div>              
          </div>
          <div className="mt-auto flex flex-col items-center">
            {/* :::Social */}
            <span className="inline-flex py-2 gap-6 w-full justify-center md:justify-start md:w-auto">
            <a 
                className="text-gray-200 text-xl inline cursor-pointer hover:text-indigo-600 w-fit" 
                href='https://discord.gg/vpRkK4ectJ'
                target='_blank' 
                rel='noopener noreferrer'>
                <FaDiscord />
            </a>
            <a 
                className="text-gray-200 text-xl inline cursor-pointer hover:text-blue-700 w-fit" 
                href='https://www.linkedin.com/company/cashewgetsajob/'
                target='_blank' 
                rel='noopener noreferrer'>
                <FaLinkedin />
            </a>
              <a 
                className="text-gray-200 text-xl inline cursor-pointer hover:text-gray-500 w-fit" 
                href='https://x.com/CashewGetsaJob'
                target='_blank' 
                rel='noopener noreferrer'>
                <FaXTwitter />
            </a>
              <a 
                className="text-gray-200 text-xl inline cursor-pointer hover:text-blue-600 w-fit" 
                href='https://www.facebook.com/CashewGetsAJob'
                target='_blank' 
                rel='noopener noreferrer'>
                <RiFacebookBoxFill />
            </a>
              <a 
                className="text-gray-200 text-xl inline cursor-pointer hover:text-yellow-500 w-fit" 
                href='https://www.instagram.com/cashewgetsajob/'
                target='_blank' 
                rel='noopener noreferrer'>
                <FaInstagram />
            </a>
              <a 
                className="text-gray-200 text-lg inline cursor-pointer hover:text-fuchsia-500 w-fit" 
                href='https://www.tiktok.com/@cashewgetsajob'
                target='_blank' 
                rel='noopener noreferrer'>
                <FaTiktok />
            </a>
            <a 
                className="text-gray-200 text-xl inline cursor-pointer hover:text-red-500 w-fit" 
                href='https://www.youtube.com/channel/UCOJOtEMmgnQ9bpR6FzNGYYA'
                target='_blank' 
                rel='noopener noreferrer'>
                <FaYoutube />
            </a>
            </span>
            {/* :::Copyright */}
            <span className="pb-4 text-xs">&copy;2024, SFR, LLC All Rights Reserved.</span>
          </div>
          {/* ::Mobile separator line */}
          <span className="sm:hidden absolute -top-4 left-1/2 w-1/4 h-px bg-gray-400 transform -translate-x-1/2" aria-hidden="true"/>
        </div>

        {/* :NAVIGATION */}
        {/* <div className="grid grid-cols-2 gap-5 text-gray-300"> */}
          {/* ::Navigation */}
          {/* <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-3xl text-yellow-400 font-bold tracking-wide font-mouse">Navigation</h3>
            <nav className="flex justify-around md:flex-col font-medium list-none">
              <li><a href="#link" className="hover:text-gray-100">Home</a></li>
              <li><a href="#link" className="hover:text-gray-100">Books</a></li>
              <li><a href="#link" className="hover:text-gray-100">Team</a></li>
              <li><a href="#link" className="hover:text-gray-100">Contact</a></li>
            </nav>
          </div> */}
          {/* ::Address */}
          {/* <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-3xl text-yellow-400 font-bold tracking-wide font-mouse">Address</h3>
            <p className="md:w-48 text-center sm:text-left text-lg md:text-xl font-medium">101 Paradise Road, 97460 Fancy Island REUNION</p>
          </div> */}
          {/* ::Email */}
          {/* <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-3xl text-yellow-400 font-bold tracking-wide font-mouse">Fancy Company</h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="#email">fancytailwind@paradise.com</a>
            </p>
          </div> */}
          {/* ::Phone */}
          {/* <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-3xl text-yellow-400 font-bold tracking-wide font-mouse">Phone contact</h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>209-217-2459</span>
            </p>
          </div> */}
        {/* </div> */}

      </div>
    </footer>
  )
}

export default Footer


