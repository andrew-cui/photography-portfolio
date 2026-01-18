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
    imageOnly?: boolean;
    homePage?: boolean;
    onClick?: () => void;
}

// render
const PhotoCard: React.FC<PhotoCardProps> = ({
    photo,
    variant = '',
    external = false,
    homePage = false,
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
                {homePage && photo.data?.category && (
                    <div className={css.photoCard__overlay_chip}>
                        {photo.data.category}
                    </div>
                )}
                {!homePage && <h4 className={clsx(css.photoCard__overlay_subtitle)}>{photo.data?.subtitle}</h4>}
                <h2 className={clsx(css.photoCard__overlay_title)}>{photo.title}</h2>
                {!homePage && <div className={css.photoCard__overlay_caption}>
                    {photo.data?.caption}
                </div>}
                <div className={css.photoCard__overlay_datetime}>
                    {photo.data?.dateTaken &&
                        <span><i className="bi bi-calendar-event" /> {photo.data.dateTaken}</span>}
                    {!homePage && photo.data?.location && <span><i className="bi bi-pin-map-fill" /> {photo.data?.location}</span>}
                </div>
            </div>
        </div >
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