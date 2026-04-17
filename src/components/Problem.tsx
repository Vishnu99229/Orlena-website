import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

const problems = [
    {
        icon: <Users className="w-8 h-8 text-red-500" />,
        title: "Your Regulars Are Invisible",
        description: "A customer who visits three times a week is just another ticket on the POS. The relationship you have built becomes invisible to your own cafe."
    },
    {
        icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
        title: "No Memory Across Visits",
        description: "Staff cannot hold the preferences of hundreds of regulars in their head. Every visit starts from zero, and every recommendation is a guess."
    },
    {
        icon: <TrendingDown className="w-8 h-8 text-gray-500" />,
        title: "Guesswork At Every Decision",
        description: "Menu design, seasonal offerings, loyalty logic, space planning. Without customer truth, every downstream decision is built on guesswork."
    }
];

export const Problem: React.FC = () => {
    return (
        <Section background="beige" className="relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Customer Experience Today Is <span className="text-primary">Mostly Performed.</span>
                </h2>
                <p className="text-xl text-text">
                    Smiles, ambiance, plating, craft. What almost no cafe has is the next layer. A system that genuinely knows each customer as an individual. Their taste, their rhythm, their mood, the personality behind the order.
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
