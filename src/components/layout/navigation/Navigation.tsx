/* Navigation 
 * top desktop navigation bar and mobile navigation dropdown
 */

// packages 
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

// components, styles & data
import { NavHeader, NavDesktop, NavMobile } from '@components/layout/navigation'
import Hyperlink from '@components/ui/Hyperlink'
import Footer from '@components/layout/Footer'
import { AnimateFadeIn } from '@components/layout/animations/AnimateFadeIn'
import css from '@styles/components/nav.module.css'

import pagesData from '@data/pagesData.json'
import { navHeightHeader, navRadius } from '@data/constants';
// import books from '@data/bookData'

// render
export default function Navigation ({
    dots = true,
} : {
    dots?: boolean,
}) {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [hideTitle, setHideTitle] = useState(false);

  useEffect(() => {
    // Non-home pages never show title
    if (!isHome) {
        setHideTitle(true);
        return;
    }

    const onScroll = () => {
        setHideTitle(window.scrollY > navHeightHeader + navRadius);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => {  window.removeEventListener("scroll", onScroll) };
    }, [isHome])

    

    return (
        <div className={clsx(
                css.nav, 
                hideTitle && css['nav--collapsed'])}>
            {isHome && !hideTitle && <NavHeader dots={dots}/>}
            <NavDesktop/>
            <NavMobile/>
        </div>
    )
}

