import React, { useState, useCallback, useEffect } from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay
} from './EmblaCarouselSelectedSnapDisplay'
import useEmblaCarousel from 'embla-carousel-react'
import LazyImage from '../LazyImage'

const getPhotographerForSlide = (photographers, index) => {
  if (photographers == null) return ''
  if (typeof photographers === 'string') return photographers
  if (Array.isArray(photographers)) return photographers[index] ?? photographers[0] ?? ''
  return ''
}

const EmblaCarousel = (props) => {
  const { slides, options, photographers } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = useCallback((index) => {
    if (typeof slides[index] === 'string') {
      setLightboxIndex(index)
      setLightboxOpen(true)
    }
  }, [slides])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    setLightboxIndex(null)
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    if (lightboxOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen, closeLightbox])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  const lightboxSrc = lightboxIndex != null && typeof slides[lightboxIndex] === 'string' ? slides[lightboxIndex] : null
  const lightboxPhotographer = lightboxIndex != null ? getPhotographerForSlide(photographers, lightboxIndex) : ''

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {typeof slide === 'string' ? (
                <button
                  type="button"
                  className="embla__slide__img-wrap"
                  onClick={() => openLightbox(index)}
                  aria-label={`View image ${index + 1} full size`}
                >
                  <LazyImage
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="embla__slide__img"
                    loadedClassName="embla__slide__img--loaded"
                  />
                </button>
              ) : (
                <div className="embla__slide__number">{index + 1}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>

      {lightboxOpen && lightboxSrc && (
        <div
          className="embla__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div
            className="embla__lightbox__backdrop"
            onClick={closeLightbox}
            onKeyDown={(e) => e.key === 'Enter' && closeLightbox()}
            role="button"
            tabIndex={0}
            aria-label="Close lightbox"
          />
          <div className="embla__lightbox__content">
            <button
              type="button"
              className="embla__lightbox__close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>
            <img
              src={lightboxSrc}
              alt={`Slide ${(lightboxIndex ?? 0) + 1}`}
              className="embla__lightbox__img"
              onClick={(e) => e.stopPropagation()}
            />
            {lightboxPhotographer && (
              <p className="embla__lightbox__photographer">
                {lightboxPhotographer}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default EmblaCarousel
