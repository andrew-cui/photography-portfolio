/* Home 
 * / page to show intro and key highlights. site landing page
 */


import { useState, useEffect } from 'react'

// components, styles & data
import { AnimateFadeIn } from '@components'
import PhotoGallery from '@app/photos/PhotoGallery'
import { photoAlbums } from '@data/photos'
import type { AlbumConfig } from '@/types/album'

// render
export default function HomePage() {
    const [config, setConfig] = useState<AlbumConfig | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadHome() {
            try {
                const homeConfig = await photoAlbums.home()
                setConfig(homeConfig)
            } catch (error) {
                console.error('Failed to load home photos:', error)
            } finally {
                setLoading(false)
            }
        }
        loadHome()
    }, [])

    if (loading || !config) {
        return null // Or a loading spinner
    }

    return (
        <AnimateFadeIn ReactDOMElement={
            <PhotoGallery
                {...config}
                title={undefined}
                homePage
                navigation />
        } />
    )
}