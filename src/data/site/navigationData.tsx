import React from 'react';
export const showIcons = false;

export interface NavItem {
    title: string;
    link: string;
    icon?: React.ReactNode;
    dropdown?: {
        title: string;
        link: string;
    }[];
}

export const navigationData: NavItem[] = [
    {
        title: "about",
        link: "/about",
        icon: <i className="bi bi-person"></i>
    },
    {
        title: "bookings",
        link: "/book",
        icon: <i className="bi bi-calendar-check"></i>
    },
    {
        title: "places",
        link: "/places",
        icon: <i className="bi bi-geo-alt"></i>,
        dropdown: [
            { title: "banff", link: "/photos/travel/banff" },
            { title: "switzerland", link: "/photos/travel/switzerland" },
            { title: "lake como", link: "/photos/travel/como" },
            { title: "greece", link: "/photos/travel/greece" },
            { title: "japan", link: "/photos/travel/japan" },
            { title: "slovenia", link: "/photos/travel/slovenia" },
            { title: "amsterdam", link: "/photos/travel/amsterdam" },
            { title: "scotland", link: "/photos/travel/scotland" },
            { title: "marrakech", link: "/photos/travel/marrakech" }
        ]
    },
    {
        title: "events",
        link: "/events",
        icon: <i className="bi bi-camera"></i>,
        dropdown: [
            { title: "nyc marathon", link: "/photos/events/running/nyc_marathon" },
            { title: "mini 10k", link: "/photos/events/running/mini_10k" }
        ]
    },
    {
        title: "people",
        link: "/people",
        icon: <i className="bi bi-people"></i>,
        dropdown: []
    }
];
