import type { PhotoProps } from '@/types/photo'

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
