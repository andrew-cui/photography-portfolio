import React, { useState } from 'react';
import { useBooking } from '@context/BookingContext';
import { targetEmail } from '@data/site/bookingData';
import css from '@styles/components/booking-modal.module.css';

interface BookingFormProps {
    onSuccess?: () => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
    const { selectedPackage } = useBooking();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        phone: '',
        vision: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSendRequest = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Photography Inquiry - ${formData.name}`;
        const body = `Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Date: ${formData.date}
            Type: ${selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)}

            Details:
            ${formData.vision}`;

        const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;

        if (onSuccess) {
            onSuccess();
        }
    };

    return (
        <form className={css.form} onSubmit={handleSendRequest}>
            <div className={css.formGroup}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className={css.formGroup}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className={css.formGroup}>
                <label>Phone Number</label>
                <input
                    type="phone"
                    name="phone"
                    placeholder="#"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
            </div>
            <div className={css.formGroup}>
                <label>Preferred Date</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                />
            </div>
            <div className={css.formGroup}>
                <label>Tell me about your vision</label>
                <textarea
                    name="vision"
                    placeholder="Location, event details, dates!"
                    value={formData.vision}
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <button type="submit" className={css.submitButton}>
                Send <i className="bi bi-envelope-check"></i>
            </button>
        </form>
    );
}
