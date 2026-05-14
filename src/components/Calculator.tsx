import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import SEO from './SEO';

const fmt = (n: number) => Math.round(n).toLocaleString('en-IN');

export const Calculator: React.FC = () => {
    const [tables, setTables] = useState('');
    const [bill, setBill] = useState('');
    const [hasCalculated, setHasCalculated] = useState(false);
    
    // WhatsApp lead capture state
    const [whatsapp, setWhatsapp] = useState('');
    const [whatsappError, setWhatsappError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);



    useEffect(() => {
        const stored = localStorage.getItem('orlena_lead_whatsapp');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (parsed && parsed.number) {
                    setIsSubmitted(true);
                    setHasCalculated(true);
                }
            } catch (e) {
                // Ignore parse errors
            }
        }
    }, []);

    const tablesNum = parseInt(tables || '0', 10) || 0;
    const billNum = parseInt(bill || '0', 10) || 0;

    const uplift = 0.23;
    const newBill = billNum * (1 + uplift);
    const extraPerTable = newBill - billNum;
    const extraPerDay = extraPerTable * tablesNum;
    const extraPerMonth = extraPerDay * 30;
    const extraPerYear = extraPerDay * 365;

    const currentDaily = tablesNum * billNum;
    const orlenaDaily = tablesNum * newBill;
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
        { label: 'Per Table', without: billNum, withO: Math.round(newBill), missing: Math.round(extraPerTable) },
        { label: 'Per Day', without: currentDaily, withO: Math.round(orlenaDaily), missing: Math.round(extraPerDay) },
        { label: 'Per Month', without: currentMonthly, withO: Math.round(orlenaMonthly), missing: Math.round(extraPerMonth) },
        { label: 'Per Year', without: currentYearly, withO: Math.round(orlenaYearly), missing: Math.round(extraPerYear) },
    ];

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Step 1: Open WhatsApp FIRST - before anything else - browsers only allow
        // window.open() as the direct first action of a click handler
        const number = whatsapp.trim().replace(/\s|-/g, "");
        const missedText = extraPerMonth ? Math.round(extraPerMonth).toLocaleString('en-IN') : "unknown";
        const now = new Date();
        const timeString = now.toLocaleString('en-IN', {
            day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit', hour12: true
        });

        const message = `🔔 NEW LEAD from Orlena Calculator!\n\nPhone: ${number || "not entered yet"}\nMissed Revenue: ₹${missedText}/month\nTime: ${timeString}\n\nCall them now!`;

        window.open(
            `https://wa.me/919880622570?text=${encodeURIComponent(message)}`,
            '_blank'
        );

        // Step 2: NOW do validation
        const digitsOnly = number.replace(/[^0-9]/g, "");
        if (digitsOnly.length < 10) {
            setWhatsappError("Please enter a valid WhatsApp number");
            return;
        }

        // Step 3: Save to localStorage
        localStorage.setItem('orlena_lead_whatsapp', JSON.stringify({
            number: number,
            missedRevenue: Math.round(extraPerMonth),
            timestamp: new Date().toISOString()
        }));

        // Step 4: Show success state
        setIsSubmitted(true);
        setWhatsappError("");
    };

    const seoChips = [
        'Restaurant Revenue Calculator India',
        'Cafe Average Order Value Calculator',
        'Missed Revenue Calculator',
        'Restaurant Upsell Calculator India',
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
              title="Restaurant AOV Calculator | Free Revenue Lift Estimator | Orlena"
              description="Calculate exactly how much revenue your cafe is losing to missed upsells. Free interactive AOV calculator — see your potential revenue lift with AI upselling in 60 seconds."
              canonical="https://orlena.talk/calculator"
            />
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes orlena-pulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.5); }
                    50% { box-shadow: 0 0 0 12px rgba(255, 107, 53, 0); }
                }
            `}} />
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
                        How Much Money Did Your Restaurant Lose This Week?
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-[#94A3B8] text-base md:text-lg mx-auto max-w-[600px] mb-8"
                    >
                        Every table that leaves without ordering a dessert, an add-on, or an upgrade is money gone forever. Find out exactly how much in 30 seconds.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        <span className="bg-[#FF6B35] text-white text-xs md:text-sm font-medium rounded-full px-4 py-1">23% Average Order Value Increase</span>
                        <span className="bg-[#FF6B35] text-white text-xs md:text-sm font-medium rounded-full px-4 py-1">Trusted by Bangalore Cafes</span>
                        <span className="bg-[#FF6B35] text-white text-xs md:text-sm font-medium rounded-full px-4 py-1">Free. No signup needed.</span>
                    </motion.div>
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
                                type="text"
                                placeholder="e.g. 40"
                                value={tables}
                                onChange={(e) => {
                                    setTables(e.target.value.replace(/[^0-9]/g, ''));
                                    setHasCalculated(false);
                                }}
                                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1A1A2E] text-lg font-semibold focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#1A1A2E] mb-2 uppercase tracking-wider">
                                Average bill size
                            </label>
                            <input
                                id="bill-input"
                                type="text"
                                placeholder="e.g. 450"
                                value={bill}
                                onChange={(e) => {
                                    setBill(e.target.value.replace(/[^0-9]/g, ''));
                                    setHasCalculated(false);
                                }}
                                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1A1A2E] text-lg font-semibold focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all"
                            />
                        </div>

                        {!hasCalculated && (
                            <div className="md:col-span-2 flex justify-center mt-6">
                                <button
                                    onClick={() => setHasCalculated(true)}
                                    className="w-full md:w-auto min-w-[300px] bg-[#FF6B35] text-white font-bold text-xl py-4 rounded-xl transition-all"
                                    style={{ animation: 'orlena-pulse 2s infinite' }}
                                >
                                    Calculate
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Showing results conditionally */}
            {hasCalculated && (
                <>
                    {/* FOMO Table Section */}
                    <section className="py-8 md:py-12">
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
                                                    <td className="px-6 py-4 text-right text-[#1A1A2E]">₹ {fmt(row.without)}</td>
                                                    <td className="px-6 py-4 text-right text-[#1D9E75] font-bold">₹ {fmt(row.withO)}</td>
                                                    <td className="px-6 py-4 text-right text-[#E24B4A] font-bold">₹ {fmt(row.missing)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Results / Urgency Box */}
                    <section className="py-4 md:py-6">
                        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                            <motion.div
                                {...fadeUp}
                                className="bg-white border-2 border-gray-100 rounded-2xl p-8 md:p-12 text-center shadow-xl"
                            >
                                <p className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-6">
                                    You're missing ₹{fmt(extraPerMonth)}/month
                                </p>
                                <p className="text-[#E24B4A] italic text-base md:text-lg mb-2">
                                    This is revenue walking out your door every single month - without a single extra customer.
                                </p>
                                <p className="text-[#1D9E75] text-sm md:text-base">
                                    Most restaurants recover this within the first 2 weeks of using Orlena.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Lead Capture Section */}
                    <section className="py-4 md:py-6">
                        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                            <motion.div
                                {...fadeUp}
                                className="bg-[#16213E] border-l-4 border-l-[#1D9E75] rounded-xl p-6 mt-8 shadow-xl"
                            >
                                {isSubmitted ? (
                                    <div className="text-center py-8">
                                        <svg className="w-12 h-12 text-[#1D9E75] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-[#1D9E75] font-bold text-xl md:text-2xl mb-2">Perfect! Vishnu will call you shortly.</p>
                                        <p className="text-[#94A3B8] text-sm md:text-base">Keep your phone close.</p>
                                    </div>
                                ) : (
                                    <div className="max-w-xl mx-auto xl:max-w-2xl text-center">
                                        <h3 className="text-white font-bold text-xl md:text-2xl mb-6">
                                            Your cafe is losing ₹{fmt(extraPerMonth)}/month. Let's fix that this week.
                                        </h3>
                                        <form onSubmit={handleWhatsAppSubmit} className="max-w-md mx-auto">
                                            <div className="mb-4 text-left">
                                                <input
                                                    type="tel"
                                                    value={whatsapp}
                                                    onChange={(e) => setWhatsapp(e.target.value)}
                                                    placeholder="WhatsApp number - we'll call you, not spam you"
                                                    className="w-full bg-[#1A1A2E] border border-[#1D9E75]/40 focus:border-[#1D9E75] focus:ring-1 focus:ring-[#1D9E75] text-white rounded-lg px-4 py-3 outline-none transition-colors text-base"
                                                />
                                                {whatsappError && <p className="text-[#E24B4A] text-sm mt-2">{whatsappError}</p>}
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full bg-[#1D9E75] hover:bg-[#15825d] text-white font-bold py-3 rounded-xl transition-colors"
                                            >
                                                Call Me - Show Me How to Fix This
                                            </button>
                                        </form>
                                    </div>
                                )}
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
                </>
            )}

            {/* CTA Section (Always visible at the bottom) */}
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

            {/* SEO Content Section */}
            <section className="mt-16 border-t border-[#ffffff10] bg-[#16213E] py-12 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-white text-2xl font-bold text-center mb-6">
                        Free Restaurant Revenue Calculator for Indian Cafe and Restaurant Owners
                    </h2>

                    <p className="text-[#94A3B8] text-base leading-relaxed text-center max-w-2xl mx-auto mb-6">
                        This free restaurant revenue calculator is built specifically for cafe and restaurant owners in India. Enter your average tables served per day and your current average order value to instantly calculate how much revenue your restaurant is missing every month from upselling gaps. No signup required, no email needed - just two numbers and your missed revenue figure appears in seconds.
                    </p>

                    <p className="text-[#94A3B8] text-base leading-relaxed text-center max-w-2xl mx-auto mb-6">
                        Most cafes and restaurants in India are missing between 20% and 30% of potential revenue on every single order. This missed revenue calculator shows you exactly what that gap looks like in rupees for your specific business. Whether you run a small cafe in Koramangala, a multi-outlet restaurant in Indiranagar, or a quick service restaurant anywhere in Bangalore, this calculator gives you your real number in under 30 seconds.
                    </p>

                    <p className="text-[#94A3B8] text-base leading-relaxed text-center max-w-2xl mx-auto mb-8">
                        Once you know your missed revenue number, Orlena can help you recover it. Orlena is an AI-powered QR menu upselling system built for Indian restaurants and cafes. It automatically cross-sells and recommends high-margin items through your QR menu, increasing average order value by an average of 23% without any staff training or additional hiring. Use this calculator as your starting point to understand the revenue opportunity, then see how Orlena captures it for your restaurant.
                    </p>

                    <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 justify-center">
                        {seoChips.map((chip) => (
                            <span
                                key={chip}
                                className="bg-[#1A1A2E] border border-[#ffffff15] text-[#94A3B8] text-sm px-4 py-2 rounded-full text-center"
                            >
                                {chip}
                            </span>
                        ))}
                    </div>

                    <p className="text-[#ffffff40] text-xs text-center mt-6">
                        Trusted by cafe and restaurant owners in Bangalore, India.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};
