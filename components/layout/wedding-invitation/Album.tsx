'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  '/images/1Q8A0036.jpg',
  '/images/1Q8A9563.jpg',
  '/images/1Q8A0036.jpg',
  '/images/1Q8A9563.jpg',
  '/images/1Q8A0036.jpg',
  '/images/1Q8A9563.jpg',
  '/images/1Q8A0036.jpg',
  '/images/1Q8A9563.jpg'
];

export function Album() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='relative w-full max-w-xl aspect-[3/4] flex items-center justify-center overflow-hidden rounded-lg shadow-lg bg-white'>
        <button
          className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white'
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
          className='object-cover w-full h-full transition-all duration-300'
        />
        <button
          className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white'
          onClick={next}
          aria-label='Next'
        >
          <span className='text-2xl'>&#8594;</span>
        </button>
      </div>
      <div className='flex gap-2 mt-4 overflow-x-auto max-w-xl w-full justify-center'>
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setCurrent(idx)}
            className={`border-2 rounded-md overflow-hidden w-20 h-16 flex-shrink-0 transition-all ${current === idx ? 'border-primary' : 'border-transparent'}`}
            aria-label={`Show image ${idx + 1}`}
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
