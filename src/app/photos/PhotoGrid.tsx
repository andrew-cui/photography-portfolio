/* PhotoGrid
 * UI component to show multiple PhotoCard together. Can be combined into a main page or PhotoGallery
 */


import React, { useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// components, styles & data
import css from '@styles/app/photos/photogrid.module.css'
import { Spacer, AnimateFadeIn, type SpacerSize } from '@components'
import type { PhotoGridProps } from '@/types/photogrid'
import PhotoCard from '@app/photos/PhotoCard'
import Lightbox from '@app/photos/Lightbox'

// render
const PhotoGrid: React.FC<PhotoGridProps> = ({
    title = '',
    icon = null,
    subtitle = '',
    photoData = [],
    spacer = 's' as SpacerSize,
    navigation = false,
    homePage = false,
    collapsible = false
}) => {
    const navigate = useNavigate()
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % photoData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + photoData.length) % photoData.length);
    };

    const toggleCollapse = () => {
        if (collapsible) {
            setIsCollapsed(!isCollapsed);
        }
    };

    return (
        <>
            <AnimateFadeIn
                ReactDOMElement={<section className={clsx(css.photoGrid, collapsible && css['photoGrid--collapsible'])}>
                    <div className={clsx(css.photoGridTitle, collapsible && css['photoGridTitle--collapsible'])} onClick={toggleCollapse}>
                        <div className={css.photoGridTitle__header}>
                            {icon && <div style={{ opacity: 0.5, display: 'flex', alignItems: 'center', height: '100%' }}>{icon}</div>}
                            <h2>{title}</h2>
                            {collapsible && (
                                <div className={clsx(css.photoGridTitle__icon, !isCollapsed && css['photoGridTitle__icon--open'])}>
                                    <i className="bi bi-chevron-down"></i>
                                </div>
                            )}
                        </div>
                        {subtitle && (<div className={css.photoGridTitle__subtitle_container}><i className="bi bi-calendar-event" /><h5 className={css.photoGridTitle__subtitle}>{subtitle}</h5></div>)}
                    </div>
                    <AnimatePresence initial={false}>
                        {!isCollapsed && (
                            <motion.div
                                initial={{ height: 0, opacity: 0, y: -10, overflow: 'hidden' }}
                                animate={{ height: 'auto', opacity: 1, y: 0 }}
                                exit={{ height: 0, opacity: 0, y: -10 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className={css.photoGrid__content}>
                                    {photoData.map((photo, index) => {
                                        return (
                                            <PhotoCard
                                                key={index}
                                                photo={photo}
                                                homePage={homePage}
                                                onClick={navigation && photo.href
                                                    ? () => navigate(photo.href!)
                                                    : () => openLightbox(index)}
                                            />
                                        )
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <Spacer size={spacer} />
                </section>
                } />
            <Lightbox
                isOpen={lightboxOpen}
                photo={photoData[currentIndex]}
                onClose={() => setLightboxOpen(false)}
                onNext={handleNext}
                onPrev={handlePrev}
                hasNext={photoData.length > 1}
                hasPrev={photoData.length > 1}
                currentIndex={currentIndex}
                totalCount={photoData.length}
            />
        </>
    )
}

export default PhotoGrid
