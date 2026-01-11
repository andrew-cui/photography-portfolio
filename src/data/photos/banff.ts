import type { PhotoProps } from '@/types/photo'
import type { AlbumConfig } from '@/types/album'
import { sortPhotos } from './utils'


const category = 'travel'
const galleryName = 'Banff'
const src_prefix = '/banff/'

const rawPhotos: PhotoProps[] = [
    {
        title: 'Moraine Lake at sunrise',
        src: src_prefix + 'morainelake.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: undefined,
            caption: undefined,
            category: category,
            location: undefined,
            dateTaken: new Date('2022-09-24 12:00:00'),
            tags: ['fall']
        },
        exif: {
            camera: 'a7iii',
            lens: null,
            focalLength: 17,
            shutterSpeed: null,
            aperture: null,
            iso: null
        },
        aspect: 'h',
        order: 1
    }

    , {
        title: 'Larch Valley Trail',
        src: src_prefix + 'larchvalley.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: undefined,
            caption: 'Arrived just in time for the golden larches to bloom',
            category: category,
            location: undefined,
            dateTaken: new Date('2022-09-24 12:00:00'),
            tags: ['fall']
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
    }

    , {
        title: 'Banff Sunshine',
        src: src_prefix + 'banff-2025-sunshine.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: undefined,
            caption: 'Ski season',
            category: category,
            location: undefined,
            dateTaken: new Date('2025-03-05 12:00:00'),
            tags: ['winter', 'skiing']
        },
        exif: {
            camera: 'a7iii',
            lens: '70-180mm',
            focalLength: 150,
            shutterSpeed: null,
            aperture: null,
            iso: null
        },
        aspect: 'v',
        order: 7
    }

    , {
        title: 'Mt. Assiniboine',
        src: src_prefix + 'banff-2025-assiniboine.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: undefined,
            caption: 'Seen from Banff Sunshine',
            category: category,
            location: undefined,
            dateTaken: undefined,
            tags: ['winter']
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
    }

    , {
        title: 'Lake Louise Ski Resort',
        src: src_prefix + 'banff-2025-lakelouise.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: undefined,
            caption: 'Skiiers at Lake Louise',
            category: category,
            location: undefined,
            dateTaken: undefined,
            tags: ['winter', 'skiing']
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
    }

    , {
        title: 'Northern Lights',
        src: src_prefix + 'banff-nl-vermillion.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: 'Vermillion Lakes, Banff',
            caption: undefined,
            category: category,
            location: undefined,
            dateTaken: undefined,
            tags: ['northern lights']
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
        order: 90
    }

    , {
        title: 'Northern Lights',
        src: src_prefix + 'banff-nl-calgary2.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: 'Caglary, AB',
            caption: undefined,
            category: category,
            location: undefined,
            dateTaken: undefined,
            tags: ['northern lights']
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
        order: 91
    }
    , {
        title: 'Canoeing on the lake',
        src: src_prefix + 'morainelakecanoeclub.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: undefined,
            caption: undefined,
            category: category,
            location: undefined,
            dateTaken: undefined,
            tags: ['fall']
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
    }, {
        title: 'Northern Lights',
        src: src_prefix + 'banff-nl-calgary1.avif',
        href: undefined,
        galleryName: galleryName,
        data: {
            subtitle: undefined,
            caption: undefined,
            category: category,
            location: undefined,
            dateTaken: undefined,
            tags: ['northern lights']
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
        order: 92
    }
]

export const photosBanff = sortPhotos(rawPhotos)


export const configBanff: AlbumConfig = {
    title: 'Banff',
    subtitle: 'Banff National park throughout the seasons',
    tags: ['travel', 'winter'],
    category: 'travel',
    photoGrids: [
        {
            photoData: photosBanff.filter(p => p.data?.tags?.includes('fall')),
            title: 'Autumn foliage in Banff',
            subtitle: 'September 2023'
        },
        {
            photoData: photosBanff.filter(p =>
                (p.data?.tags?.includes('winter') || p.data?.tags?.includes('northern lights'))),
            title: 'Winter and the northern lights',
            subtitle: 'Ski trip in March 2025'
        },
        // {
        //     photoData: photosBanff.filter(p => p.data?.tags?.includes('northern lights')),
        //     title: 'Northern Lights',
        //     subtitle: ''
        // }
    ]
}