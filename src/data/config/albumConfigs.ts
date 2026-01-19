import type { AlbumConfig } from '@/types/album'

export interface ExtendedAlbumConfig extends Omit<AlbumConfig, 'photoGrids'> {
    photoGrids: Array<{
        title?: string;
        subtitle?: string;
        /** Optional: Only show photos that include at least one of these tags. 
         * If omitted, shows all photos in the album. */
        matchTags?: string[];
        /** Optional: Hide photos that include at least one of these tags. */
        excludeTags?: string[];
    }>;
}

export const albumConfigs: Record<string, ExtendedAlbumConfig> = {
    banff: {
        title: 'Banff',
        subtitle: 'Banff National park throughout the seasons',
        tags: ['travel', 'winter'],
        category: 'travel',
        photoGrids: [
            {
                title: 'Autumn foliage in Banff',
                subtitle: 'September 2023',
                matchTags: ['fall']
            },
            {
                title: 'Winter and the northern lights',
                subtitle: 'Ski trip in March 2025',
                matchTags: ['winter', 'northern lights']
            }
        ]
    },
    switzerland: {
        title: 'Switzerland',
        subtitle: 'Grand tour of Switzerland with the family',
        tags: ['travel', 'europe'],
        category: 'travel',
        photoGrids: [{ title: '', subtitle: '' }]
    },
    como: {
        title: 'Lake Como',
        subtitle: '1 week in Lake Como, Summer 2024',
        tags: ['travel', 'europe'],
        category: 'travel',
        photoGrids: [{ title: '', subtitle: '' }]
    },
    greece: {
        title: 'Greece',
        subtitle: 'Santorini, Athens, and Meteora',
        tags: ['travel', 'europe'],
        category: 'travel',
        photoGrids: [{ title: '', subtitle: '' }]
    },
    japan: {
        title: 'Japan',
        subtitle: '',
        tags: ['travel', 'asia'],
        category: 'travel',
        photoGrids: [{ title: '', subtitle: '' }]
    },
    amsterdam: {
        title: 'Amsterdam',
        subtitle: '',
        tags: ['travel', 'europe'],
        category: 'travel',
        photoGrids: [{ title: '', subtitle: '' }]
    },
    slovenia: {
        title: 'Slovenia',
        subtitle: 'Lake Bled',
        tags: ['travel', 'europe'],
        category: 'travel',
        photoGrids: [{ title: '', subtitle: '' }]
    },
    scotland: {
        title: 'Scotland',
        subtitle: 'Solo tripping in the Isle of Skye',
        tags: ['travel', 'europe'],
        category: 'travel',
        photoGrids: [{ title: '', subtitle: '' }]
    },
    marrakech: {
        title: 'Marrakech',
        subtitle: '',
        tags: ['travel', 'africa'],
        category: 'travel',
        photoGrids: [{ title: '', subtitle: '' }]
    },


    nyc_marathon: {
        title: 'NYC Marathon',
        subtitle: '',
        tags: ['events', 'sports', 'running'],
        category: 'events/running',
        photoGrids: [
            {
                title: 'Autumn foliage in Banff',
                subtitle: 'September 2023',
                matchTags: ['elite']
            },
            {
                title: 'Winter and the northern lights',
                subtitle: 'Ski trip in March 2025',
                excludeTags: ['elite']
            }
        ]
    },
    mini_10k: {
        title: 'NYRR Mini 10K',
        subtitle: '',
        tags: ['events', 'sports', 'running'],
        category: 'events/running',
        photoGrids: [{ title: '', subtitle: '' }]
    },





    home: {
        title: 'Home',
        subtitle: '',
        tags: [],
        category: 'other',
        photoGrids: [{ title: '', subtitle: '' }]
    }
}