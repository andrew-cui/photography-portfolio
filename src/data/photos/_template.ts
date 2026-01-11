
import type { PhotoProps } from '@/types/photo'
import type { AlbumConfig } from '@/types/album'
import { sortPhotos } from './utils'

const category = 'travel'
const galleryName = 'INSERT_NAME'
const src_prefix = '/INSERT_FOLDER/'

const rawPhotos: PhotoProps[] = [
    {
        title: 'Title',
        src: src_prefix + 'filename.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: undefined,
            caption: undefined,
            category: category,
            location: undefined,
            dateTaken: undefined,
            tags: []
        },
        exif: {
            camera: null,
            lens: null,
            focalLength: null,
            shutterSpeed: null,
            aperture: null,
            iso: null
        },
        aspect: 'v',
        order: 1
    }
]

export const photosINSERT_NAME = sortPhotos(rawPhotos)

export const configINSERT_NAME: AlbumConfig = {
    title: 'INSERT_TITLE',
    subtitle: 'INSERT_SUBTITLE',
    tags: [],
    category: 'travel',
    photoGrids: [
        {
            photoData: photosINSERT_NAME,
            title: '',
            subtitle: ''
        }
    ]
}
