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


// render
const PhotoGrid: React.FC<PhotoGridProps> = ({
    title = '',
    subtitle = '',
    photoData = [],
    spacer = 'm' as SpacerSize
}) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        console.log(index)
        console.log(photoData[index].title)
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return (
        <AnimateFadeIn
            ReactDOMElement={<div className={css.photoGrid}>
                <div className={css.photoGridTitle}>
                    <h2>{title}</h2>
                    <h5>{subtitle}</h5>
                </div>
                {photoData.map((photo, index) => {
                    return (
                        <PhotoCard
                            key={index}
                            photo={photo}
                            onClick={() => openLightbox(index)}
                        />
                    )
                })}
                <Spacer size={spacer} />
            </div>
            } />
    )
}

export default PhotoGrid