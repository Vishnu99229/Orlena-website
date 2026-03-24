import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { BrainCircuit, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const features = [
    {
        icon: <BrainCircuit className="w-6 h-6" />,
        title: "AI-Powered QR Menu Insights",
        description: "Our AI-powered QR menu tracks ordering patterns across tables and time slots to surface what guests actually want next, capturing every upsell opportunity."
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "High-Margin Item Promotion Restaurant Ready",
        description: "Achieve high-margin item promotion restaurant wide by automatically promoting your most profitable sides, drinks, and desserts at the exact right moment."
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Automated Restaurant Upselling Adapts",
        description: "Powered by smart logic, this automated restaurant upselling learns from guest behavior, improving results daily without any manual input."
    },
];

export const Solution: React.FC = () => {
    return (
        <Section className="overflow-hidden" id="features">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                        <Sparkles size={14} />
                        <span>AI-Powered QR Menu</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        A System Designed To <br />
                        <span className="text-primary">Increase Average Order Value.</span>
                    </h2>

                    <p className="text-xl text-text mb-8 leading-relaxed">
                        If your venue serves 80 tables a day and uses our digital menu upsell to add just ₹60 per order, that’s over ₹1.4 lakh in additional monthly revenue, with zero extra staff effort.
                    </p>

                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start"
                            >
                                <div className="bg-orange-100 p-3 rounded-lg mr-4 text-primary">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                                    <p className="text-text">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Visual Representation */}
                <div className="relative">
                    <div className="absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-br from-orange-50 to-transparent rounded-full opacity-50 blur-3xl" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative z-10"
                    >
                        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Customer Orders</p>
                                <h3 className="text-xl font-bold">Cold Coffee</h3>
                            </div>
                            <ArrowRight className="text-gray-300" />
                            <div className="text-right">
                                <p className="text-sm text-primary font-bold mb-1">Orlena Suggests</p>
                                <h3 className="text-xl font-bold">Chocolate Brownie</h3>
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">+90% Match</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Customer Orders</p>
                                <h3 className="text-xl font-bold">Spicy Pasta</h3>
                            </div>
                            <ArrowRight className="text-gray-300" />
                            <div className="text-right">
                                <p className="text-sm text-primary font-bold mb-1">Orlena Suggests</p>
                                <h3 className="text-xl font-bold">Garlic Bread & Mocktail</h3>
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">+95% Match</span>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 bg-secondary text-white p-4 rounded-xl shadow-lg"
                        >
                            <p className="text-sm font-medium">Avg. Order Value</p>
                            <p className="text-2xl font-bold text-green-400">+18%</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
