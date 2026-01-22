export const targetEmail = 'hello@andrewcui.com';

export interface Package {
    id: string;
    title: string;
    duration: string;
    price: string;
    featured?: boolean;
    features: string[];
}

export const bookingPackages: Package[] = [
    {
        id: 'portraits',
        title: 'Portraits',
        duration: 'per hour',
        price: '150+',
        features: [
            '1 hour session',
            '1 location in the city',
            '25 edited photos',
            '48-hour turnaround'
        ]
    },
    {
        id: 'sports',
        title: 'Sports',
        duration: 'varies',
        price: '200+',
        features: [
            'varies by the event',
            '100+ edited photos',
            '2-3 day turnaround'
        ]
    },
    {
        id: 'events',
        title: 'Events',
        duration: 'varies',
        price: '175+',
        features: [
            '$175/hour base rate',
            '$125/hour overage',
            'edited photos',
            '2-3 day turnaround'
        ]
    }
];
