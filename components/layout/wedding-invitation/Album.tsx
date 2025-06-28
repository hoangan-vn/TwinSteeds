'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const images = [
  '/images/slides/1Q8A9144A.jpg',
  '/images/slides/_KAS6258e.jpg',
  '/images/slides/1Q8A9126.jpg',
  '/images/slides/1Q8A9463.jpg',
  '/images/slides/1Q8A9254.jpg',
  '/images/slides/1Q8A9775.jpg',
  '/images/slides/_KAS6916e.jpg',
  '/images/slides/1Q8A9999.jpg',
  '/images/slides/1Q8A9099.jpg',
  '/images/slides/_KAS6910e.jpg',
  '/images/slides/_KAS6951e.jpg',
  '/images/slides/1Q8A9225.jpg',
  '/images/slides/1Q8A9735.jpg',
  '/images/slides/_KAS6665e.jpg',
  '/images/slides/_KAS6901e.jpg',
  '/images/slides/1Q8A9255.jpg'
];

export function Album() {
  const [current, setCurrent] = useState(0);
  const [prevCurrent, setPrevCurrent] = useState(0);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const thumbContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (current > 0 && current < images.length - 1) {
      const ref = thumbRefs.current[current];
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
    setPrevCurrent(current);
  }, [current]);

  useEffect(() => {
    if (current === 0 && prevCurrent === images.length - 1 && thumbContainerRef.current) {
      thumbContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, prevCurrent, images.length]);

  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className='w-full flex flex-col items-center'>
      {/* thumnail */}
      <div className='relative w-full max-w-xl h-[500px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg bg-white border-2 border-gray-200'>
        <button
          className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 hover:bg-white transition-colors shadow-md'
          onClick={prev}
          aria-label='Previous'
        >
          <span className='text-2xl'>&#8592;</span>
        </button>
        <Image
          src={images[current]}
          alt={`Album image ${current + 1}`}
          width={300}
          height={500}
          className='object-contain w-full h-full transition-all duration-300'
          priority
        />
        <button
          className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 hover:bg-white transition-colors shadow-md'
          onClick={next}
          aria-label='Next'
        >
          <span className='text-2xl'>&#8594;</span>
        </button>
      </div>
      {/* view */}
      <div className='flex gap-2 mt-4 overflow-x-auto max-w-xl w-full pb-2' ref={thumbContainerRef}>
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setCurrent(idx)}
            className={`border-2 rounded-md overflow-hidden w-20 h-16 flex-shrink-0 transition-all hover:scale-105 ${current === idx ? 'border-primary shadow-md' : 'border-transparent hover:border-gray-300'}`}
            aria-label={`Show image ${idx + 1}`}
            ref={(el) => {
              thumbRefs.current[idx] = el;
            }}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              width={50}
              height={50}
              className='object-cover w-full h-full'
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Album;
