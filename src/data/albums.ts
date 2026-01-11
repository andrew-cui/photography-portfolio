import { configBanff } from '@data/photos/banff'
import type { AlbumConfig } from '@/types/album'
import { configSwitzerland } from './photos/switzerland'

export const albums: Record<string, AlbumConfig> = {
    'banff': configBanff,
    'switzerland': configSwitzerland
}
