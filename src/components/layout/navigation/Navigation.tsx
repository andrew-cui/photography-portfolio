/* Navigation 
 * top desktop navigation bar and mobile navigation dropdown
 */

// packages 
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

// components, styles & data
import { NavHeader, NavDesktop, NavMobile } from '@components/layout/navigation'
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
    const isHome = location.pathname === "/";
    const [hideTitle, setHideTitle] = useState(false);
    const [isOpenMobile, setIsOpenMobile] = useState(false);

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
        return () => { window.removeEventListener("scroll", onScroll) };
    }, [isHome])

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={isHome ? "home" : "other"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={clsx(
                    css.nav,
                    (hideTitle || isOpenMobile) && css['nav--collapsed'])}
            >
                {isHome && !hideTitle && !isOpenMobile && <NavHeader dots={dots} />}
                <NavDesktop />
                <NavMobile onOpenChange={setIsOpenMobile} isCollapsed={hideTitle} />
            </motion.div>
        </AnimatePresence>
    )
}
