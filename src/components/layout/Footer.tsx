/* Footer 
 * footer with social media links
 */

// packages
import clsx from 'clsx'

// components, styles & data
import css from '@styles/components/footer.module.css'
import socials from '@data/socialsData'

// render
export default function Footer() {
    return (
        <footer className={clsx(css.footer)}>
            <div className={css.footer__left_copyright}>&copy; Andrew Cui, 2026</div>
            <div className={css.footer__center_icons}>
                {socials.map((item, index) => (
                    <div key={index} className={css.footer__icon}>
                        <a
                            href={item.href || "#"}
                            target={`${item.label == "home" ? '' : "_blank"}`}
                        >{item.icon}
                        </a>
                    </div>
                ))}
            </div>
            <div className={css.footer__right_details}>New York, NY</div>
        </footer>
    )
}
