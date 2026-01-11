/* Home 
 * / page to show intro and key highlights. site landing page
 */


// packages 
import clsx from 'clsx'

// components, styles & data
import { Hyperlink, Spacer, AnimateFadeIn } from '@components'
import css from '@styles/app/home.module.css'
import PhotoCard from '@app/photos/PhotoCard'
import PhotoGallery from '@app/photos/PhotoGallery'
import PhotoGrid from '@app/photos/PhotoGrid'

// render
export default function HomePage() {

    return (
        <AnimateFadeIn ReactDOMElement={
            <div>
                <PhotoGallery
                    title={'Andrew Cui'}
                    photoGrids={[]}
                    homePage />
                <h1>Hi</h1><Spacer size="xl" />
                <h1>Hi</h1><Spacer size="xl" />
                <h1>Hi</h1><Spacer size="xl" />
                <h1>Hi</h1><Spacer size="xl" />
                <h1>Hi</h1><Spacer size="xl" />
                <h1>Hi</h1><Spacer size="xl" />
                <h1>Hi</h1><Spacer size="xl" />
                <h1>Hi</h1><Spacer size="xl" />
                <h1>Hi</h1>
            </div>
        } />
    )
}