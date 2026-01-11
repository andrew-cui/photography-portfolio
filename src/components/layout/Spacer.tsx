/* Spacer 
 * custom class for spacing between objects
 */

// packages 
import clsx from 'clsx'

// components, styles & data
import css from '@styles/components/spacer.module.css'

// render

export type SpacerSize = "xs" | "s" | "m" | "l" | "xl" | "none"

export default function Spacer({
    size = "s",
    inline = false
}: {
    size?: SpacerSize
    inline?: boolean
}) {
    return (
        <div className={clsx(
            clsx(
                css.spacer,
                css[`spacer--${size ?? "s"}`],
                inline && css['spacer--inline'])
        )} />)
}