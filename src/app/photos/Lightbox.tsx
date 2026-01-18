import React, { useEffect, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import css from '@styles/app/photos/lightbox.module.css'
import type { PhotoProps } from '@/types/photo'


type LightboxProps = {
    isOpen: boolean
    photo?: PhotoProps
    onClose: () => void
    onNext: () => void
    onPrev: () => void
    hasNext: boolean
    hasPrev: boolean
    currentIndex?: number
    totalCount?: number
}

const Lightbox: React.FC<LightboxProps> = ({
    isOpen,
    photo,
    onClose,
    onNext,
    onPrev,
    hasNext,
    hasPrev,
    currentIndex = 0,
    totalCount = 1
}) => {
    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return

        if (e.key === 'Escape') {
            onClose()
        } else if (e.key === 'ArrowRight') {
            onNext()
        } else if (e.key === 'ArrowLeft') {
            onPrev()
        }
    }, [isOpen, onClose, onNext, onPrev])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const formatExif = (photo: PhotoProps) => {
        const parts = []
        if (photo.exif?.camera) parts.push(photo.exif.camera)
        if (photo.exif?.focalLength) parts.push(`${photo.exif.focalLength}mm`)
        if (photo.exif?.aperture) parts.push(`f/${photo.exif.aperture}`)
        if (photo.exif?.shutterSpeed) parts.push(`1/${photo.exif.shutterSpeed}s`)
        if (photo.exif?.iso) parts.push(`ISO ${photo.exif.iso}`)
        return parts.join(' • ')
    }

    const content = (
        <AnimatePresence>
            {isOpen && photo && (
                <motion.div
                    className={css.lightbox}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={onClose}
                >
                    <div className={css.lightbox__container}>

                        {/* Actions */}
                        <div className={css.lightbox__controls} onClick={(e) => e.stopPropagation()}>
                            <button
                                className={css.lightbox__close}
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>

                        {/* Navigation - Left */}
                        {hasPrev && (
                            <button
                                className={clsx(css.lightbox__nav, css['lightbox__nav--prev'])}
                                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                                aria-label="Previous image"
                            >
                                <i className="bi bi-arrow-left"></i>
                            </button>
                        )}

                        {/* Image */}
                        <div className={css.lightbox__figure} onClick={(e) => e.stopPropagation()}>
                            <motion.img
                                key={photo.src} // Key change triggers animation
                                src={photo.src}
                                alt={photo.title?.toString() || "Photo"}
                                className={css.lightbox__img}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Navigation - Right */}
                        {hasNext && (
                            <button
                                className={clsx(css.lightbox__nav, css['lightbox__nav--next'])}
                                onClick={(e) => { e.stopPropagation(); onNext(); }}
                                aria-label="Next image"
                            >
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        )}

                        {/* Info Section */}
                        <AnimatePresence>
                            <motion.div
                                className={css.lightbox__info}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {photo.title && <h2 className={css.lightbox__title}>{photo.title}</h2>}
                                {photo.data?.subtitle && <h4 className={css.lightbox__subtitle}>{photo.data.subtitle}</h4>}
                                {photo.data?.caption && <p className={css.lightbox__subtitle} style={{ fontStyle: 'italic', marginTop: '4px' }}>{photo.data.caption}</p>}
                                <div className={css.lightbox__meta}>
                                    {photo.data?.dateTaken && (
                                        <div className={css.lightbox__meta_datetime}><i className="bi bi-calendar-event" />
                                            {photo.data.dateTaken}
                                        </div>
                                    )}
                                    {photo.data?.location && (
                                        <div className={css.lightbox__meta_datetime}><i className="bi bi-pin-map-fill" />{photo.data.location}
                                        </div>
                                    )}
                                    <div className={css.lightbox__meta_exif}>
                                        {formatExif(photo).length > 0 && <i className="bi bi-camera2"></i>}{formatExif(photo)}
                                    </div>
                                    <div className={css.lightbox__meta_counter}>
                                        img {currentIndex + 1} of {totalCount}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Bottom Progress Bar */}
                        <div className={css.lightbox__progress} onClick={(e) => e.stopPropagation()}>
                            {Array.from({ length: totalCount }).map((_, idx) => (
                                <div
                                    key={idx}
                                    className={clsx(
                                        css['lightbox__progress-line'],
                                        idx === currentIndex && css['lightbox__progress-line--active']
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )
            }
        </AnimatePresence >
    )

    if (typeof document === 'undefined') return null;

    return createPortal(content, document.body)
}

export default Lightbox
