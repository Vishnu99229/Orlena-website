import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
    const features = [
        "Intelligent Upsell Engine",
        "WhatsApp Order Notifications",
        "Real-Time Analytics Dashboard",
        "Multi-Table QR System",
        "Behavioral Learning",
        "Menu Management",
        "Inventory Sync",
        "Customer Feedback Loop"
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-dark-brown font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Everything You Need to Scale
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Powerful features designed to simplify operations and maximize profit.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4">
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
