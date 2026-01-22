import { useBooking } from '@context/BookingContext';
import css from '@styles/components/booking-modal.module.css';
import clsx from 'clsx';
import { bookingPackages } from '@data/site/bookingData';
import { BookingForm, AnimateModal, Spacer } from '@components/index';

export default function BookingModal() {
    const {
        isOpen,
        closeModal,
        selectedPackage,
        setSelectedPackage
    } = useBooking();

    return (
        <AnimateModal
            show={isOpen}
            onClose={closeModal}
            overlayClassName={css.overlay}
            modalClassName={css.modal}
        >
            <button className={css.closeButton} onClick={closeModal}>
                <i className="bi bi-x"></i>
            </button>


            <div className={css.content}>
                <h2 className={css.title}>Book a Shoot</h2>
                <Spacer size="m" />

                <section className={css.packageSelector}>
                    {bookingPackages.map(pkg => (
                        <div
                            key={pkg.id}
                            className={clsx(
                                css.packageOption,
                                selectedPackage === pkg.id && css.packageOptionActive
                            )}
                            onClick={() => {
                                setSelectedPackage(selectedPackage === pkg.id ? null : (pkg.id as any))
                            }}
                        >
                            {pkg.featured && <div className={css.packageBadge}>Most Popular</div>}
                            <h3 className={css.pkgTitle}>{pkg.title}</h3>
                            <div className={css.pkgPrice}>${pkg.price}</div>
                            <div className={css.pkgDuration}>{pkg.duration}</div>

                            <ul className={css.pkgFeatures}>
                                {pkg.features.map((feature, i) => (
                                    <li key={i}><i className="bi bi-check2"></i> {feature}</li>
                                ))}
                            </ul>

                            <div className={css.selectionButton}>
                                {selectedPackage === pkg.id ? 'Selected' : 'Select'}
                            </div>
                        </div>
                    ))}
                </section>

                <Spacer size="m" />
                <p className={css.customText}>
                    Exact quote will vary based on the event and details - I'll get back to you via email or Instagram!
                </p>
                <Spacer size="m" />

                <BookingForm />
            </div>
        </AnimateModal>
    );
}
