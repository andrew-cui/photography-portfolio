import { ReactNode } from 'react'

export type PhotoProps = {
    // text: ReactNode | string;
    src: string;
    href?: string | null;
    title?: string | ReactNode | null;
    galleryName: string;

    data?: {
        subtitle?: string | ReactNode | null;
        caption?: string | ReactNode | null;
        category?: string | null;
        location?: string | null;
        dateTaken?: Date | null;
        tags?: string[] | null;
    };
    exif?: {
        camera?: 'a7iii' | 'a7ii' | 'iPhone' | 'film' | 'other' | null;
        lens?: string | null;
        focalLength?: number | null;
        shutterSpeed?: number | null;
        aperture?: number | null;
        iso?: number | null;
    }
    // functional properties
    aspect?: "v" | "h";        // active page = keep underline active
    // external?: boolean;         // true = stay on site and don't redirect into new tab
    order?: number | null;

    // styles
    // variant?: string;          // custom CSS classes for context
};