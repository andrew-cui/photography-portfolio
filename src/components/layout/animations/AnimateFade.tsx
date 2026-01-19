import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimateFadeProps {
    children: ReactNode;
    show?: boolean;
    duration?: number;
    delay?: number;
    className?: string;
}

/**
 * Standard utility for simple opacity cross-fades.
 */
export const AnimateFade: React.FC<AnimateFadeProps> = ({
    children,
    show = true,
    duration = 0.4,
    delay = 0,
    className
}) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration, delay }}
                    className={className}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
