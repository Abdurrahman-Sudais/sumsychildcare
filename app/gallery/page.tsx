'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import { 
  Cancel01Icon, 
  Search01Icon as ZoomIn, 
  Image01Icon, 
  Home01Icon, 
  PineTreeIcon, 
  LayerIcon,
  ArrowRight01Icon,
  ArrowLeft01Icon
} from '@hugeicons/core-free-icons'
import AnimateIn from '@/components/AnimateIn'
import Magnetic from '@/components/Magnetic'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=75',
    alt: 'Bright and welcoming classroom space',
    category: 'indoor',
  },
  {
    src: 'https://images.unsplash.com/photo-1573164574230-db1d5e960238?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1573164574230-db1d5e960238?w=400&q=75',
    alt: 'Colourful and stimulating interior',
    category: 'indoor',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=75',
    alt: 'Safe and welcoming entrance',
    category: 'indoor',
  },
  {
    src: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&q=75',
    alt: 'Activity and learning area',
    category: 'indoor',
  },
  {
    src: 'https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?w=400&q=75',
    alt: 'Outdoor play and recreation space',
    category: 'outdoor',
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=75',
    alt: 'Outdoor area and garden',
    category: 'outdoor',
  },
  {
    src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&q=75',
    alt: 'Social and recreation space',
    category: 'indoor',
  },
  {
    src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=75',
    alt: 'Outdoor learning environment',
    category: 'outdoor',
  },
]

const categories = [
  { key: 'all', label: 'All Photos', icon: LayerIcon },
  { key: 'indoor', label: 'Indoor Spaces', icon: Home01Icon },
  { key: 'outdoor', label: 'Outdoor Areas', icon: PineTreeIcon },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))

  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-sc-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 bg-white text-sc-terracotta px-4 py-1.5 rounded-full text-sm font-bold mb-5 border border-sc-navy/10 shadow-sm">
              <HugeiconsIcon icon={Image01Icon} className="w-4 h-4" />
              Facility Gallery
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-sc-navy mb-6 tracking-tight">
              Our Facility in <span className="text-sc-terracotta">Eltham</span>
            </h1>
            <p className="text-xl text-sc-steel max-w-2xl mx-auto leading-relaxed">
              A safe, bright, and stimulating environment — purpose-designed for
              children aged 6–16 to feel comfortable, engaged, and happy.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" delay={0.2} className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((cat) => (
              <Magnetic key={cat.key}>
                <button
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border-[1.5px] ${
                    activeCategory === cat.key
                      ? 'bg-sc-navy text-white border-sc-navy shadow-md'
                      : 'bg-transparent text-sc-navy border-sc-navy/20 hover:border-sc-terracotta hover:text-sc-terracotta'
                  }`}
                >
                  <HugeiconsIcon icon={cat.icon} className="w-4 h-4" />
                  {cat.label}
                </button>
              </Magnetic>
            ))}
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((img, index) => (
              <AnimateIn 
                key={img.src + index} 
                direction="up" 
                delay={index * 0.05}
                className="group relative aspect-square rounded-[32px] overflow-hidden cursor-pointer bg-sc-cream shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={img.thumb}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-sc-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                    <HugeiconsIcon icon={ZoomIn} className="w-6 h-6 text-sc-navy" />
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <AnimateIn direction="up" className="text-center py-20 text-sc-steel/40">
              <HugeiconsIcon icon={Image01Icon} className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg">No photos in this category yet.</p>
            </AnimateIn>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-sc-navy/95 backdrop-blur-md flex items-center justify-center p-4 transition-all"
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close lightbox">
            <HugeiconsIcon icon={Cancel01Icon} className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors z-10"
            aria-label="Previous image">
            ‹
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors z-10"
            aria-label="Next image">
            ›
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={1000}
              height={800}
              className="rounded-3xl object-contain max-h-[80vh] w-full shadow-2xl"
              priority
            />
            <div className="text-center mt-6">
              <p className="text-white text-lg">
                {filtered[lightboxIndex].alt}
              </p>
              <p className="text-sc-terracotta text-sm mt-1 font-bold">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
