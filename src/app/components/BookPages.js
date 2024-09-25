'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';

const wrapImages = gsap.utils.wrap(['/zookeeper.png', '/firefighter.png', '/prowrestler.png', '/rockstar.png']);

function BookPages() {
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

  useGSAP((context) => {
      gsap.registerPlugin(Flip);

      if (!layout.state) return;

      const exiting = layout.items.filter((item) => item.status === 'exiting');
      const timeline = Flip.from(layout.state, {
        absolute: true,
        targets: q('.box'),
        scale: true,
        onEnter: (elements) => {
          return gsap.fromTo(
            elements,
            { opacity: 1, yPercent: -100, },
            { opacity: 1, yPercent: 0, duration: 4.5, ease: 'power1.out' }
          );
        },
        onLeave: (elements) => {
          return gsap.to(elements, { opacity: 0, duration: 0.3, ease: 'power1.out' });
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
    }, 9000);

    return () => clearInterval(interval);  // Cleanup the interval on component unmount
  }, [layout.items]);  // Only re-run effect if layout.items changes

  return (
    <div className="bg-gradient-to-br from-[#ffff00e9] from-0% via-[#8aff88c4] to-[#c57819] to-100% w-full h-full" ref={el}>
        {/* <h1 className="absolute flex w-full justify-center items-start font-mouse text-[240px] text-gray-800 m-0 leading-none z-50">
            CASHEWS
        </h1> */}
        <div className="box">
            <div className="flex justify-center">
              <div className="absolute w-[95%] md:w-3/4 max-w-[2048px] h-fit my-4 sm:mt-4 xl:mt-6 2xl:mt-8 bg-cyan-300 z-30 border-none sm:border-[8px] md:border-[16px] border-cyan-300 rounded-xl overflow-hidden shadow-[0_0px_25px_-3px_rgba(0,0,0,0.4)]">
                  <div className="relative w-full h-full flex flex-wrap" ref={boxesRef}>
                  <img className="object-cover z-0 invisible" src='/rockstar.png' />
                  <div className="absolute flex w-full h-full leading-none z-[90] border-2 border-gray-700 rounded-xl overflow-hidden">
                      {/* <p>
                            When life gets ruff,<br />
                            pawsitivity leads the way!
                      </p> */}
                      {/* <button className="outline outline-4 px-4 py-2 mt-20 text-4xl lg:text-6xl rounded-full">Collect</button> */}
                  
                  {/* <div className="absolute w-full h-full bg-black z-40 opacity-20"></div> */}

                          {layout.items.map((item) => (
                          <div
                              id={`box-${item.id}`}
                              key={item.id}
                              className="box absolute"
                          >
                              <img className="object-cover rounded-xl overflow-hidden" src={item.image} alt={`NFT ${item.id}`} />
                          </div>
                          ))}
                  </div>
                  </div>

              </div>
            </div>
        </div>
        <img className="relative object-cover z-0 w-[95%] py-4 xl:py-6 2xl:py-8 md:w-3/4 invisible" src='/zookeeper.png' />
    </div>
  );
}

export default BookPages;
