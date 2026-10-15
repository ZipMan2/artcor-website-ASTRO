import { useState } from 'react'
import { cn } from '../../lib/cn'
import { GalleryGrid } from './GalleryGrid'
import { Lightbox } from './Lightbox'

export type GalleryImage = { src: string; alt: string }
export type Category = { id: string; label: string; images: GalleryImage[] }

type Props = { categories: Category[] }

export function GalleryTabs({ categories }: Props) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id ?? '')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const current = categories.find(c => c.id === activeTab)
  const images = current?.images ?? []

  return (
    <div className='w-full'>
      {/* Select buttons */}
      <div className='mb-10 flex flex-wrap items-center justify-center gap-4'>
        {categories.map(cat => (
          <button
            key={cat.id}
            type='button'
            onClick={() => setActiveTab(cat.id)}
            className={cn(
              'cursor-pointer px-6 py-3 text-sm font-medium uppercase tracking-widest transition',
              activeTab === cat.id
                ? 'bg-brand-beige text-brand-black'
                : 'border border-brand-black/20 text-brand-black hover:border-brand-black',
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <GalleryGrid images={images} onImageClick={index => setLightboxIndex(index)} />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox images={images} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </div>
  )
}
