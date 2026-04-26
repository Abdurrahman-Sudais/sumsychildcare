'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn, ImageIcon, Home, TreePine, Layers } from 'lucide-react'

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
  { key: 'all', label: 'All Photos', icon: ImageIcon },
  { key: 'indoor', label: 'Indoor Spaces', icon: Home },
  { key: 'outdoor', label: 'Outdoor Areas', icon: TreePine },
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
      <section className="hero-pattern pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#6DD5A3]/15 text-[#2D6A4F] px-4 py-1.5 rounded-full text-sm font-bold mb-5"
            style={{ fontFamily: 'Nunito, sans-serif' }}>
            <ImageIcon className="w-4 h-4" />
            Facility Gallery
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D4A8A] mb-5"
            style={{ fontFamily: 'Nunito, sans-serif' }}>
            Our Facility in Eltham
          </h1>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Quicksand, sans-serif' }}>
            A safe, bright, and stimulating environment — purpose-designed for
            children aged 5–16 to feel comfortable, engaged, and happy.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                  activeCategory === key
                    ? 'bg-[#4AB8E8] text-white shadow-md shadow-sky-200'
                    : 'bg-gray-100 text-[#6B7280] hover:bg-sky-50 hover:text-[#4AB8E8]'
                }`}
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img, index) => (
              <div
                key={img.src + index}
                className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={img.thumb}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#2D4A8A]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#9CA3AF]">
              <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p style={{ fontFamily: 'Quicksand, sans-serif' }}>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox}
            className="absolute top-4 right-4 w-11 h-11 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close lightbox">
            <X className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors z-10"
            aria-label="Previous image">
            ‹
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors z-10"
            aria-label="Next image">
            ›
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={800}
              height={600}
              className="rounded-2xl object-contain max-h-[80vh] w-full shadow-2xl"
              priority
            />
            <div className="text-center mt-4">
              <p className="text-white/80 text-sm" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                {filtered[lightboxIndex].alt}
              </p>
              <p className="text-white/50 text-xs mt-1" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
