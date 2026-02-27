import React, { useState } from 'react';

const BookingForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        restaurantName: '',
        phone: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you! We will contact you shortly.');
    };

    return (
        <section className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        See It Live in Action
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        Stop leaving money on the table. Let us show you how Orlena pays for itself.
                    </p>
                </div>
                <div className="mt-12">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-warm-yellow focus:border-warm-yellow border-gray-300 rounded-md border"
                                    required
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700">
                                Restaurant Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="restaurantName"
                                    id="restaurantName"
                                    value={formData.restaurantName}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-warm-yellow focus:border-warm-yellow border-gray-300 rounded-md border"
                                    required
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-warm-yellow focus:border-warm-yellow border-gray-300 rounded-md border"
                                    required
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-warm-yellow focus:border-warm-yellow border-gray-300 rounded-md border"
                                    required
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dark-brown hover:bg-brown-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warm-yellow transition-colors duration-200"
                            >
                                Book My Demo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
