import React from 'react';
import { Section } from './ui/Section';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Ebin Thomas",
        role: "CEO, Cafe Muziris (Indiranagar, Bangalore)",
        content: "Our average order value went up within the first week. Orlena quietly promotes our high-margin items without changing how our staff operates. It just works.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Arjun Nair",
        role: "Founder, BrewVerve (Kochi)",
        content: "We were leaving money on the table at every single table. Orlena fixed that, automated upsells, zero friction, and our guests actually appreciate the suggestions.",
        image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
        name: "Raghav Reddy",
        role: "Owner, Saffron Yard (Hyderabad)",
        content: "No hardware to install, no staff to train. We saw measurable revenue lift in the first month. Orlena pays for itself many times over.",
        image: "https://randomuser.me/api/portraits/men/86.jpg"
    }
];

export const SocialProof: React.FC = () => {
    return (
        <Section background="beige">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Operators Who <span className="text-primary">Increase Average Order Value</span> With Orlena
                </h2>
                <p className="text-text text-lg">
                    Restaurant and café owners seeing measurable revenue results.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-text mb-6 italic">"{item.content}"</p>
                        <div className="flex items-center">
                            {/* <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full mr-3" /> */}
                            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm text-secondary">{item.name}</h3>
                                <p className="text-xs text-text-light">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
