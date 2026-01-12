import type { AlbumConfig } from '@/types/album'

export const configBanff: AlbumConfig = {
    title: 'Banff',
    subtitle: 'Banff National park throughout the seasons',
    tags: ['travel', 'winter'],
    category: 'travel',
    photoGrids: [
        {
            title: 'Autumn foliage in Banff',
            subtitle: 'September 2023'
        },
        {
            photoData: [],
            title: 'Winter and the northern lights',
            subtitle: 'Ski trip in March 2025'
        }
    ]
}

export const configSwitzerland: AlbumConfig = {
    title: 'Switzerland',
    subtitle: 'Grand tour of Switzerland with the family',
    tags: ['travel', 'europe'],
    category: 'travel',
    photoGrids: [
        {
            photoData: [],
            title: '',
            subtitle: ''
        }
    ]
}

export const configLakeComo: AlbumConfig = {
    title: 'Lake Como',
    subtitle: '1 week in Lake Como, Summer 2024',
    tags: ['travel', 'europe'],
    category: 'travel',
    photoGrids: [
        {
            photoData: [],
            title: '',
            subtitle: ''
        }
    ]
}