import { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { GalleryImage } from './GalleryTabs'
import { LightboxButton } from '../../components/ui/LightboxButton'
import { LightboxCloseButton } from '../../components/ui/LightboxCloseButton'

type Props = {
  images: GalleryImage[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ images, initialIndex, onClose }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: initialIndex })

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div onClick={onClose} className='fixed inset-0 z-50 flex items-center justify-center bg-brand-black/90 p-4'>
      <div onClick={e => e.stopPropagation()} className='relative w-full max-w-4xl'>
        
        {/* Close button */}
        <LightboxCloseButton onClose={onClose} />

        {/* Carousel */}
        <div className='relative'>
          <div ref={emblaRef} className='overflow-hidden'>
            <div className='flex'>
              {images.map((img, i) => {
                if (!img?.src) return null

                return (
                  <div key={i} className='min-w-0 flex-[0_0_100%]'>
                    <img
                      src={img.src}
                      alt={img.alt || 'Zdjęcie z galerii'}
                      className='mx-auto max-h-[80vh] w-full object-contain'
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* LightboxButton */}
          <LightboxButton text='‹' onClick={prev} ariaLabel='Poprzednie' className='left-2' />
          <LightboxButton text='›' onClick={next} ariaLabel='Następne' className='right-2' />
        </div>
      </div>
    </div>
  )
}
