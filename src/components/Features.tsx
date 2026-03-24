import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
    const features = [
        "Automated Upsells at Every Table",
        "High-Margin Item Promotion",
        "Guest Preference Insights",
        "Zero Hardware Required",
        "Works With Your Existing Operations",
        "WhatsApp Order Notifications",
        "Real-Time Revenue Dashboard",
        "Multi-Table QR System"
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-dark-brown font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Built for Operators Who Care About Revenue
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Everything you need to increase average order value — nothing you don't.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-10 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div key={index} className="relative">
                                <dt>
                                    <CheckCircle className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature}</p>
                                </dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Features;
