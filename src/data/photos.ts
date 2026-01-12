import type { AlbumConfig } from '@/types/album'
import { loadPhotos } from './photoLoader'
import { configBanff, configLakeComo, configSwitzerland } from './functions/config/albumConfigs'
import { configHome } from './functions/config/appConfigs'

// Album loader functions
async function loadBanff(): Promise<AlbumConfig> {
    const photos = await loadPhotos('banff')
    return {
        ...configBanff,
        photoGrids: [
            {
                ...configBanff.photoGrids[0],
                photoData: photos.filter(p => p.data?.tags?.includes('fall'))
            },
            {
                ...configBanff.photoGrids[1],
                photoData: photos.filter(p =>
                    p.data?.tags?.includes('winter') ||
                    p.data?.tags?.includes('northern lights')
                )
            }
        ]
    }
}

async function loadSwitzerland(): Promise<AlbumConfig> {
    const photos = await loadPhotos('switzerland')
    return {
        ...configSwitzerland,
        photoGrids: [{ ...configSwitzerland.photoGrids[0], photoData: photos }]
    }
}

async function loadLakeComo(): Promise<AlbumConfig> {
    const photos = await loadPhotos('como')
    return {
        ...configLakeComo,
        photoGrids: [{ ...configLakeComo.photoGrids[0], photoData: photos }]
    }
}

async function loadHome(): Promise<AlbumConfig> {
    const photos = await loadPhotos('home')
    return {
        ...configHome,
        photoGrids: [{ ...configHome.photoGrids[0], photoData: photos }]
    }
}

// Export lookup object
export const photoAlbums: Record<string, () => Promise<AlbumConfig>> = {
    banff: loadBanff,
    switzerland: loadSwitzerland,
    como: loadLakeComo,
    home: loadHome
}