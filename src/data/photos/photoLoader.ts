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
    src_folder: string,
    src_path?: string,
    isNavigation: boolean = false
): Promise<PhotoProps[]> {
    if (cachedRows) {
        return processRows(cachedRows, src_folder, src_path, isNavigation);
    }

    return new Promise((resolve, reject) => {
        Papa.parse(CSV_URL, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                cachedRows = results.data as any[];
                resolve(processRows(cachedRows, src_folder, src_path, isNavigation));
            },
            error: (error) => reject(error)
        });
    });
}

function processRows(rows: any[], src_folder: string, src_path?: string, isNavigation: boolean = false): PhotoProps[] {

    // src_folder: name of the folder that the photos are in
    // src_path: path to the folder, which is {category}/{subcategory}
    const src_category = src_path?.toString().trim().toLowerCase().split('/')[0];
    const src_subcategory = src_path?.toString().trim().toLowerCase().split('/')[1];
    const isHome = src_folder === 'home';

    const photos: PhotoProps[] = rows
        .filter((row: any) => {
            // 1a. filter for homepage
            if (isHome) {
                const home_show = row.home_show?.toString().trim().toUpperCase();
                return home_show === 'TRUE';
            }

            // 1b. filter for navigation gallery - src_category -> row_category / src_folder -> row_subcategory
            if (isNavigation) {
                // only show photos with navigation_show; other photos should not be included
                const navigation_show = row.navigation_show?.toString().trim().toLowerCase();
                return navigation_show === `${src_category}/${src_folder}`;
            }

            // 1c. standard filter logic for albums, matching the album
            return src_folder.toLowerCase() === row.src_folder?.toString().trim().toLowerCase();
        })
        .map((row: any, index: number) => {
            // 2a. determine the folder path for every folder
            const row_category = row.src_category?.toString().trim().toLowerCase() || '';
            const row_subcategory = row.src_subcategory?.toString().trim().toLowerCase();
            const row_folder = row.src_folder.toString().trim().toLowerCase();
            const row_src = row.src.toString().trim();

            let row_filepath = row_category;
            if (row_subcategory) {
                row_filepath += `/${row_subcategory}`;
            }

            // 2b. load asset path
            const assetPath = PHOTO_DATA_SOURCE === 'r2'
                ? `${row_filepath}/${row_folder}`
                : `photos/${row_filepath}/${row_folder}`;

            // 2c. preprocess folder assets
            // photo title: home -> home_label, navigation -> albumName, album -> title
            let titleValue = isHome
                ? row.home_label || row.albumName
                : (isNavigation ? row.albumName : row.title);

            // ordering: home -> home_order, navigation -> navigation_order, album -> order
            let orderValue = (isHome && row.home_order)
                ? row.home_order
                : ((isNavigation && row.navigation_order)
                    ? row.navigation_order
                    : row.order);

            // clickable link: home -> home_href, otherwise use the destination of the actual folder
            let hrefValue = (isHome && row.home_href)
                ? `/photos/${row.home_href}`
                : `/photos/${row_filepath}/${row_folder}`;

            // label / tag for the photo: home -> home_label, otherwise use for photo level
            let labelValue = (isHome && row.home_label)
                ? row.home_label
                : row.label;


            // 2d. export file values
            return {
                src: getPhotoUrl(assetPath, row_src),
                title: titleValue,
                href: hrefValue,
                galleryName: row.albumName,
                aspect: row.aspect as "v" | "h",
                order: orderValue ? parseInt(orderValue) : index,
                data: {
                    category: row_category,
                    location: row.location,
                    dateTaken: row.date ? row.date.toString() : null,
                    tags: row.tags ? row.tags.split(',').map((t: string) => t.trim()) : [],
                    caption: row.caption,
                    subtitle: labelValue,
                },
                exif: {
                    camera: row.exif_camera,
                    lens: row.exif_lens,
                    focalLength: row.exif_focalLength ? parseInt(row.exif_focalLength) : null,
                    iso: row.exif_iso ? parseInt(row.exif_iso) : null,
                    shutterSpeed: row.exif_shutterSpeed ? parseFloat(row.exif_shutterSpeed) : null,
                    aperture: row.exif_aperture ? parseFloat(row.exif_aperture) : null,
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