
import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PhotoGallery from '@app/photos/PhotoGallery'
import { photoAlbums } from '@data/photos'
import { AnimateFadeIn } from '@components/layout/animations/AnimateFadeIn'
import type { AlbumConfig } from '@/types/album'

export default function AlbumPage() {
    const params = useParams();
    const splat = params['*'] || '';
    const segments = splat.split('/').filter(Boolean);
    const albumId = segments[segments.length - 1];
    const category = segments[0];
    const [config, setConfig] = useState<AlbumConfig | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadAlbum() {
            if (!albumId || !photoAlbums[albumId]) {
                setLoading(false)
                return
            }

            try {
                const albumConfig = await photoAlbums[albumId]()
                setConfig(albumConfig)
            } catch (error) {
                console.error('Failed to load album:', error)
            } finally {
                setLoading(false)
            }
        }

        loadAlbum()
    }, [albumId])

    // Safety checks
    if (!albumId || !photoAlbums[albumId]) {
        console.log(albumId)
        return <Navigate to="/" replace />
    }

    if (loading) {
        return null
    }

    if (!config) {
        return <Navigate to="/" replace />
    }

    return <PhotoGallery {...config} navigation={(config as any).isNavigation} homePage={(config as any).isNavigation} spacer={(config as any).isNavigation ? 's' : 'm'} />;
}