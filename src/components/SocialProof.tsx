import React from 'react';
import { Section } from './ui/Section';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Ebin Thomas",
        role: "CEO, Cafe Muziris (Indiranagar, Bangalore)",
        content: "Orlena elevated our guest experience perfectly. The subtle, personalized suggestions flow naturally with our premium service, while noticeably increasing our revenue.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Arjun Nair",
        role: "Founder, BrewVerve (Kochi)",
        content: "What impressed me most is how elegant the dining feel remains. It's smart hospitality that anticipates guest needs, resulting in better service and higher average order values.",
        image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
        name: "Raghav Reddy",
        role: "Owner, Saffron Yard (Hyderabad)",
        content: "It effortlessly bridges the gap between digital convenience and premium dining. Our guests love the thoughtful additions, and we love the effortless revenue growth.",
        image: "https://randomuser.me/api/portraits/men/86.jpg"
    }
];

export const SocialProof: React.FC = () => {
    return (
        <Section background="beige">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Trusted by Growing Cafes & Restaurants
                </h2>
                <p className="text-text text-lg">
                    Join hundreds of owners who are automating their revenue growth.
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
                                <h4 className="font-bold text-sm text-secondary">{item.name}</h4>
                                <p className="text-xs text-text-light">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
