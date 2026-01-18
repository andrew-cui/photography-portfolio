/* PhotoGallery 
 * Secondary standalone pages for showing photo galleries. Uses PhotoGrid objects.
 */


// packages 
import clsx from 'clsx'

// components, styles & data
import css from '@styles/app/photos/photogallery.module.css'
import PhotoCard from '@app/photos/PhotoCard'
import PhotoGrid from '@app/photos/PhotoGrid'
import { Hyperlink, Spacer, AnimateFadeIn, IconButton } from '@components'

import type { PhotoProps } from '@/types/photo'
import type { PhotoGridProps } from '@/types/photogrid'



type PhotoGalleryProps = {
    photoGrids: PhotoProps[] | PhotoGridProps[],
    title: string;
    subtitle?: string;
    date?: string;
    navigation?: boolean;           // true = this is used for navigation; false = this is used just for display
    homePage?: boolean;             // add extra spacing for home page
    category?: 'travel' | 'portraits' | 'events' | 'running' | 'other' | undefined;
    tags?: string[];
}

function isPhotoGrid(item: PhotoProps | PhotoGridProps): item is PhotoGridProps {
    return 'photoData' in item
}

// render
export default function PhotoGallery({
    photoGrids = [],
    title = '',
    subtitle = '',
    date = '',
    navigation = false,
    homePage = false,
    tags = []
}: PhotoGalleryProps) {
    const hasMultipleGrids = photoGrids.length > 0 && isPhotoGrid(photoGrids[0])

    return (
        <div className={clsx('app',
            homePage ? 'app--homepage' : '', css.photoGallery)}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h4>{date}</h4>
            {tags.filter(t => !!t).length > 0 && <div className={css.photoGallery_tags}>
                {tags.filter(t => !!t).map((tag, index) => {
                    return (
                        <IconButton
                            key={index}
                            label={tag} />
                    )
                })}
            </div>}
            {!homePage && <Spacer size='m' />}
            {hasMultipleGrids ? (
                (photoGrids as PhotoGridProps[]).map((item, index) => (
                    <PhotoGrid
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        photoData={item.photoData}
                        homePage={homePage}
                        navigation />
                ))
            ) : (
                <PhotoGrid
                    photoData={photoGrids as PhotoProps[]}
                    homePage={homePage}
                    navigation />
            )}
        </div>
    )
}