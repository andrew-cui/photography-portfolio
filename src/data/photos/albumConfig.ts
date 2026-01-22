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
    /** If true, this album acts as a navigation page (PhotoGrid items are links). */
    isNavigation?: boolean;
}

export const albumConfigs: Record<string, ExtendedAlbumConfig> = {
    banff: {
        src_path: 'travel',
        title: 'Banff',
        subtitle: 'Banff National park throughout the seasons',
        tags: ['travel', 'winter'],
        photoGrids: [
            {
                title: 'Autumn foliage in Banff',
                subtitle: 'September 2023',
                matchTags: ['fall']
            },
            {
                title: 'Winter and the northern lights',
                subtitle: 'Ski trip, March 2025',
                matchTags: ['winter', 'northern lights']
            }
        ]
    },
    switzerland: {
        src_path: 'travel',
        title: 'Switzerland',
        subtitle: 'Grand tour of Switzerland with the family',
        tags: ['travel', 'europe'],
        photoGrids: [{ title: '', subtitle: '' }]
    },
    como: {
        src_path: 'travel',
        title: 'Lake Como',
        subtitle: '1 week in Lake Como, Summer 2024',
        tags: ['travel', 'europe'],
        photoGrids: [{ title: '', subtitle: '' }]
    },
    greece: {
        title: 'Greece',
        subtitle: 'Santorini, Athens, and Meteora',
        tags: ['travel', 'europe'],
        src_path: 'travel',
        photoGrids: [{ title: '', subtitle: '' }]
    },
    japan: {
        src_path: 'travel',
        title: 'Japan',
        subtitle: '',
        tags: ['travel', 'asia'],
        photoGrids: [{ title: '', subtitle: '' }]
    },
    amsterdam: {
        src_path: 'travel',
        title: 'Amsterdam',
        subtitle: '',
        tags: ['travel', 'europe'],
        photoGrids: [{ title: '', subtitle: '' }]
    },
    slovenia: {
        src_path: 'travel',
        title: 'Slovenia',
        subtitle: 'Lake Bled',
        tags: ['travel', 'europe'],
        photoGrids: [{ title: '', subtitle: '' }]
    },
    scotland: {
        src_path: 'travel',
        title: 'Scotland',
        subtitle: 'Solo tripping in the Isle of Skye',
        tags: ['travel', 'europe'],
        photoGrids: [{ title: '', subtitle: '' }]
    },
    marrakech: {
        src_path: 'travel',
        title: 'Marrakech',
        subtitle: '',
        tags: ['travel', 'africa'],
        photoGrids: [{ title: '', subtitle: '' }]
    },


    nyc_marathon: {
        src_path: 'events/running',
        title: 'NYC Marathon',
        subtitle: '',
        tags: ['events', 'sports', 'running'],
        photoGrids: [
            {
                title: 'Elite men\'s and women\'s fields',
                subtitle: 'November 2025',
                matchTags: ['elite']
            },
            {
                title: 'Dashing Whippets NYC',
                subtitle: '',
                excludeTags: ['elite']
            }
        ]
    },
    mini_10k: {
        src_path: 'events/running',
        title: 'NYRR Mini 10K',
        subtitle: '',
        tags: ['events', 'sports', 'running'],
        photoGrids: [{ title: '', subtitle: '' }]
    },




    running: {
        src_path: 'events',
        title: 'Running',
        subtitle: 'Some of the many races covered in NYC',
        tags: ['events', 'sports', 'running'],
        isNavigation: true,
        photoGrids: [{ title: '', subtitle: '' }]
    },

    home: {
        src_path: '',
        title: 'Home',
        subtitle: '',
        tags: [],
        isNavigation: true,
        photoGrids: [{ title: '', subtitle: '' }]
    }
}