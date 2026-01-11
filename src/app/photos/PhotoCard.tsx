/* PhotoCard
 * UI component to show an individual photograph with various styling
 */


// packages 
import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

// components, styles & data
import css from '@styles/app/photos/photocard.module.css'
import type { PhotoProps } from '@/types/photo'

interface PhotoCardProps {
    photo: PhotoProps;
    variant?: string;
    external?: boolean;
    imageOnly?: boolean
    onClick?: () => void;
}

// render
const PhotoCard: React.FC<PhotoCardProps> = ({
    photo,
    variant = 'hi',
    external = false,
    onClick
}) => {
    return (
        <div className={clsx(
            css.photoCard
        )}
            onClick={onClick}>
            <div className={clsx(css.photoCard__img)}>
                <img src={photo.src}
                    loading="lazy"
                    className={clsx(
                        css['photoCard__img--v'],
                        variant && css[`photoCard__img--${variant}`],
                        // photo.aspect === 'h' && css['photoCard__img--h'],
                    )} />
            </div>
            <div className={clsx(css.photoCard__overlay)}>
                <h4 className={clsx(css.photoCard__overlay_subtitle)}>{photo.data?.subtitle}</h4>
                <h2 className={clsx(css.photoCard__overlay_title)}>{photo.title}</h2>
                <div className={css.photoCard__overlay_caption}>
                    {photo.data?.caption && <p className={css.photoCard__overlay_caption_primary}>{photo.data?.caption}</p>}
                    {photo.exif?.camera && <p className={css.photoCard__overlay_caption_secondary}>{photo.exif?.camera} • {photo.exif?.focalLength}mm</p>}
                    {photo.data?.dateTaken && <p className={css.photoCard__overlay_caption_secondary}>{
                        photo.data?.dateTaken.toLocaleDateString(
                            'en-US', { month: 'short', day: 'numeric', year: 'numeric' }
                        )}</p>}
                </div>
            </div>
        </div>
    )
}

export default PhotoCard
// src,
//     href = undefined,
//     title = '',
//     data = {},
//     exif = {},
//     aspect = 'v',
//     external = false,
//     order,
//     variant