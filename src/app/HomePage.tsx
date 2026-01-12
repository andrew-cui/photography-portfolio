/* Home 
 * / page to show intro and key highlights. site landing page
 */


// packages 
import clsx from 'clsx'

// components, styles & data
import { Hyperlink, Spacer, AnimateFadeIn } from '@components'
import css from '@styles/app/home.module.css'
import PhotoGallery from '@app/photos/PhotoGallery'
import home from '@data/functions/json/_home'

// render
export default function HomePage() {
    return (
        <AnimateFadeIn ReactDOMElement={
            <PhotoGallery
                title={undefined}
                photoGrids={home.photos}
                homePage
                navigation />
        } />
    )
}