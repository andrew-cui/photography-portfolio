/* Navigation 
 * top desktop navigation bar and mobile navigation dropdown
 */

// packages 
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

// components, styles & data
import { NavHeader, NavDesktop, NavMobile } from './index'
import css from '@styles/components/nav.module.css'
import { navHeightHeader, navRadius } from '@styles/constants';

import { motion, AnimatePresence } from 'framer-motion'

// render
export default function Navigation({
    dots = true,
}: {
    dots?: boolean,
}) {
    const location = useLocation();
    const showLargeHeader = location.pathname === "/" || location.pathname === "/about";
    const [hideTitle, setHideTitle] = useState(false);
    const [isOpenMobile, setIsOpenMobile] = useState(false);

    useEffect(() => {
        // Only pages with large header should handle scroll logic
        if (!showLargeHeader) {
            setHideTitle(true);
            return;
        }

        const COLLAPSE_THRESHOLD = Math.floor(navHeightHeader + navRadius); // ~172
        const EXPAND_THRESHOLD = 80; // Larger gap to prevent flicker

        const onScroll = () => {
            const currentScroll = window.scrollY;

            setHideTitle(prev => {
                // Collapse when scrolling down past threshold
                if (!prev && currentScroll > COLLAPSE_THRESHOLD) return true;
                // Expand only when scrolling back up past a much higher threshold
                if (prev && currentScroll < EXPAND_THRESHOLD) return false;
                return prev;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // initial check
        return () => { window.removeEventListener("scroll", onScroll) };
    }, [showLargeHeader, navHeightHeader, navRadius])

    return (
        <AnimatePresence mode="wait">
            <nav><motion.div
                key={showLargeHeader ? "header-page" : "simple-page"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={clsx(
                    css.nav,
                    (hideTitle || isOpenMobile) && css['nav--collapsed'])}
            >
                {showLargeHeader && !hideTitle && !isOpenMobile && <NavHeader dots={dots} />}
                <NavDesktop />
                <NavMobile onOpenChange={setIsOpenMobile} isCollapsed={hideTitle} />
            </motion.div></nav>
        </AnimatePresence>

    )
}
