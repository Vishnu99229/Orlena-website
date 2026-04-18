import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

const metrics = [
    { value: "10-20%", label: "Increase in Average Order Value" },
    { value: "100%", label: "Tables Covered By Restaurant Ordering System" },
    { value: "0", label: "Staff Training Required For QR Menu Upselling" }
];

export const Results: React.FC = () => {
    return (
        <Section background="dark" className="text-white" id="results">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        <span className="text-primary">Retention That Compounds.</span> <br />
                        AOV That Follows.
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        With Orlena, average order value lifts 10 to 20 percent. Not from pressure or upsell scripts, but from recommendations customers genuinely want. Meanwhile, retention deepens because your cafe starts feeling like it knows them.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                        {metrics.map((metric, index) => (
                            <div key={index}>
                                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2" style={{ whiteSpace: 'nowrap' }}>{metric.value}</h3>
                                <p className="text-gray-400 font-medium">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary opacity-10 blur-[100px] rounded-full" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl relative z-10 w-full"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-white">Performance Overview</h3>
                            <select aria-label="Select time period" className="bg-transparent text-gray-300 border border-gray-600 rounded-lg px-3 py-1 text-sm">
                                <option>This Month</option>
                            </select>
                        </div>

                        {/* Chart Placeholder */}
                        <div className="h-64 flex items-end justify-between space-x-2">
                            {[40, 65, 50, 80, 55, 90, 75].map((height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${height}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-lg relative group"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-secondary text-xs font-bold px-2 py-1 rounded">
                                        ${height * 100}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-gray-500 text-sm">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
