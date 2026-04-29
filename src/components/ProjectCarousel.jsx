import React, { useCallback, useRef, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const VideoSlide = ({ src, onLoadedData, title, index }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.4 } // Plays when 40% of the video is visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      onLoadedData={onLoadedData}
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
        userSelect: 'none',
        pointerEvents: 'none'
      }}
    />
  );
};

export function ProjectCarousel({ images, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30, // Slightly slower transition for smoothness
  })

  // Manual height synchronization
  useEffect(() => {
    if (!emblaApi) return;

    const updateHeight = () => {
      const container = emblaApi.containerNode();
      const slides = emblaApi.slideNodes();
      const index = emblaApi.selectedScrollSnap();
      const activeSlide = slides[index];

      if (activeSlide) {
        // Measure the natural height of the content inside the slide
        const height = activeSlide.scrollHeight;
        if (height > 0) {
          emblaApi.rootNode().style.height = `${height}px`;
        }
      }
    };

    // Update on selection (starts as soon as transition begins)
    emblaApi.on('select', updateHeight);
    // Update when images load or carousel re-initializes
    emblaApi.on('reInit', updateHeight);
    
    // Initial sync
    setTimeout(updateHeight, 50);

    return () => {
      emblaApi.off('select', updateHeight);
      emblaApi.off('reInit', updateHeight);
    };
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onImageLoad = useCallback(() => {
    if (emblaApi) emblaApi.reInit()
  }, [emblaApi])

  return (
    <div
      className="relative group overflow-hidden bg-white border border-gray-100"
      style={{ isolation: 'isolate' }}
    >
      {/* Embla Viewport */}
      <div
        ref={emblaRef}
        style={{ 
          overflow: 'hidden', 
          width: '100%',
          transition: 'height 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'height'
        }}
      >
        {/* Embla Container */}
        <div
          style={{ 
            display: 'flex', 
            touchAction: 'pan-y', 
            width: '100%', 
            alignItems: 'flex-start'
          }}
        >
          {images && images.map((src, index) => {
            const isVideo = src.toLowerCase().endsWith('.mp4');
            return (
              /* Embla Slide */
              <div
                key={index}
                style={{
                  flex: '0 0 100%',
                  minWidth: '100%',
                  maxWidth: '100%',
                  position: 'relative',
                  height: 'auto'
                }}
              >
                {isVideo ? (
                  <VideoSlide 
                    src={src} 
                    onLoadedData={onImageLoad} 
                    title={title} 
                    index={index} 
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Media ${index + 1} of ${title}`}
                    onLoad={onImageLoad}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      userSelect: 'none',
                      pointerEvents: 'none'
                    }}
                    loading="eager" // Load immediately to help height calculation
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/600x400?text=Image+Not+Found';
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Invisible Click Overlay to trigger next slide */}
      <div
        className="absolute inset-0 z-10 cursor-pointer carousel-target"
        onClick={scrollNext}
      />


    </div>
  )
}
