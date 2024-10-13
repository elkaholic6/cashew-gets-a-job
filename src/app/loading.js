'use client';

import { useRef, useEffect } from 'react';
import ProgressBar from 'progressbar.js';
import Image from 'next/image'

export default function Loading() {
    const progressRef = useRef(null);

    useEffect(() => {
      const bar = new ProgressBar.Line(progressRef.current, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffee00',
        trailColor: '#ddd',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' },
      });
  
      bar.animate(1.0);
  
      return () => {
        bar.destroy();
      };
    }, []);
  
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900">
        <div className="flex items-center justify-center">
            <Image priority className="rounded-full w-auto h-auto" src="/CashewLogo.png" alt="logo" width={200} height={200} />
        </div>
        <div className="w-1/3 h-1 mt-8" ref={progressRef} />
      </div>
    );
  }