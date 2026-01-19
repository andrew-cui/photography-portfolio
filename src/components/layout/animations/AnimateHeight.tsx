import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimateHeightProps {
    children: ReactNode;
    show: boolean;
    duration?: number;
    className?: string;
}

/**
 * Utility for accordion-style height transitions.
 * Uses a premium cubic-bezier easing [0.16, 1, 0.3, 1].
 */
export const AnimateHeight: React.FC<AnimateHeightProps> = ({
    children,
    show,
    duration = 0.4,
    className
}) => {
    return (
        <AnimatePresence initial={false}>
            {show && (
                <motion.div
                    initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
                    className={className}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
