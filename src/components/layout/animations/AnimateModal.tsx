import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimateModalProps {
    children: ReactNode;
    show: boolean;
    onClose: () => void;
    overlayClassName?: string;
    modalClassName?: string;
}

/**
 * Specialized animation wrapper for modals and lightboxes.
 * Includes a scale and vertical entrance.
 */
export const AnimateModal: React.FC<AnimateModalProps> = ({
    children,
    show,
    onClose,
    overlayClassName,
    modalClassName
}) => {
    return (
        <AnimatePresence>
            {show && (
                <div
                    className={overlayClassName}
                    onClick={onClose}
                    style={{ position: 'fixed', inset: 0, zIndex: 1000 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className={modalClassName}
                        onClick={e => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
