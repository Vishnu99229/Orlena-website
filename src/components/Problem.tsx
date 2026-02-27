import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

const problems = [
    {
        icon: <Users className="w-8 h-8 text-red-500" />,
        title: "Staff Forget to Upsell",
        description: "Busy waiters often miss the chance to suggest high-margin add-ons, leaving money on the table."
    },
    {
        icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
        title: "Missed High-Margin Items",
        description: "Customers stick to what they know and miss out on your profitable specials and sides."
    },
    {
        icon: <TrendingDown className="w-8 h-8 text-gray-500" />,
        title: "No Customer Data",
        description: "Without data on preferences, you can't personalize the experience or improve your menu."
    }
];

export const Problem: React.FC = () => {
    return (
        <Section background="beige" className="relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Static Menus Don't <span className="text-primary">Increase Revenue.</span>
                </h2>
                <p className="text-xl text-text">
                    Traditional menus and basic QR codes are passive. They don't sell for you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {problems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-text leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
