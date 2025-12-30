/* Navigation 
 * top desktop navigation bar and mobile navigation dropdown
 */

// packages 
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

// components, styles & data
import Hyperlink from '@components/ui/Hyperlink'
import Footer from '@components/layout/Footer'
import { AnimateFadeIn } from '@components/layout/animations/AnimateFadeIn'
import css from '@styles/components/nav.module.css'

import pagesData from '@data/pagesData.json'
// import books from '@data/bookData'

// render
export default function NavMobile ({
    // hideTitle = false
} : {
}) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;
    const [isOpenMobile, setIsOpen] = useState(false);
    const toggleMobileNavbar = () => {  setIsOpen(!isOpenMobile)    }

    return (
        <div className={clsx(
            css['nav__mobile'],
            isOpenMobile && css['nav__mobile--open'])}>
            <div className={css['nav--collapsed_title']}>
                <h1>Andrew Cui</h1>
            </div>
            <div className={css.nav__mobile_toggle}>
                <button className={clsx(
                    css['nav__mobile_toggle_button'],
                    !isOpenMobile && css['nav__mobile_toggle_button_show'])} onClick={toggleMobileNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                    <path d="M 0 25 L 50 25" stroke="black" strokeWidth="3" transform="rotate(45 25 25)"/>
                    <path d="M 0 25 L 50 25" stroke="black" strokeWidth="3" transform="rotate(-45 25 25)"/>
                    </svg>
                </button>
                <button className={clsx(
                    css['nav__mobile_toggle_button'],
                    isOpenMobile && css['nav__mobile_toggle_button_show'])} onClick={toggleMobileNavbar}
                    style={{strokeWidth: 0}}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                    <path d="M 0 16 L 0 18 L 50 18 L 50 16 Z M 0 32 L 0 34 L 50 34 L 50 32 Z"></path>
                    </svg>
                </button>
            </div>
            {isOpenMobile && (
                <AnimateFadeIn duration={0.25} ReactDOMElement={<div className={css['nav__mobile_menu']}>
                    {pagesData.map((item, index) => (
                        <Link 
                        key={index} 
                        to={item.link} 
                        // style={{pointerEvents: item.disabled ? 'none' : 'auto'}} 
                        className={css.nav__mobile_link}
                        onClick={toggleMobileNavbar}>
                            <h3 className={
                                clsx(css['nav__mobile_link_text'])}
                            >{item.title}</h3>
                        </Link>
                    ))}
                </div>}/>
            )}
        </div>
    )
}

