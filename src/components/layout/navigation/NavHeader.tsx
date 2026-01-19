/* NavHeader 
 * 
 */

// packages 
import { Link } from 'react-router-dom'
import clsx from 'clsx'

// components, styles & data
import css from '@styles/components/nav.module.css'

// render
export default function NavHeader() {
    return (
        <div className={clsx(
            css.nav__header
        )}>
            <h1 className={css.nav__header_title}><Link to={'/'}>Andrew Cui</Link></h1>
            <h3 className={css.nav__header_subtitle}>Photographer&nbsp;&nbsp;|&nbsp;&nbsp;NYC</h3>
        </div>
    )
}

