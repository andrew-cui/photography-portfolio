import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom'
import NavIcons from './NavIcons.jsx'
import '../css/nav.css'
import sitePages from '../assets/nav_items.json'

// Fixed navigation bar pages

// Fixed navigation bar implementation - Not responsive for mobile
const NavBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [closingItem, setClosingItem] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleMouseEnter = (item) => { setActiveItem(item); };
  const handleMouseLeave = () => { setActiveItem(null); };
  const [isOpen, setIsOpen] = useState(false); // controls mobile navbar

  const toggleMobileNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleActiveItemNavbar = (album) => {
    if (isAnimating) return; // Prevent rapid clicks from breaking animations
  
    if (activeItem === album) {
      setIsAnimating(true);
      setActiveItem(null); // Close the currently open item
      setTimeout(() => { setIsAnimating(false) }, 500); // Matches CSS transition duration
    } else {
      
      if (activeItem) {
        setIsAnimating(true);
        setActiveItem(null); // Close the currently open item first, then open the new one
  
        setTimeout(() => {
          setActiveItem(album);
          setIsAnimating(false);
        }, 500); // Wait for collapse animation before opening new one
      } else {
        setActiveItem(album);
      }
    }
  };
  
  return (
    <div className="navbar-wrapper">
      {/* Desktop Navigation */}
      <div className="navbar w-screen bottom-0 px-10 py-0 m-0 text-center hidden md:block">
        {/* NavBar Links */}
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
        {/* Icons */}
        <NavIcons/>
      </div>

      {/* Mobile Navigation */}
      <div className={`navbar ${isOpen ? 'navbar-mobile-hidden' : ''} w-screen bottom-0 px-10 py-0 m-0 text-center text-sm block md:hidden`}>
          {/* Icon to toggle navbar */}
          {/* Mobile NavBar Links */}
          <div className={`nav-mobile ${isOpen ? 'mobile-expanded' : ''}`}>
            {/* Icons */}
            <div className={`transition-all duration-[500ms] ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] h-auto' : 'max-h-0 h-0'}`}>
            {isOpen && sitePages.map((item, index) => (
                <div key={index} className="nav-mobile-item text-sm" onClick={() => toggleActiveItemNavbar(item.album)} >
                    {item.subItems == null && (
                      <Link to={item.href} className="navbar-link px-2"> {item.album} </Link>
                    )}
                    {item.subItems && item.subItems.length > 0 && (
                      <p className="px-2"> {item.album} </p>
                    )}
                      {item.subItems && item.subItems.length > 0 && (
                        <div className={`transition-all duration-[500ms] overflow-hidden ease-in-out
                          navbar-subitems-mobile ${
                          activeItem === item.album ? 'max-h-[1000px] opacity-100 h-auto' : 'max-h-0 opacity-0'}`}>
                            <ul>{item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link to={subItem.href}
                                    className="navbar-subitems-link block px-3 py-2">
                                {subItem.album}
                                </Link>
                              </li>
                            ))}
                            </ul>
                        </div>
                      )}
                  </div>
              ))}
            </div>
            <div className="nav-menu" onClick={toggleMobileNavbar}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
              </svg>
            </div>
            {/* <NavIcons/> */}
          </div>
      </div>
    </div>
  )
}
export default NavBar;



