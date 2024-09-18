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

  useGSAP(
    () => {
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
    <div className="bg-[#eaffea] w-full h-full" ref={el}>
        {/* <h1 className="absolute flex w-full justify-center items-start font-mouse text-[240px] text-gray-800 m-0 leading-none z-50">
            CASHEWS
        </h1> */}
        <div className="box">
            <div className="flex justify-center">
              <div className="absolute w-3/4 max-w-[2048px] h-fit mt-10 bg-[#eaffea] overflow-hidden z-30 border-2 border-black rounded-xl">
                  <div className="relative w-full h-full flex flex-wrap" ref={boxesRef}>
                  <img className="object-cover z-0" src='/rockstar.png' />
                  <div className="absolute flex flex-col justify-center items-center px-10 pt-4 lg:px-20 backdrop-brightness-[0.55] font-baloo font-black text-2xl md:text-5xl lg:text-7xl text-[#ffffff] text-center w-full h-full leading-none z-[90]">
                      <p>
                            When life gets ruff,<br />
                            pawsitivity leads the way!
                      </p>
                      {/* <button className="outline outline-4 px-4 py-2 mt-20 text-4xl lg:text-6xl rounded-full">Collect</button> */}
                  </div>
                  {/* <div className="absolute w-full h-full bg-black z-40 opacity-20"></div> */}

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
        <img className="relative object-cover z-0 w-10/12 invisible" src='/zookeeper.png' />
    </div>
  );
}

export default BookPages;
