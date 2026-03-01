import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

const problems = [
    {
        icon: <Users className="w-8 h-8 text-red-500" />,
        title: "Inconsistent Upselling by Staff",
        description: "Your team is busy. Even well-trained servers miss upsell opportunities at 70%+ of tables, costing you revenue every shift."
    },
    {
        icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
        title: "High-Margin Items Go Unnoticed",
        description: "Your most profitable sides, drinks, and desserts sit buried in the menu. Guests default to what they already know."
    },
    {
        icon: <TrendingDown className="w-8 h-8 text-gray-500" />,
        title: "No Structured Guest Data",
        description: "Without behavioral data from every table, there's no system to optimise your menu, pricing, or promotions over time."
    }
];

export const Problem: React.FC = () => {
    return (
        <Section background="beige" className="relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Static QR Menus <span className="text-primary">Leave Money on the Table.</span>
                </h2>
                <p className="text-xl text-text">
                    A PDF on a QR code doesn't upsell, doesn't learn, and doesn't grow your revenue. It's a missed opportunity at every table.
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
