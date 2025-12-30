/* Home 
 * / page to show intro and key highlights. site landing page
 */


// packages 
import clsx from 'clsx'

// components, styles & data
import css from '@styles/app/photocard.module.css'
import type { PhotoProps } from '@/types/photo'

// render
export default function PhotoCard ({
    src
} : PhotoProps) {
    return (
        <div className={clsx(
            css.photoCard
        )}>
            <img src={src}></img>
            <h4>Moraine Lake</h4>
        </div>
    )
}