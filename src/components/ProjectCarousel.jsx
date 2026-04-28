import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function ProjectCarousel({ images, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })


  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])



  return (
    <div 
      className="relative group overflow-hidden bg-gray-50 border border-gray-100"
      style={{ isolation: 'isolate' }}
    >
      {/* Embla Viewport */}
      <div 
        ref={emblaRef} 
        style={{ overflow: 'hidden', width: '100%' }}
      >
        {/* Embla Container */}
        <div 
          style={{ display: 'flex', touchAction: 'pan-y', width: '100%' }}
        >
          {images && images.map((image, index) => (
            /* Embla Slide */
            <div 
              key={index}
              style={{ 
                flex: '0 0 100%', 
                minWidth: '100%', 
                maxWidth: '100%',
                position: 'relative',
              }}
            >
              <img
                src={image}
                alt={`Image ${index + 1} of ${title}`}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400?text=Image+Not+Found';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Invisible Click Overlay to trigger next slide */}
      <div 
        className="absolute inset-0 z-10 cursor-pointer" 
        onClick={scrollNext}
      />


    </div>
  )
}
