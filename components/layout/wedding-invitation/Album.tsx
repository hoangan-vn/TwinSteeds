'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib';

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

interface AlbumProps {
  mainImageWidth?: string;
  thumbnailsWidth?: string;
  className?: string;
}

// Loading Skeleton Component
function AlbumSkeleton({ mainImageWidth }: AlbumProps) {
  return (
    <div className='w-full flex flex-col items-center'>
      {/* Main image skeleton */}
      <div
        className={cn(
          'relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg bg-gray-200 border-2 border-gray-300',
          mainImageWidth || 'max-w-xl'
        )}
      >
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='animate-pulse bg-gray-300 w-full h-full rounded-lg'></div>
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
        </div>
      </div>

      {/* Thumbnails skeleton */}
      <div className='flex gap-2 mt-4 overflow-x-auto max-w-2xl w-full pb-2'>
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx} className='w-20 h-16 flex-shrink-0 rounded-md bg-gray-200 animate-pulse'></div>
        ))}
      </div>
    </div>
  );
}

export function Album({ mainImageWidth, thumbnailsWidth, className }: AlbumProps) {
  const [current, setCurrent] = useState(0);
  const [prevCurrent, setPrevCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
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

  // Handle image load
  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));

    // If current image is loaded, stop loading
    if (index === current) {
      setIsLoading(false);
    }
  };

  // Preload next and previous images
  useEffect(() => {
    const preloadImages = [current];
    if (current > 0) preloadImages.push(current - 1);
    if (current < images.length - 1) preloadImages.push(current + 1);

    preloadImages.forEach((index) => {
      if (!loadedImages.has(index)) {
        const img = new window.Image();
        img.onload = () => handleImageLoad(index);
        img.src = images[index];
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, loadedImages]);

  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Show skeleton while loading
  if (isLoading) {
    return <AlbumSkeleton mainImageWidth={mainImageWidth} thumbnailsWidth={thumbnailsWidth} />;
  }

  return (
    <div className={cn('w-full flex flex-col items-center', className)}>
      {/* Main image */}
      <div
        className={cn(
          'relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg bg-white border-2 border-gray-200',
          mainImageWidth || 'max-w-xl'
        )}
      >
        <button
          className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 hover:bg-white transition-colors shadow-md'
          onClick={prev}
          aria-label='Previous'
        >
          <span className='text-2xl'>&#8592;</span>
        </button>

        <div className='relative w-full h-full'>
          <Image
            src={images[current]}
            alt={`Album image ${current + 1}`}
            width={300}
            height={500}
            className='object-contain w-full h-full transition-all duration-300'
            priority
            onLoad={() => handleImageLoad(current)}
          />
          {/* Loading overlay for current image */}
          {!loadedImages.has(current) && (
            <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
            </div>
          )}
        </div>

        <button
          className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 hover:bg-white transition-colors shadow-md'
          onClick={next}
          aria-label='Next'
        >
          <span className='text-2xl'>&#8594;</span>
        </button>
      </div>

      {/* Thumbnails */}
      <div className='flex gap-2 mt-4 overflow-x-auto max-w-2xl w-full pb-2' ref={thumbContainerRef}>
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setCurrent(idx)}
            className={`border-2 rounded-md overflow-hidden w-20 h-16 flex-shrink-0 transition-all hover:scale-105 relative ${
              current === idx ? 'border-primary shadow-md' : 'border-transparent hover:border-gray-300'
            }`}
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
              onLoad={() => handleImageLoad(idx)}
            />
            {/* Loading overlay for thumbnails */}
            {!loadedImages.has(idx) && (
              <div className='absolute inset-0 flex items-center justify-center bg-gray-200'>
                <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-primary'></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Album;
