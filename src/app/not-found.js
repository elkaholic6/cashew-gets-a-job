import Link from 'next/link';
import Image from 'next/image';
 
export default function NotFound() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <Image src="/404image.webp" className="w-10/12 sm:w-1/2 md:w-1/3 rounded-xl" alt="404 image" width={500} height={500}/>
        <p className="text-3xl lg:text-5xl font-mouse text-yellow-400 mt-2">404</p>
        <p className="text-3xl lg:text-5xl font-mouse">Oops! Page not found...</p>
        <Link 
          className="text-blue-500 font-baloo text-lg lg:text-2xl mt-2"
          href="/">Return Home
        </Link>
      </div>
    </div>
  )
}