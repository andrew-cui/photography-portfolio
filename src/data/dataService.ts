import type { PhotoProps } from '@/types/photo'
import Papa from 'papaparse'

const PHOTO_DATA_SOURCE = import.meta.env.VITE_PHOTO_DATA_SOURCE || 'local'
const CDN_URL = import.meta.env.VITE_CDN_URL || ''
const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMp1ikJvMtl3vm8jFloWCu2a1p8BYbilgH9nCzvh6u-pLxMWIbOaFDw6LgSW2yp324S57Q5Zur5ooM/pub?output=csv'

// Simple cache to store the parsed CSV data
let cachedRows: any[] | null = null;

/**
 * Fetches and parses the Google Sheets CSV.
 * Handles row filtering for specific albums or the homepage.
 */
export async function loadPhotosFromCSV(
    albumName: string,
    categoryName?: string
): Promise<PhotoProps[]> {
    if (cachedRows) {
        return processRows(cachedRows, albumName, categoryName);
    }

    return new Promise((resolve, reject) => {
        Papa.parse(CSV_URL, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                cachedRows = results.data as any[];
                resolve(processRows(cachedRows, albumName, categoryName));
            },
            error: (error) => reject(error)
        });
    });
}

function processRows(rows: any[], albumName: string, categoryName?: string): PhotoProps[] {
    const photos: PhotoProps[] = rows
        .filter((row: any) => {
            // Check for homepage flag in any common column variation
            const homepageVal = (row.homepage || row.isHomepage || row.is_homepage || row['is homepage'])?.toString().trim().toUpperCase();
            const isHome = homepageVal === 'TRUE' || homepageVal === '1' || homepageVal === 'YES';

            if (albumName === 'home') return isHome;

            // Normal album filtering - check galleryName or srcFolder
            const gallery = row.galleryName || row.album || row.gallery || row.srcFolder;
            return gallery?.toLowerCase() === albumName.toLowerCase();
        })
        .map((row: any, index: number) => {
            const isHome = albumName === 'home';
            const srcCategory = row.category || categoryName || 'other';
            const srcFolder = row.srcFolder || albumName;
            const srcName = row.srcName;

            // Asset lives at: photos/category/srcFolder/srcName
            const assetPath = PHOTO_DATA_SOURCE === 'r2'
                ? `${srcCategory}/${srcFolder}`
                : `photos/${srcCategory}/${srcFolder}`;

            // Use specialized homepage columns if we are on the home page
            const orderValue = isHome && row.homepageOrder ? row.homepageOrder : row.order;
            const dateValue = isHome && row.homepageDate ? row.homepageDate : row.dateTaken;

            return {
                src: getPhotoUrl(assetPath, srcName),
                title: isHome ? row.galleryName : row.title,
                href: `/photos/${srcCategory}/${srcFolder}`,
                galleryName: row.galleryName,
                aspect: row.aspect as "v" | "h",
                order: orderValue ? parseInt(orderValue) : index,
                data: {
                    category: srcCategory,
                    location: row.location,
                    dateTaken: dateValue ? dateValue.toString() : null,
                    tags: row.tags ? row.tags.split(',').map((t: string) => t.trim()) : [],
                    caption: row.caption,
                    subtitle: row.subtitle,
                },
                exif: {
                    camera: row.camera,
                    lens: row.lens,
                    focalLength: row.focalLength ? parseInt(row.focalLength) : null,
                    iso: row.iso ? parseInt(row.iso) : null,
                    shutterSpeed: row.shutterSpeed ? parseFloat(row.shutterSpeed) : null,
                    aperture: row.aperture ? parseFloat(row.aperture) : null,
                }
            };
        });

    return sortPhotos(photos);
}



function sortPhotos(photos: PhotoProps[]): PhotoProps[] {
    return [...photos].sort((a, b) => (Number(a.order ?? 999) - Number(b.order ?? 999)));
}

function getPhotoUrl(filePath: string, filename: string): string {
    const cleanFilename = filename.split('/').pop() || filename
    return PHOTO_DATA_SOURCE === 'r2'
        ? `${CDN_URL}/${filePath}/${cleanFilename}`
        : `/${filePath}/${cleanFilename}`;
}