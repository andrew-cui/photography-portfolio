import React, { createContext, useContext, useState, ReactNode } from 'react';

type PackageType = 'essential' | 'signature';

interface BookingContextType {
    isOpen: boolean;
    openModal: (selectedPackage?: PackageType) => void;
    closeModal: () => void;
    selectedPackage: PackageType;
    setSelectedPackage: (pkg: PackageType) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<PackageType>('signature');

    const openModal = (pkg: PackageType = 'signature') => {
        setSelectedPackage(pkg);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    return (
        <BookingContext.Provider value={{
            isOpen,
            openModal,
            closeModal,
            selectedPackage,
            setSelectedPackage
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};
