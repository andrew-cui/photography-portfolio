/* Home 
 * / page to show intro and key highlights. site landing page
 */


// packages 
import clsx from 'clsx'

// components, styles & data
import { Hyperlink, Spacer, AnimateFadeIn } from '@components'
import css from '@styles/app/home.module.css'
import PhotoCard from '@app/photos/PhotoCard'

// render
export default function HomePage () {    

    return (
        <>
        <AnimateFadeIn ReactDOMElement={
            <div className={clsx('app', css.homePage)} id="homePage">
                <PhotoCard 
                    src={"morainelake.avif"}
                />
                <PhotoCard 
                    src={"morainelake.avif"}
                />
                <PhotoCard 
                    src={"morainelake.avif"}
                />
                <PhotoCard 
                    src={"morainelake.avif"}
                />
            </div>
        }/>
        </>
    )
}