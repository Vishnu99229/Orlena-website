import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const fmt = (n: number) => Math.round(n).toLocaleString('en-IN');

export const Calculator: React.FC = () => {
    const [tables, setTables] = useState(60);
    const [bill, setBill] = useState(400);

    const uplift = 0.23;
    const newBill = bill * (1 + uplift);
    const extraPerTable = newBill - bill;
    const extraPerDay = extraPerTable * tables;
    const extraPerMonth = extraPerDay * 30;
    const extraPerYear = extraPerDay * 365;

    const currentDaily = tables * bill;
    const orlenaDaily = tables * newBill;
    const currentMonthly = currentDaily * 30;
    const orlenaMonthly = orlenaDaily * 30;
    const currentYearly = currentDaily * 365;
    const orlenaYearly = orlenaDaily * 365;

    const fadeUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
    };

    const tableRows = [
        { label: 'Per Table', without: bill, withO: Math.round(newBill), missing: Math.round(extraPerTable) },
        { label: 'Per Day', without: currentDaily, withO: Math.round(orlenaDaily), missing: Math.round(extraPerDay) },
        { label: 'Per Month', without: currentMonthly, withO: Math.round(orlenaMonthly), missing: Math.round(extraPerMonth) },
        { label: 'Per Year', without: currentYearly, withO: Math.round(orlenaYearly), missing: Math.round(extraPerYear) },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-[#1A1A2E]">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
                    >
                        How Much Revenue Are You{' '}
                        <span className="text-[#FF6B35]">Leaving On The Table?</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-lg md:text-xl text-gray-300"
                    >
                        Enter your cafe's numbers and see exactly what you're missing every single day
                    </motion.p>
                </div>
            </section>

            {/* Input Section */}
            <section className="py-12 md:py-16 bg-[#F9F9F9]">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-[#1A1A2E] mb-2 uppercase tracking-wider">
                                Tables served per day
                            </label>
                            <input
                                id="tables-input"
                                type="number"
                                placeholder="e.g. 60"
                                value={tables}
                                onChange={(e) => setTables(Number(e.target.value) || 0)}
                                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1A1A2E] text-lg font-semibold focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#1A1A2E] mb-2 uppercase tracking-wider">
                                Average bill size
                            </label>
                            <input
                                id="bill-input"
                                type="number"
                                placeholder="e.g. 400"
                                value={bill}
                                onChange={(e) => setBill(Number(e.target.value) || 0)}
                                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1A1A2E] text-lg font-semibold focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FOMO Table Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <motion.div {...fadeUp}>
                        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
                            <table className="w-full min-w-[600px]" id="fomo-table">
                                <thead>
                                    <tr className="bg-[#1A1A2E]">
                                        <th className="text-left px-6 py-4 text-white font-semibold text-sm uppercase tracking-wider"></th>
                                        <th className="text-right px-6 py-4 text-white font-semibold text-sm uppercase tracking-wider">Without Orlena</th>
                                        <th className="text-right px-6 py-4 text-[#1D9E75] font-semibold text-sm uppercase tracking-wider">With Orlena (+23%)</th>
                                        <th className="text-right px-6 py-4 text-[#E24B4A] font-semibold text-sm uppercase tracking-wider">You're Missing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableRows.map((row, i) => (
                                        <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                                            <td className="px-6 py-4 font-semibold text-[#1A1A2E]">{row.label}</td>
                                            <td className="px-6 py-4 text-right text-[#1A1A2E]">Rs {fmt(row.without)}</td>
                                            <td className="px-6 py-4 text-right text-[#1D9E75] font-bold">Rs {fmt(row.withO)}</td>
                                            <td className="px-6 py-4 text-right text-[#E24B4A] font-bold">Rs {fmt(row.missing)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FOMO Urgency Box */}
            <section className="py-4 md:py-6">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <motion.div
                        {...fadeUp}
                        className="bg-[#E24B4A] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
                    >
                        <p className="text-lg md:text-xl font-medium mb-2 opacity-90">
                            Every day without Orlena costs you
                        </p>
                        <p className="text-4xl md:text-6xl font-bold mb-3">
                            Rs {fmt(extraPerDay)}
                        </p>
                        <p className="text-base md:text-lg opacity-80">
                            That's Rs {fmt(extraPerMonth)} this month alone — gone forever
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Big Win Box */}
            <section className="py-4 md:py-6">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <motion.div
                        {...fadeUp}
                        className="bg-[#FF6B35] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
                    >
                        <p className="text-lg md:text-xl font-medium mb-2">
                            With Orlena you make an extra
                        </p>
                        <p className="text-4xl md:text-6xl font-bold mb-3">
                            Rs {fmt(extraPerMonth)} per month
                        </p>
                        <p className="text-base md:text-lg">
                            Rs {fmt(extraPerYear)} additional revenue per year from the same customers you already have
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Social Proof Line */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <motion.p
                        {...fadeUp}
                        className="text-lg md:text-xl text-[#1A1A2E] font-medium"
                    >
                        Join restaurants and cafes already increasing their average order value with Orlena
                    </motion.p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 md:py-12 pb-16 md:pb-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <motion.div {...fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                        <Button
                            size="lg"
                            href="https://cal.com/vishnu-rajan-3siibd/secret?overlayCalendar=true"
                            target="_blank"
                            className="!bg-[#FF6B35] hover:!bg-[#e85e2a] !text-white !shadow-lg hover:!shadow-xl"
                        >
                            Book a Free Demo
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            href="https://hello.orlena.talk/#how-it-works"
                            className="!border-[#FF6B35] !text-[#FF6B35] hover:!bg-[#FF6B35]/5"
                        >
                            See How It Works
                        </Button>
                    </motion.div>
                    <p className="text-sm text-gray-400 mt-4">
                        No setup fees. No staff training. Cancel anytime.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};
