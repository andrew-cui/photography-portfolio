import type { AlbumConfig } from '@/types/album'
import { loadPhotosFromCSV } from './dataService'
import { albumConfigs } from './config/albumConfigs'

/**
 * Dynamically builds the photoAlbums object from our config registry.
 * This removes the need for manual loader functions for every new album.
 */
export const photoAlbums: Record<string, () => Promise<AlbumConfig>> = Object.keys(albumConfigs).reduce((acc, albumName) => {
    acc[albumName] = async (): Promise<AlbumConfig> => {
        const config = albumConfigs[albumName];
        const allPhotos = await loadPhotosFromCSV(albumName, config.category, config.isNavigation);

        // Map the grid configurations to actual photo data
        const photoGrids = config.photoGrids.map(grid => {
            let photoData = allPhotos;

            // Apply declarative tag filtering if matchTags is provided
            if (grid.matchTags && grid.matchTags.length > 0) {
                photoData = photoData.filter(p =>
                    p.data?.tags?.some(tag => grid.matchTags?.includes(tag))
                );
            }

            // Apply exclusion filtering
            if (grid.excludeTags && grid.excludeTags.length > 0) {
                photoData = photoData.filter(p =>
                    !p.data?.tags?.some(tag => grid.excludeTags?.includes(tag))
                );
            }

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