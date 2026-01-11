
import type { PhotoProps } from '@/types/photo'
import type { AlbumConfig } from '@/types/album'
import { sortPhotos } from './utils'

const category = 'travel'
const galleryName = 'Switzerland'
const src_prefix = '/switzerland/'

const rawPhotos: PhotoProps[] = [
    {
        title: 'Andermatt',
        src: src_prefix + 'andermatt.avif',
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
        order: 12
    },
    {
        title: 'Eiger Express',
        src: src_prefix + 'eiger-express.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: 'Eiger Express',
            caption: 'Cable car to Grindelwald',
            category: category,
            location: 'Grindelwald',
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
        order: 13
    },
    {
        title: 'Jungfraubahn',
        src: src_prefix + 'jungfraubahn.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: 'Jungfraubahn',
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
        order: 2
    },
    {
        title: 'Kleine Scheidegg',
        src: src_prefix + 'kleine-schdeigg.avif',
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
        order: 4
    },
    {
        title: 'Lausanne',
        src: src_prefix + 'lausanne.avif',
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
        order: 12
    },
    {
        title: 'Lauterbrunnen',
        src: src_prefix + 'lauterbrunnen.avif',
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
        order: 3
    },
    {
        title: 'Lucerne',
        src: src_prefix + 'lucerne-1.avif',
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
        order: 10
    },
    {
        title: 'Lucerne',
        src: src_prefix + 'lucerne-2.avif',
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
        order: 11
    },
    {
        title: 'Lucerne',
        src: src_prefix + 'lucerne-3.avif',
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
        order: 12
    },
    {
        title: 'Wengen',
        src: src_prefix + 'wengen.avif',
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
        order: 5
    },
    {
        title: 'Zermatt',
        src: src_prefix + 'zermatt-1.avif',
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
        order: 7
    },
    {
        title: 'Zermatt',
        src: src_prefix + 'zermatt-2.avif',
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
        order: 8
    },
    {
        title: 'Zermatt',
        src: src_prefix + 'zermatt-3.avif',
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
        order: 9
    },
    {
        title: 'Matterhorn',
        src: src_prefix + 'zermatt-matterhorn.avif',
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
    },
    {
        title: 'Zurich',
        src: src_prefix + 'zurich.avif',
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
        order: 6
    }
]

export const photosSwitzerland = sortPhotos(rawPhotos)

export const configSwitzerland: AlbumConfig = {
    title: 'Switzerland',
    subtitle: 'Grand tour of Switzerland with the family',
    tags: ['travel', 'europe'],
    category: 'travel',
    photoGrids: [
        {
            photoData: photosSwitzerland,
            title: '',
            subtitle: ''
        }
    ]
}
