import { useParams, Navigate } from 'react-router-dom'
import PhotoGallery from '@app/photos/PhotoGallery'
import { albums } from '@data/albums'
import { AnimateFadeIn } from '@components/layout/animations/AnimateFadeIn'

export default function AlbumPage() {
    const { albumId } = useParams()

    // Safety check - if no ID, redirect home
    if (!albumId) return <Navigate to="/" replace />

    const config = albums[albumId]

    // If album doesn't exist, redirect home (or could show 404)
    if (!config) return <Navigate to="/" replace />

    return (
        <AnimateFadeIn ReactDOMElement={<PhotoGallery
            {...config}
        />} />
    )
}
