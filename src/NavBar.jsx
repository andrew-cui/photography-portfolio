import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom'
import NavIcons from './NavIcons.jsx'
import './css/nav.css'

// Fixed navigation bar pages
const sitePages = [
    {
      album: "home",
      href: "/"
    },
    {
      album: "portraits",
      href: "/portraits",
      subItems: [
        { album: "solo", href: "/solo" },
        { album: "couples", href: "/couples" },
        { album: "groups", href: "/groups" },
        { album: "grads", href: "/grads" },
      ],
    },
    {
      album: "running & events",
      href: "/running",
      subItems: [
        { album: "running", href: "/running" },
        { album: "parties", href: "/parties" },
        { album: "events", href: "/events" },
      ],
    },
    {
      album: "landscape & nature",
      href: "/travel",
      subItems: [
        { album: "japan", href: "/travel-japan" },
        { album: "europe", href: "/travel-europe" },
        { album: "nyc", href: "/travel-nyc" },
        { album: "usa", href: "/travel-usa" },
      ]
    },
    {
      album: "about",
      href: "/me",
    },
  ];


// Fixed navigation bar implementation - Not responsive for mobile
const NavBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const handleMouseEnter = (item) => { setActiveItem(item); };
  const handleMouseLeave = () => { setActiveItem(null); };
  
  return (
    <div className="navbar w-screen bottom-0 px-10 py-0 m-0 text-center md:block hidden">
      {/* Desktop Navigation */}
        <div className="navbar-links flex">
        {sitePages.map((item, index) => (
            <div key={index} className="navbar-item relative flex flex-col text-sm"
            onMouseEnter={() => handleMouseEnter(item.album)} 
            onMouseLeave={handleMouseLeave}>
                {item.subItems == null && (
                  <Link to={item.href} className="navbar-link px-2"> {item.album} </Link>
                )}
                {item.subItems && item.subItems.length > 0 && (
                  <p className="px-2"> {item.album} </p>
                )}
                <div className={`navbar-transition-wrapper px-2 transition-all duration-[500ms] ease-out 
                  ${activeItem === item.album ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} >
                  {activeItem === item.album && item.subItems && item.subItems.length > 0 && (
                    <div className={`navbar-subitems ${
                      activeItem === item.album ? 'block' : 'hidden'} `}>
                        <ul>{item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subItem.href}
                                className="block px-3 py-2">
                            {subItem.album}
                            </Link>
                          </li>
                        ))}
                        </ul>
                    </div>
                  )}
                  </div>
            </div>
        ))}
        </div>
        {/* <h2>Andrew Cui</h2> */}

        <NavIcons/>
    </div>
  )
}
export default NavBar
