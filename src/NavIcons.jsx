import React from 'react'
import './css/nav.css'

// External navigation links & socials
const links = [
    {
      label: "email",
      href: "#",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
            </svg>
    },
    {
        label: "instagram",
        href: "https://instagram.com/andrew.cui",
        icon: 
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 50 50">
        <path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path>
        </svg>
    },
    {
        label: "flickr",
        href: "https://www.flickr.com/photos/andrewcui/albums/",
        icon: 
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 50 50">
        <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 16 17 C 11.59 17 8 20.59 8 25 C 8 29.41 11.59 33 16 33 C 20.41 33 24 29.41 24 25 C 24 20.59 20.41 17 16 17 z M 34 17 C 29.59 17 26 20.59 26 25 C 26 29.41 29.59 33 34 33 C 38.41 33 42 29.41 42 25 C 42 20.59 38.41 17 34 17 z"></path>
        </svg>
    },
    {
        label: "substack",
        href: "https://andrewcui.substack.com/?r=8idai&utm_campaign=pub-share-checklist",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 50 50">
        <defs opacity=".38"><rect id="b9-AsiUWV4BYTBJAQTByOa" width="42.947" height="48" x="3.526" opacity=".38"></rect></defs><path d="M43,11H8V5h35V11z"></path><path d="M43,19H8v-6h35V19z"></path><path d="M43,44.805L25.984,34.169L8,44.748V21h35V44.805z"></path>
        </svg>
    },
    {
        label: "linkedin",
        href: "https://www.linkedin.com/in/andrew-cui/",
        icon: 
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 50 50">
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg>
    },
    // {
    //     label: "home",
    //     href: "/",
    //     icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
    //     <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    //   </svg>
    // }
  ];

  const NavIcons = () => { 
    return (
        <div className="navicons">
            {links.map((item, index) => (
            <div key={index} className="mx-4">
                <a
                    href={item.href || "#"}
                    className="text-gray-800 hover:text-blue-500"
                    target={`${item.label == "home" ? '' : "_blank"}`}
                >
                    {item.icon}
                </a>
            </div>
            ))}
        </div>
    )
}
export default NavIcons;
