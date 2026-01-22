import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import css from '@styles/components/nav.module.css';
import { Hyperlink } from '@components/index';
import clsx from 'clsx';
import { navigationData, showIcons } from '@data/site/navigationData';
import { useBooking } from '@context/BookingContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavDesktop({
    hideTitle = false
}: {
    hideTitle?: boolean
}) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const { openModal } = useBooking();

    // Auto-collapse dropdown when switching to mobile view
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setActiveCategory(null);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const activeItem = navigationData.find(p => p.title === activeCategory);

    return (
        <div className={css['nav__desktop']}>
            {!hideTitle && (
                <div className={css['nav--collapsed_title']}>
                    <Link to="/"><h1>Andrew Cui</h1></Link>
                </div>
            )}
            <div className={css.nav__desktop_main}>
                <div className={css.nav__desktop_items}>
                    {navigationData.map((item, index) => {
                        const hasDropdown = item.dropdown && item.dropdown.length > 0;
                        const isOpen = activeCategory === item.title;
                        const isBookingLink = item.link === "/book";

                        return (
                            <div key={index} className={css.nav__desktop_item}>
                                <div
                                    className={clsx(
                                        css.nav__desktop_link_wrapper,
                                        isOpen && css['nav__desktop_link_wrapper--open']
                                    )}
                                    onClick={(e) => {
                                        if (isBookingLink) {
                                            e.preventDefault();
                                            openModal();
                                            return;
                                        }
                                        if (hasDropdown) {
                                            e.preventDefault();
                                            setActiveCategory(isOpen ? null : item.title);
                                        } else {
                                            setActiveCategory(null);
                                            navigate(item.link);
                                        }
                                    }}
                                >
                                    <Hyperlink
                                        text={
                                            <>
                                                {showIcons && item.icon && <span className={css.nav__desktop_icon}>{item.icon}</span>}
                                                {item.title}
                                            </>
                                        }
                                        href={hasDropdown ? "#" : item.link}
                                        classes={css.nav__desktop_link}
                                        active={currentPage === item.link || (hasDropdown && item.dropdown.some(d => d.link === currentPage))}
                                        onClick={(e) => {
                                            if (hasDropdown) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                    {hasDropdown && (
                                        <i className={clsx("bi bi-chevron-down", css.nav__desktop_arrow, isOpen && css['nav__desktop_arrow--open'])}></i>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Secondary Navbar */}
                <AnimatePresence>
                    {activeCategory && activeItem?.dropdown && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className={css.nav__secondary}
                        >
                            <div className={css.nav__secondary_items}>
                                {activeItem.dropdown.map((subItem, idx) => (
                                    <Link
                                        key={idx}
                                        to={subItem.link}
                                        className={clsx(
                                            css.nav__secondary_link,
                                            currentPage === subItem.link && css['nav__secondary_link--active']
                                        )}
                                        onClick={() => setActiveCategory(null)}
                                    >
                                        {subItem.title}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}