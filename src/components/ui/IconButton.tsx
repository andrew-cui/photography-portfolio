/* IconButton 
 * ui component to show a rounded button with an optional logo used across the site
 */

// packages 
import React, { ReactNode, MouseEventHandler } from 'react'
import clsx from 'clsx'

type IconButtonProps = {
    icon?: ReactNode;
    label: string;
    variant?: string;
    iconAfterText?: boolean;
    type?: "button" | "submit" | "reset";
    key?: string | number;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

// render
const IconButton = ({
    icon,
    label = '',
    iconAfterText = false, // if true, place icon second
    variant,
    type,
    onClick
}: IconButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(
                'iconButton',
                variant && 'iconButton--' + variant)}>
            {!iconAfterText && icon && <span>{icon}</span>}
            <h4>{label}</h4>
            {iconAfterText && icon && <span>{icon}</span>}
        </button>
    )
}
export default IconButton