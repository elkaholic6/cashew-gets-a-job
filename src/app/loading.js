
import BarLoader from 'react-spinners/BarLoader';
import Image from 'next/image'

export default function Loading() {
  
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900">
        <div className="flex items-center justify-center">
            <Image priority className="rounded-full w-auto h-auto" src="/CashewLogo.png" alt="logo" width={200} height={200} />
        </div>
        <div className='flex items-center justify-center pt-6'>
            <BarLoader
                width={200}
                color={"#ffee00"}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
      </div>
    );
  }