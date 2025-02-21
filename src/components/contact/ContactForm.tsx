"use client";
import { useState } from 'react';
import { Loader } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSubmissions } from '@/hooks/useSubmissions';
import { SubmissionType } from '@/app/api/external/omnigateway/types/submissions';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const { submitForm, isLoading: isSubmitting } = useSubmissions();

    const subjectOptions = [
        'General',
        'Sales/Partnership',
        'Support',
        'Media/PR'
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.subject) {
            newErrors.subject = 'Please select a subject';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please check the form for errors');
            return;
        }

        try {
            // Split name into first and last name
            const nameParts = formData.name.trim().split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts.slice(1).join(' ');

            await submitForm({
                firstName,
                lastName,
                email: formData.email,
                content: formData.message,
                type: SubmissionType.CONTACT,
                metadata: {
                    subject: formData.subject,
                    timestamp: new Date(),
                    userAgent: window.navigator.userAgent,
                    ipHash: '' // This will be handled by the backend
                }
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch {
            // Error handling is done in the hook
        }
    };

    const inputStyles = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm text-gray-900 placeholder-gray-500";
    const errorStyles = "text-red-500 text-sm mt-1";

    return (
        <div className="bg-gray-50 py-8">
            <ToastContainer position="top-right" autoClose={5000} />
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
                        {/* Form fields remain the same */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                required
                                className={`${inputStyles} ${errors.name ? 'border-red-500' : ''}`}
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                            {errors.name && <p className={errorStyles}>{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                required
                                className={`${inputStyles} ${errors.email ? 'border-red-500' : ''}`}
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                            {errors.email && <p className={errorStyles}>{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Subject *
                            </label>
                            <select
                                required
                                className={`${inputStyles} ${errors.subject ? 'border-red-500' : ''}`}
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            >
                                <option value="">Select subject</option>
                                {subjectOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                            {errors.subject && <p className={errorStyles}>{errors.subject}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message *
                            </label>
                            <textarea
                                required
                                rows={4}
                                className={`${inputStyles} ${errors.message ? 'border-red-500' : ''}`}
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                            {errors.message && <p className={errorStyles}>{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 px-6 rounded-lg text-lg font-medium shadow-sm flex items-center justify-center gap-2
                                ${isSubmitting
                                ? 'bg-[#0A0A0A] cursor-not-allowed'
                                : 'bg-[#0A0A0A] hover:bg-[#171717]'} 
                                text-white transition-colors`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader className="animate-spin" size={20} />
                                    Sending...
                                </>
                            ) : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;