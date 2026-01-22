import type { AlbumConfig } from '@/types/album'
import { loadPhotosFromCSV } from './photoLoader'
import { albumConfigs } from './albumConfig'

/**
 * Dynamically builds the albumRegistry object from our config registry.
 * This removes the need for manual loader functions for every new album.
 */
export const albumRegistry: Record<string, () => Promise<AlbumConfig>> = Object.keys(albumConfigs).reduce((acc, src_folder) => {
    acc[src_folder] = async (): Promise<AlbumConfig> => {
        const config = albumConfigs[src_folder];
        const allPhotos = await loadPhotosFromCSV(src_folder, config.src_path, config.isNavigation);

        // Map the grid configurations to actual photo data
        const photoGrids = config.photoGrids.map(grid => {
            let photoData = allPhotos;

            // Apply inclusive and exclusive tagging
            if (grid.matchTags && grid.matchTags.length > 0) { photoData = photoData.filter(p => p.data?.tags?.some(tag => grid.matchTags?.includes(tag))) }
            if (grid.excludeTags && grid.excludeTags.length > 0) { photoData = photoData.filter(p => !p.data?.tags?.some(tag => grid.excludeTags?.includes(tag))) }

            return {
                ...grid,
                photoData
            };
        });

        return {
            ...config,
            photoGrids
        } as AlbumConfig;
    };
    return acc;
}, {} as Record<string, () => Promise<AlbumConfig>>);