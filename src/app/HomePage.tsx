/* Home 
 * / page to show intro and key highlights. site landing page
 */


import { useState, useEffect } from 'react'

// components, styles & data
import { AnimateFadeIn } from '@components'
import PhotoGrid from '@app/photos/PhotoGrid'
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
        return null
    }

    const allPhotos = config.photoGrids[0].photoData || [];

    const sections = [
        { title: 'Places', category: 'travel' },
        { title: 'Events', category: 'events' },
        { title: 'People', category: 'people' }
    ];

    return (
        <div className="app app--homepage">
            {sections.map(section => {
                const sectionPhotos = allPhotos.filter(p => p.data?.category === section.category);
                if (sectionPhotos.length === 0) return null;

                return (
                    <PhotoGrid
                        key={section.category}
                        title={section.title}
                        photoData={sectionPhotos}
                        collapsible
                        homePage
                        navigation
                    />
                );
            })}
        </div>
    )
}