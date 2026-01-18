/* Navigation 
* top desktop navigation bar and mobile navigation dropdown
*/

// packages 
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

// components, styles & data
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateFadeIn } from '@components/layout/animations/AnimateFadeIn'
import css from '@styles/components/nav.module.css'

import pagesData from '@data/pagesData.json'

// render
export default function NavMobile({
    onOpenChange,
    isCollapsed = false
}: {
    onOpenChange?: (open: boolean) => void;
    isCollapsed?: boolean;
}) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;
    const [isOpenMobile, setIsOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const toggleMobileNavbar = () => {
        const newState = !isOpenMobile;
        setIsOpen(newState);
        onOpenChange?.(newState);
        if (isOpenMobile) setExpandedCategory(null);
    }

    // Auto-collapse mobile menu when switching to desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
                setExpandedCategory(null);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleItemClick = (item: any) => {
        const hasDropdown = item.dropdown && item.dropdown.length > 0;
        if (hasDropdown) {
            setExpandedCategory(expandedCategory === item.title ? null : item.title);
        } else {
            toggleMobileNavbar();
            navigate(item.link);
        }
    }

    return (
        <div className={clsx(
            css['nav__mobile'],
            isOpenMobile && css['nav__mobile--open'])}>
            {(currentPage !== '/' || isCollapsed || isOpenMobile) && <div className={css['nav--collapsed_title']}>
                <Link to="/"><h1>Andrew Cui</h1></Link>
            </div>}
            <div className={css.nav__mobile_toggle}>
                <button className={clsx(
                    css['nav__mobile_toggle_button'],
                    isOpenMobile && css['nav__mobile_toggle_button_show'])} onClick={toggleMobileNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                        <path d="M 0 25 L 50 25" stroke="currentColor" strokeWidth="3" transform="rotate(45 25 25)" />
                        <path d="M 0 25 L 50 25" stroke="currentColor" strokeWidth="3" transform="rotate(-45 25 25)" />
                    </svg>
                </button>
                <button className={clsx(
                    css['nav__mobile_toggle_button'],
                    !isOpenMobile && css['nav__mobile_toggle_button_show'])} onClick={toggleMobileNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                        <path fill="currentColor" d="M 0 16 L 0 18 L 50 18 L 50 16 Z M 0 32 L 0 34 L 50 34 L 50 32 Z"></path>
                    </svg>
                </button>
            </div>
            {isOpenMobile && (
                <AnimateFadeIn duration={0.25} ReactDOMElement={<div className={css['nav__mobile_menu']}>
                    {pagesData.map((item, index) => {
                        const hasDropdown = item.dropdown && item.dropdown.length > 0;
                        const isExpanded = expandedCategory === item.title;

                        return (
                            <div key={index}>
                                <div className={css.nav__mobile_link} onClick={() => handleItemClick(item)}>
                                    <h3 className={clsx(
                                        css['nav__mobile_link_text'],
                                        (currentPage === item.link || (hasDropdown && item.dropdown.some((d: any) => d.link === currentPage))) && css['nav__mobile_link_text--active']
                                    )}>
                                        {item.title}
                                        {hasDropdown && (
                                            <i className={clsx("bi bi-chevron-down", css.nav__mobile_arrow, isExpanded && css['nav__mobile_arrow--open'])}></i>
                                        )}
                                    </h3>
                                </div>
                                <AnimatePresence>
                                    {hasDropdown && isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className={css.nav__mobile_submenu}
                                        >
                                            {item.dropdown.map((subItem: any, idx: number) => (
                                                <Link
                                                    key={idx}
                                                    to={subItem.link}
                                                    className={clsx(
                                                        css.nav__mobile_sublink,
                                                        currentPage === subItem.link && css['nav__mobile_sublink--active']
                                                    )}
                                                    onClick={toggleMobileNavbar}
                                                >
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>} />
            )}
        </div>
    )
}
