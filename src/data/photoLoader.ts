import type { PhotoProps } from '@/types/photo'

const PHOTO_DATA_SOURCE = import.meta.env.VITE_PHOTO_DATA_SOURCE || 'local'
const JSON_DATA_SOURCE = import.meta.env.VITE_JSON_DATA_SOURCE || import.meta.env.VITE_PHOTO_DATA_SOURCE || 'local'
const CDN_URL = import.meta.env.VITE_CDN_URL || ''

export const sortPhotos = (photos: PhotoProps[]): PhotoProps[] => {
    return [...photos].sort((a, b) => {
        // Items without order go last
        if (a.order === undefined && b.order === undefined) return 0;
        if (a.order === undefined) return 1;
        if (b.order === undefined) return -1;

        // Sort by order number ascending
        return (a.order as number) - (b.order as number);
    });
}

export async function loadPhotos(
    albumName: string,
    category?: string
): Promise<PhotoProps[]> {
    let data: any
    let filePath: any

    if (JSON_DATA_SOURCE === 'r2') {
        const response = await fetch(`${CDN_URL}/json/${albumName}.json`)
        if (!response.ok) throw new Error(`Failed to fetch ${albumName} from R2`)
        data = await response.json()
    } else {
        data = await import(`./functions/json/${albumName}.json`)
    }

    // Extract top-level fields that apply to all photos
    const { galleryName, category: jsonCategory, photos } = data

    // Use category from function param or fall back to JSON category
    const photoCategory = category || jsonCategory
    if (PHOTO_DATA_SOURCE === 'r2') {
        filePath = `${photoCategory}/${albumName}`
    } else {
        filePath = `photos/${photoCategory}/${albumName}`
    }

    // Convert date strings to Date objects, add shared fields, and fix photo paths
    return sortPhotos(photos.map((photo: any) => ({
        ...photo,
        galleryName: galleryName,
        src: getPhotoUrl(filePath, photo.src),
        data: {
            ...photo.data,
            category: photoCategory,
            dateTaken: photo.data.dateTaken ? new Date(photo.data.dateTaken) : undefined
        }
    })))
}

function getPhotoUrl(filePath: string, filename: string): string {
    const cleanFilename = filename.split('/').pop() || filename

    if (PHOTO_DATA_SOURCE === 'r2') {
        return `${CDN_URL}/${filePath}/${cleanFilename}`
    }

    return `/${filePath}/${cleanFilename}`
}