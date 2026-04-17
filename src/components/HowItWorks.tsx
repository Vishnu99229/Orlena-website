import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { QrCode, Sparkles, BarChart3 } from 'lucide-react';

const steps = [
    {
        icon: <QrCode className="w-8 h-8 text-primary" />,
        step: "Step 01",
        title: "Customer Begins Ordering",
        description: "The moment they start ordering, Orlena begins noticing. No app download, no friction, just presence at the table."
    },
    {
        icon: <Sparkles className="w-8 h-8 text-primary" />,
        step: "Step 02",
        title: "Orlena Learns And Remembers",
        description: "Every order, pairing, and visit builds a deeper understanding of who the customer is. Personality, taste, rhythm, mood, all held in memory."
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-primary" />,
        step: "Step 03",
        title: "Retention Deepens, AOV Lifts",
        description: "Customers return more often because the cafe starts feeling like it knows them. And when recommendations actually fit, they accept them gratefully."
    }
];

export const HowItWorks: React.FC = () => {
    return (
        <Section background="beige" id="how-it-works">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    How <span className="text-primary">Orlena</span> Works
                </h2>
                <p className="text-xl text-text">
                    Three steps. Zero training. Customer intelligence from day one.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connector Line (Desktop only) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-orange-200 -z-10" />

                {steps.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-orange-50 relative"
                    >
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                            {item.icon}
                        </div>
                        <span className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-2">{item.step}</span>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-text">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Dashboard Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
                <div className="bg-secondary text-white p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-sm font-medium opacity-70">Orlena Dashboard</div>
                    <div className="w-4" />
                </div>
                <div className="bg-gray-50 p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
                        <h3 className="text-3xl font-bold text-gray-900">$12,450</h3>
                        <span className="text-green-500 text-sm font-medium">↑ 12% vs last week</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500 mb-1">Upsell Revenue</p>
                        <h3 className="text-3xl font-bold text-primary">$2,840</h3>
                        <span className="text-green-500 text-sm font-medium">↑ 24% vs last week</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500 mb-1">Avg. Order Value</p>
                        <h3 className="text-3xl font-bold text-gray-900">$42.50</h3>
                        <span className="text-green-500 text-sm font-medium">↑ 18% vs last week</span>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};
