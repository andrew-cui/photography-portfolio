import type { PhotoProps } from '@/types/photo'
import type { SpacerSize } from '../components/layout/Spacer'

export type PhotoGridProps = {
    title?: string;
    subtitle?: string;
    photoData?: PhotoProps[];
    spacer?: SpacerSize;
    navigation?: boolean;
    homePage?: boolean;
    collapsible?: boolean;
}
