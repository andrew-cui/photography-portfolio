/* IconButton 
 * ui component to show a rounded button with an optional logo used across the site
 */

// packages 
import { ReactNode, React } from 'react'
import clsx from 'clsx'

type IconButtonProps = {
    icon?: ReactNode;
    label: string;
    variant?: string;
    iconAfterText?: boolean;
    type?: "button" | "submit" | "reset";
}

// render
const IconButton: React.FC<IconButtonProps> = ({
    icon,
    label = '',
    iconAfterText = false, // if true, place icon second
    variant,
    type
}) => {
    return (
        <button type={type} className={clsx(
            'iconButton', 
            variant && 'iconButton--' + variant)}>
            {!iconAfterText && icon && <span>{icon}</span>}
            <h4>{label}</h4>
            {iconAfterText && icon && <span>{icon}</span>}
        </button>
    )
}
export default IconButton