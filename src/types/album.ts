
import type { PhotoGridProps } from '@/types/photogrid'
import type { PhotoProps } from '@/types/photo'

export type AlbumConfig = {
    src_path?: string;
    title: string;
    subtitle?: string;
    date?: string;
    tags?: string[];
    photoGrids: PhotoGridProps[] | PhotoProps[];
}
