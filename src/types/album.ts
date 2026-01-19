
import type { PhotoGridProps } from '@/types/photogrid'
import type { PhotoProps } from '@/types/photo'

export type AlbumConfig = {
    title: string;
    subtitle?: string;
    date?: string;
    tags?: string[];
    category?: 'travel' | 'portraits' | 'events' | 'sports' | 'events/running' | 'other';
    photoGrids: PhotoGridProps[] | PhotoProps[];
}
