/* Navigation 
* top desktop navigation bar and mobile navigation dropdown
*/

// packages 
import React from 'react'
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
export default function NavDesktop({
    dots = true,
    hideTitle = false
}: {
    dots?: boolean,
    hideTitle?: boolean
}) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <div className={css['nav__desktop']}>
            <div className={css['nav--collapsed_title']}>
                <Link to="/"><h1>Andrew Cui</h1></Link>
            </div>
            <div className={css.nav__desktop_items}>
                {pagesData.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className={css.nav__desktop_item}><Hyperlink
                                text={item.title}
                                href={item.link}
                                classes={
                                    clsx(
                                        css.nav__desktop_link)}
                                active={(currentPage === item.link || '/' + currentPage === item.link)}
                            />
                            </div>
                            {(dots && index < pagesData.length - 1) && (<i className="bi bi-dot"></i>)}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}