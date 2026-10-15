import type { GalleryImage } from './GalleryTabs'

type Props = {
  images: GalleryImage[]
  onImageClick: (index: number) => void
}

export function GalleryGrid({ images, onImageClick }: Props) {
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4'>
      {images.map((img, i) => {
        if (!img?.src) return null

        return (
          <div
            key={i}
            onClick={() => onImageClick(i)}
            className='group relative cursor-pointer overflow-hidden bg-neutral-100'
          >
            <div className='relative h-[240px] w-full'>
              <img
                src={img.src}
                alt={img.alt || 'Zdjęcie'}
                loading='lazy'
                decoding='async'
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
