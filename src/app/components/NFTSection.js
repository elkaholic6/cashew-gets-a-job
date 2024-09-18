'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';

const wrapImages = gsap.utils.wrap(['/zookeeper.png', '/firefighter.png', '/prowrestler.png', '/rockstar.png']);

function NFTSection() {
  const el = useRef();
  const boxesRef = useRef();
  const q = gsap.utils.selector(el);
  const countRef = useRef(0); // Use a ref to persist the count across renders

  const createItem = () => {
    const newId = ++countRef.current;  // Increment on client-side
    return { id: newId, image: wrapImages(newId), status: 'entered' };
  };

  const [layout, setLayout] = useState(() => ({
    items: [createItem(), createItem(), createItem(), createItem()]  // Initialize with 4 items
  }));

  const removeItems = useCallback(
    (exitingItems) => {
      if (!exitingItems.length) return;

      setLayout((prev) => ({
        state: Flip.getState(q('.box')),
        items: prev.items.filter((item) => !exitingItems.includes(item))
      }));
    },
    [q]
  );

  useGSAP(
    () => {
      gsap.registerPlugin(Flip);
      if (!layout.state) return;

      const exiting = layout.items.filter((item) => item.status === 'exiting');
      const timeline = Flip.from(layout.state, {
        absolute: true,
        // ease: 'power4.out',
        targets: q('.box'),
        scale: true,
        onEnter: (elements) => {
          return gsap.fromTo(
            elements,
            { opacity: 1, yPercent: -100, },
            { opacity: 1, yPercent: 0, duration: 2.5, ease: 'bounce.out' }
          );
        },
        onLeave: (elements) => {
          return gsap.to(elements, { opacity: 0, duration: 0.3, ease: 'bounce.out' });
        },
        onComplete() {
          if (boxesRef.current) {
            let boxes = boxesRef.current;
            let lastChild = boxes.lastChild;
            boxes.appendChild(lastChild);
          }
        }
      });

      timeline.add(() => removeItems(exiting));
    },
    {
      dependencies: [layout, q, removeItems]
    }
  );

  const addItem = () => {
    const newItem = createItem();
    setLayout((prev) => ({
      state: Flip.getState(q('.box')),
      items: [...prev.items.slice(1), newItem]  // Remove the first item and add the new one
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (layout.items.length > 0) {
        addItem();  // Trigger addItem which internally handles state update
      }
    }, 5000);

    return () => clearInterval(interval);  // Cleanup the interval on component unmount
  }, [layout.items]);  // Only re-run effect if layout.items changes

  return (
    <div className="bg-gradient-to-b from-[#e7fdd2] from-20% via-[#43e2d8] via-75% to-[#1d8dd8] to-100% w-full h-full lg:h-screen" ref={el}>
        <h1 className="relative flex w-full justify-center items-start font-mouse text-8xl lg:text-[240px] text-gray-800 m-0 leading-none z-50">
            CASHEWS
        </h1>
            <div className="hidden lg:block relative lg:absolute flex-col justify-center items-start bg-[#ffe350] border-y-2 border-black lg:mt-12 font-baloo text-2xl xl:text-4xl text-black text-center w-full h-fit">
                <div className="w-full lg:w-2/5 px-8 lg:pl-10 py-2">
                    <p>
                        3,333 Cashews are here to remind us that the key to success is never giving up.<br />
                        <br />
                        Be a part of Cashew’s rise,<br />
                        <span className="text-2xl xl:text-4xl">OWN</span> her story
                    </p>
                    <button className="outline outline-2 hover:outline-green-600 bg-white hover:bg-[#fff5c1] hover:text-green-600 px-4 py-2 mt-4 text-xl xl:text-3xl rounded-full">Connect Wallet</button>
                </div>
            </div>
            <div className="box">
                <div className="flex justify-center">
                    <div className="absolute w-11/12 md:w-3/4 lg:w-1/2 lg:right-10 h-fit mt-2 border-2 border-black bg-[#eaffea] rounded-lg overflow-hidden z-40">
                        <div className="relative w-full h-full flex flex-wrap" ref={boxesRef}>
                        <img className="object-cover z-0" src='/rockstar.png' />
                        {/* <div className="absolute w-full h-full mt-32 bg-black z-40 opacity-40"></div> */}
                            {layout.items.map((item) => (
                            <div
                                id={`box-${item.id}`}
                                key={item.id}
                                className="box absolute"
                            >
                                <img className="object-cover" src={item.image} alt={`NFT ${item.id}`} />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <img className="object-cover z-0 invisible lg:absolute w-11/12 md:w-3/4 lg:w-1/2" src='/rockstar.png' />
            <div className="lg:hidden relative lg:absolute flex flex-col justify-center items-start bg-[#ffe350] border-y-2 border-black mt-6 lg:mt-12 font-baloo text-2xl xl:text-4xl text-black text-center w-full h-fit">
                <div className="w-full lg:w-2/5 px-8 lg:pl-10 py-2">
                    <p>
                        3,333 Cashews are here to remind us that the key to success is never giving up.<br />
                        <br />
                        Be a part of Cashew’s rise,<br />
                        <span className="text-2xl xl:text-4xl">OWN</span> her story
                    </p>
                    <button className="outline outline-2 hover:outline-green-600 bg-white hover:bg-[#fff5c1] hover:text-green-600 px-4 py-2 mt-4 text-lg xl:text-2xl rounded-full">Connect Wallet</button>
                </div>
            </div>
    </div>
  );
}

export default NFTSection;
