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
    categoryName?: string,
    isNavigation: boolean = false
): Promise<PhotoProps[]> {
    if (cachedRows) {
        return processRows(cachedRows, albumName, categoryName, isNavigation);
    }

    return new Promise((resolve, reject) => {
        Papa.parse(CSV_URL, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                cachedRows = results.data as any[];
                resolve(processRows(cachedRows, albumName, categoryName, isNavigation));
            },
            error: (error) => reject(error)
        });
    });
}

function processRows(rows: any[], albumName: string, categoryName?: string, isNavigation: boolean = false): PhotoProps[] {
    const targetCategory = categoryName?.toString().trim().toLowerCase();

    const photos: PhotoProps[] = rows
        .filter((row: any) => {
            // isNavigation:
            // 1. Homepage

            // 2. Category page - filter only for photos that match /category/subcategory or /catgory


            // Process folder data
            // 1. Identify the appropriate file name

            // 2. Identify the metadata 

            // 3. Output the metadata





            // Homepage check
            const homepageVal = (row.homepage)?.toString().trim().toUpperCase();
            if (albumName === 'home') return homepageVal === 'TRUE' || homepageVal === '1' || homepageVal === 'YES';

            // Construct row category scope
            let rowCategory = row.category?.toString().trim().toLowerCase() || '';
            if (row.subcategory) {
                const sub = row.subcategory.toString().trim().toLowerCase();
                if (sub) rowCategory += `/${sub}`;
            }

            // Navigation Page Logic
            if (isNavigation) {
                // 1. Filter: Must be marked as a category page item
                const catPage = (row.categoryPage)?.toString().trim().toUpperCase();
                const isCatPage = catPage === 'TRUE' || catPage === '1' || catPage === 'YES';
                if (!isCatPage) return false;

                // 2. Filter: Must belong to the requested category scope
                // Matches if row category is "events" or "events/running" when target is "events"
                return rowCategory && targetCategory &&
                    (rowCategory === targetCategory || rowCategory.startsWith(targetCategory + '/'));
            }

            // Standard Album Logic
            // Strict folder match currently preferred for standard albums
            const gallery = row.srcFolder?.toString().trim().toLowerCase();
            return gallery === albumName.toLowerCase();
        })
        .map((row: any, index: number) => {
            const isHome = albumName === 'home';

            // Re-construct category for src generation to match the filter logic
            // (Should ideally be a shared helper but inline is fine here for now)
            let rowCat = row.category;
            if (row.subcategory) {
                rowCat = `${rowCat}/${row.subcategory}`;
            }

            const srcCategory = rowCat || categoryName || 'other';
            const srcFolder = row.srcFolder || albumName;
            const srcName = row.srcName;

            // Asset Path
            const assetPath = PHOTO_DATA_SOURCE === 'r2'
                ? `${srcCategory}/${srcFolder}`
                : `photos/${srcCategory}/${srcFolder}`;

            // Determine display values
            let orderValue = row.order;
            let dateValue = row.dateTaken;
            let hrefValue = `/photos/${srcCategory}/${srcFolder}`;
            let titleValue = row.title;

            if (isHome) {
                orderValue = row.homepageOrder;
                dateValue = row.homepageDate;
                hrefValue = row.homepageLink ? `/photos/${row.homepageLink}` : hrefValue;
                titleValue = row.homepageTitle || row.galleryName;
            } else if (isNavigation) {
                // Navigation pages use nav overrides if available, else standard
                titleValue = row.navTitle || row.galleryName || row.title;
                if (row.navOrder) orderValue = row.navOrder;
            }

            return {
                src: getPhotoUrl(assetPath, srcName),
                title: titleValue,
                href: hrefValue,
                galleryName: row.galleryName,
                aspect: row.aspect as "v" | "h",
                order: orderValue ? parseInt(orderValue) : index,
                data: {
                    category: row.category?.split('/')[0] || srcCategory?.split('/')[0] || 'other',
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