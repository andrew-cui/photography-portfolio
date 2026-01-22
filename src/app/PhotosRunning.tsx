import PhotoGrid from '@app/photos/PhotoGrid'
import clsx from 'clsx'
import css from '@styles/app/photos/photogallery.module.css'
import { useState, useEffect } from 'react';
import { photoAlbums } from '@data/photos/albumRegistry';
import type { AlbumConfig } from '@/types/album';
import { AnimateFadeIn, Spacer } from '@components';

// render
export default function PhotosRunning() {
    const [config, setConfig] = useState<AlbumConfig | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData() {
            try {
                // Fetch photos for the 'running' album, which now uses runningNav logic
                const albumConfig = await photoAlbums.running()
                setConfig(albumConfig)
            } catch (error) {
                console.error('Failed to load running photos:', error)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [])

    if (loading || !config) return null;

    // Use the first grid's data which contains our nav items
    const photos = config.photoGrids[0].photoData || [];

    return (
        <AnimateFadeIn ReactDOMElement={
            <div className={clsx('app', css.photoGallery)}>
                <header className={clsx(css['photoGallery__header'])}>
                    <h1>Running</h1>
                    <h3>Some of the many races covered in NYC</h3>
                </header>

                <Spacer size="m" />

                <PhotoGrid
                    title=""
                    photoData={photos}
                    homePage={true} // Reuses homepage styling for nav items
                    navigation={true} // Enables navigation behavior
                    spacer="s"
                />
            </div>
        } />
    )
}