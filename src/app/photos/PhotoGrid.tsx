/* PhotoGrid
 * UI component to show multiple PhotoCard together. Can be combined into a main page or PhotoGallery
 */


// packages 
import React, { useState } from 'react'
import clsx from 'clsx'

// components, styles & data
import css from '@styles/app/photos/photogrid.module.css'
import { Hyperlink, Spacer, AnimateFadeIn, IconButton, type SpacerSize } from '@components'
import type { PhotoGridProps } from '@/types/photogrid'
import PhotoCard from '@app/photos/PhotoCard'
import Lightbox from '@app/photos/Lightbox'
import { useNavigate } from 'react-router-dom'

// render
const PhotoGrid: React.FC<PhotoGridProps> = ({
    title = '',
    subtitle = '',
    photoData = [],
    spacer = 'm' as SpacerSize,
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
                ReactDOMElement={<div className={clsx(css.photoGrid, collapsible && css['photoGrid--collapsible'])}>
                    <div className={clsx(css.photoGridTitle, collapsible && css['photoGridTitle--collapsible'])} onClick={toggleCollapse}>
                        <h2>{title}</h2>
                        {collapsible && (
                            <div className={clsx(css.photoGridTitle__icon, isCollapsed && css['photoGridTitle__icon--collapsed'])}>
                                <i className="bi bi-chevron-down"></i>
                            </div>
                        )}
                        {subtitle && <h5 className={css.photoGridTitle__subtitle}>{subtitle}</h5>}
                    </div>
                    {!isCollapsed && (
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
                    )}
                    <Spacer size={spacer} />
                </div>
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