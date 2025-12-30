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
    export default function NavDesktop ({
        dots = true,
        hideTitle = false
    } : {
        dots?: boolean,
        hideTitle?: boolean
    }) {
        const navigate = useNavigate();
        const location = useLocation();
        const currentPage = location.pathname;
        const [isOpenMobile, setIsOpen] = useState(false);
        const toggleMobileNavbar = () => {  setIsOpen(!isOpenMobile)    }

        return (
            <div className={css['nav__desktop']}>
                <div className={css['nav--collapsed_title']}>
                    <h1>Andrew Cui</h1>
                </div>
                <div className={css.nav__desktop_items}>
                    {pagesData.map((item, index) => {
                        return (
                            <><div key={index} className={css.nav__desktop_item}><Hyperlink
                                text = {item.title}
                                href = {item.link}
                                classes = {
                                    clsx(
                                        css.nav__desktop_link)} 
                                active = {(currentPage === item.link || '/' + currentPage === item.link)}
                            />
                            </div>
                            {(dots && index < pagesData.length - 1) && (<i className="bi bi-dot"></i>)}
                            </>
                        )
                    })}
                </div>
            </div>
        )
    }

                // if(item.dropdown.length > 0) {
                //     return (
                //         <div key={index} className={css['nav__desktop__item_container']}>
                //         <div className={css['nav__desktop__books']}>
                //             <Hyperlink
                //                 text = {item.title}
                //                 href = {item.link}
                //                 classes = {
                //                     clsx(
                //                         css['nav__desktop__link'])} 
                //                 active = {(currentPage === item.link || '/' + currentPage === item.link)}
                //             />
                //             <div className={css['nav__desktop__books_menu']}>
                //             {/* {books.filter(book => book.nav).map((book, bookIndex) => (
                //                 <Hyperlink
                //                     key = {bookIndex}
                //                     text = {<>{book.title}</>}
                //                     href = {item.link}
                //                     classes = {
                //                         clsx(item.classes,
                //                             css['nav__desktop__link'],
                //                             css['nav__desktop__link_books'])} 
                //                     onClick = {() => {
                //                         navigate("/books", {    state: { scrollTo: book.html_id }   })
                //                     }}
                //                 />
                //             ))} */}
                //             </div>
                //         </div>
                //         {dots && (<i className="bi bi-dot"></i>)}
                //             </div>
                //     );
                // }
