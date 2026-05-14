import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from './SEO';

interface Ingredient {
    id: number;
    name: string;
    qty: string;
    unit: string;
    unitPrice: string;
}

const defaultIngredients: Ingredient[] = [
    { id: 1, name: 'Chicken breast', qty: '200', unit: 'g', unitPrice: '0.45' },
    { id: 2, name: 'Cooking oil', qty: '30', unit: 'ml', unitPrice: '0.15' },
    { id: 3, name: 'Spices & masala', qty: '1', unit: 'portion', unitPrice: '25' },
    { id: 4, name: 'Rice', qty: '150', unit: 'g', unitPrice: '0.06' },
    { id: 5, name: 'Vegetables', qty: '100', unit: 'g', unitPrice: '0.08' },
    { id: 6, name: 'Packaging', qty: '1', unit: 'unit', unitPrice: '12' },
];

const fmt = (n: number) => Math.round(n).toLocaleString('en-IN');

export const FoodCostCalculator: React.FC = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>(defaultIngredients);
    const [sellingPrice, setSellingPrice] = useState('350');
    const [hasCalculated, setHasCalculated] = useState(false);
    const [nextId, setNextId] = useState(7);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {

        // FAQ Schema
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the food cost percentage formula?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Food Cost % = (Cost of Ingredients ÷ Menu Selling Price) × 100. For example, if a dish costs ₹120 to make and sells for ₹400, the food cost is 30%."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is a good food cost percentage?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Between 28% and 35% is considered healthy for most restaurants. Below 28% means excellent margins. Above 35% means you should review your pricing or costs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I lower my food cost percentage?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can reduce ingredient costs (negotiate with suppliers, reduce portions), increase selling prices, or eliminate low-margin menu items. Using upselling tools like Orlena can also help by increasing the revenue per order without changing food costs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is food cost the same as COGS?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Food cost specifically covers ingredient costs. COGS (Cost of Goods Sold) can include packaging, napkins, and other supplies. For menu pricing, food cost percentage is the more useful metric."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How often should I calculate food cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ideally weekly. At minimum, monthly. Ingredient prices change, portions drift, and waste adds up. Catching a 5% increase early can save you lakhs per year."
                    }
                }
            ]
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'faq-schema';
        script.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(script);

        return () => {
            const existing = document.getElementById('faq-schema');
            if (existing) existing.remove();
        };
    }, []);

    // Calculations
    const ingredientCosts = ingredients.map(ing => {
        const q = parseFloat(ing.qty) || 0;
        const p = parseFloat(ing.unitPrice) || 0;
        return q * p;
    });
    const totalCost = ingredientCosts.reduce((sum, c) => sum + c, 0);
    const price = parseFloat(sellingPrice) || 0;
    const foodCostPct = price > 0 ? (totalCost / price) * 100 : 0;
    const idealPct = 30;
    const idealCost = price * (idealPct / 100);
    const profitPerPlate = price - totalCost;
    const idealProfit = price - idealCost;
    const profitMargin = price > 0 ? ((price - totalCost) / price) * 100 : 0;
    const idealMargin = 70;
    const lostPerPlate = idealProfit - profitPerPlate;

    const getVerdictColor = (pct: number) => {
        if (pct <= 28) return '#1D9E75';
        if (pct <= 35) return '#1D9E75';
        if (pct <= 45) return '#F59E0B';
        return '#E24B4A';
    };

    const getVerdictLabel = (pct: number) => {
        if (pct <= 28) return 'Excellent';
        if (pct <= 35) return 'Healthy';
        if (pct <= 45) return 'Warning';
        return 'Critical';
    };

    const getVerdictMessage = (pct: number) => {
        if (pct <= 28) return 'Your food cost is well below the benchmark. Great margins! Consider investing the extra into better ingredients or promotions.';
        if (pct <= 35) return "You're in the ideal range. Most profitable restaurants operate in this zone. You're on the right track.";
        if (pct <= 45) return `You're above the healthy range, leaving ₹${fmt(lostPerPlate)} per plate on the table. Consider raising the menu price, reducing portion size, or sourcing cheaper alternatives.`;
        return `This dish is hurting your margins badly. You're losing ₹${fmt(lostPerPlate)} per plate compared to the ideal. Review your pricing, portions, and supplier costs immediately.`;
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { id: nextId, name: '', qty: '', unit: 'g', unitPrice: '' }]);
        setNextId(nextId + 1);
        setHasCalculated(false);
    };

    const removeIngredient = (id: number) => {
        if (ingredients.length > 1) {
            setIngredients(ingredients.filter(ing => ing.id !== id));
            setHasCalculated(false);
        }
    };

    const updateIngredient = (id: number, field: keyof Ingredient, value: string) => {
        setIngredients(ingredients.map(ing => ing.id === id ? { ...ing, [field]: value } : ing));
        setHasCalculated(false);
    };

    const fadeUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
    };

    const faqs = [
        {
            q: 'What is the food cost percentage formula?',
            a: 'Food Cost % = (Cost of Ingredients ÷ Menu Selling Price) × 100. For example, if a dish costs ₹120 to make and sells for ₹400, the food cost is 30%.'
        },
        {
            q: 'What is a good food cost percentage?',
            a: 'Between 28% and 35% is considered healthy for most restaurants. Below 28% means excellent margins. Above 35% means you should review your pricing or costs.'
        },
        {
            q: 'How do I lower my food cost percentage?',
            a: "You can reduce ingredient costs (negotiate with suppliers, reduce portions), increase selling prices, or eliminate low-margin menu items. Using upselling tools like Orlena can also help by increasing the revenue per order without changing food costs."
        },
        {
            q: 'Is food cost the same as COGS?',
            a: 'Food cost specifically covers ingredient costs. COGS (Cost of Goods Sold) can include packaging, napkins, and other supplies. For menu pricing, food cost percentage is the more useful metric.'
        },
        {
            q: 'How often should I calculate food cost?',
            a: 'Ideally weekly. At minimum, monthly. Ingredient prices change, portions drift, and waste adds up. Catching a 5% increase early can save you lakhs per year.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
              title="Food Cost Percentage Calculator | Free Tool for Cafes | Orlena"
              description="Calculate your true food cost percentage and identify high-margin menu items. Free food cost calculator for Indian cafes and restaurants. Includes industry benchmarks."
              canonical="https://orlena.talk/food-cost-calculator"
            />
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes orlena-pulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.5); }
                    50% { box-shadow: 0 0 0 12px rgba(255, 107, 53, 0); }
                }
                .benchmark-bar {
                    position: relative;
                    height: 28px;
                    border-radius: 14px;
                    overflow: visible;
                }
                .benchmark-zone {
                    position: absolute;
                    top: 0;
                    height: 100%;
                }
                .benchmark-marker {
                    position: absolute;
                    top: -6px;
                    width: 4px;
                    height: 40px;
                    border-radius: 2px;
                    transform: translateX(-50%);
                    z-index: 10;
                }
                .benchmark-label {
                    position: absolute;
                    top: -28px;
                    transform: translateX(-50%);
                    font-size: 12px;
                    font-weight: 600;
                    white-space: nowrap;
                }
                .ingredient-row {
                    transition: all 0.2s ease;
                }
                .ingredient-row:hover {
                    background-color: rgba(255, 107, 53, 0.03);
                }
                .faq-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease, padding 0.3s ease;
                }
                .faq-content.open {
                    max-height: 300px;
                }
                @media (max-width: 768px) {
                    .ingredient-grid {
                        grid-template-columns: 1fr;
                        gap: 8px;
                    }
                    .ingredient-grid .cost-col {
                        justify-self: start;
                    }
                }
            `}} />
            <Navbar />

            {/* ============ Section A: Hero ============ */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-[#1A1A2E]">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
                    >
                        Is Your Menu Pricing Killing Your Profits?
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-[#94A3B8] text-base md:text-lg mx-auto max-w-[640px] mb-8"
                    >
                        Most restaurant owners don't know their real food cost percentage. Enter your dish ingredients below — find out in 30 seconds if you're making money or losing it on every plate.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        <span className="bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF6B35] text-xs md:text-sm font-medium rounded-full px-4 py-1.5">
                            Ideal range: 28-35%
                        </span>
                        <span className="bg-[#1D9E75]/15 border border-[#1D9E75]/30 text-[#1D9E75] text-xs md:text-sm font-medium rounded-full px-4 py-1.5">
                            Used by 500+ Indian restaurants
                        </span>
                        <span className="bg-white/10 border border-white/20 text-white/80 text-xs md:text-sm font-medium rounded-full px-4 py-1.5">
                            Free. No signup needed.
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* ============ Section B: Calculator ============ */}
            <section className="py-12 md:py-16 bg-[#F9F9F9]" id="calculator">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <motion.div {...fadeUp}>
                        <h2 className="text-xl md:text-2xl font-bold text-[#1A1A2E] mb-6 text-center">
                            Enter Your Dish Ingredients
                        </h2>

                        {/* Desktop table header */}
                        <div className="hidden md:grid grid-cols-[2fr_1fr_0.8fr_1fr_1fr_auto] gap-3 mb-3 px-2">
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Ingredient</span>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Quantity</span>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Unit</span>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Unit Price (₹)</span>
                            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider text-right">Cost</span>
                            <span className="w-10"></span>
                        </div>

                        {/* Ingredient rows */}
                        <div className="space-y-2 mb-6">
                            {ingredients.map((ing, idx) => {
                                const cost = (parseFloat(ing.qty) || 0) * (parseFloat(ing.unitPrice) || 0);
                                return (
                                    <div key={ing.id} className="ingredient-row bg-white rounded-xl border border-gray-100 shadow-sm p-3 md:p-2">
                                        {/* Mobile label */}
                                        <div className="md:hidden text-xs text-[#64748B] font-medium mb-2">Ingredient {idx + 1}</div>

                                        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_0.8fr_1fr_1fr_auto] gap-2 md:gap-3 items-center">
                                            <input
                                                type="text"
                                                placeholder="Ingredient name"
                                                value={ing.name}
                                                onChange={e => updateIngredient(ing.id, 'name', e.target.value)}
                                                className="col-span-2 md:col-span-1 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-[#1A1A2E] text-sm font-medium focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 outline-none transition-all"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Qty"
                                                value={ing.qty}
                                                onChange={e => updateIngredient(ing.id, 'qty', e.target.value.replace(/[^0-9.]/g, ''))}
                                                className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-[#1A1A2E] text-sm font-medium focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 outline-none transition-all"
                                            />
                                            <select
                                                value={ing.unit}
                                                onChange={e => updateIngredient(ing.id, 'unit', e.target.value)}
                                                aria-label={`Unit for ${ing.name || 'ingredient'}`}
                                                className="px-2 py-2.5 rounded-lg border border-gray-200 bg-white text-[#1A1A2E] text-sm focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 outline-none transition-all"
                                            >
                                                <option value="g">g</option>
                                                <option value="kg">kg</option>
                                                <option value="ml">ml</option>
                                                <option value="L">L</option>
                                                <option value="portion">portion</option>
                                                <option value="unit">unit</option>
                                                <option value="pcs">pcs</option>
                                            </select>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] text-sm">₹</span>
                                                <input
                                                    type="text"
                                                    placeholder="Price"
                                                    value={ing.unitPrice}
                                                    onChange={e => updateIngredient(ing.id, 'unitPrice', e.target.value.replace(/[^0-9.]/g, ''))}
                                                    className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white text-[#1A1A2E] text-sm font-medium focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="cost-col flex items-center justify-end gap-2">
                                                <span className="text-sm font-bold text-[#1A1A2E] min-w-[60px] text-right">
                                                    ₹{fmt(cost)}
                                                </span>
                                                <button
                                                    onClick={() => removeIngredient(ing.id)}
                                                    disabled={ingredients.length <= 1}
                                                    className="p-1.5 rounded-lg text-gray-400 hover:text-[#E24B4A] hover:bg-[#E24B4A]/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                                    aria-label={`Remove ${ing.name || 'ingredient'}`}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Add ingredient button */}
                        <button
                            onClick={addIngredient}
                            className="flex items-center gap-2 text-[#FF6B35] font-semibold text-sm hover:text-[#E85D00] transition-colors mb-8"
                        >
                            <Plus className="w-4 h-4" />
                            Add Ingredient
                        </button>

                        {/* Totals row */}
                        <div className="bg-white rounded-xl border-2 border-gray-200 p-4 md:p-6 mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                <div className="text-center md:text-left">
                                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">Total Ingredient Cost</span>
                                    <span className="text-2xl font-bold text-[#1A1A2E]">₹{fmt(totalCost)}</span>
                                </div>
                                <div className="text-center">
                                    <label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1" htmlFor="selling-price-input">Menu Selling Price</label>
                                    <div className="relative max-w-[200px] mx-auto">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] text-lg font-semibold">₹</span>
                                        <input
                                            id="selling-price-input"
                                            type="text"
                                            value={sellingPrice}
                                            onChange={e => {
                                                setSellingPrice(e.target.value.replace(/[^0-9.]/g, ''));
                                                setHasCalculated(false);
                                            }}
                                            className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-[#FF6B35]/30 bg-[#FF6B35]/5 text-[#1A1A2E] text-xl font-bold text-center focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="text-center md:text-right">
                                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">Food Cost %</span>
                                    <span className={`text-2xl font-bold ${foodCostPct <= 35 ? 'text-[#1D9E75]' : foodCostPct <= 45 ? 'text-[#F59E0B]' : 'text-[#E24B4A]'}`}>
                                        {price > 0 ? `${foodCostPct.toFixed(1)}%` : '--'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Calculate button */}
                        {!hasCalculated && (
                            <div className="flex justify-center">
                                <button
                                    onClick={() => setHasCalculated(true)}
                                    disabled={price <= 0 || totalCost <= 0}
                                    className="w-full md:w-auto min-w-[300px] bg-[#FF6B35] text-white font-bold text-xl py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={price > 0 && totalCost > 0 ? { animation: 'orlena-pulse 2s infinite' } : {}}
                                >
                                    Calculate My Food Cost
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ============ Results (shown after calculate) ============ */}
            {hasCalculated && price > 0 && totalCost > 0 && (
                <>
                    {/* Section C: Comparison Table */}
                    <section className="py-8 md:py-12">
                        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                            <motion.div {...fadeUp}>
                                <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-100">
                                    <table className="w-full min-w-[500px]" id="results-table">
                                        <thead>
                                            <tr className="bg-[#1A1A2E]">
                                                <th className="text-left px-6 py-4 text-white font-semibold text-sm uppercase tracking-wider">Metric</th>
                                                <th className="text-right px-6 py-4 text-white font-semibold text-sm uppercase tracking-wider">Your Dish</th>
                                                <th className="text-right px-6 py-4 text-[#1D9E75] font-semibold text-sm uppercase tracking-wider">Ideal (30%)</th>
                                                <th className="text-right px-6 py-4 text-[#E24B4A] font-semibold text-sm uppercase tracking-wider">Difference</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                {
                                                    label: 'Food Cost %',
                                                    yours: `${foodCostPct.toFixed(1)}%`,
                                                    ideal: `${idealPct.toFixed(1)}%`,
                                                    diff: foodCostPct - idealPct,
                                                    diffStr: `${foodCostPct > idealPct ? '+' : ''}${(foodCostPct - idealPct).toFixed(1)}%`,
                                                    isPercent: true
                                                },
                                                {
                                                    label: 'Ingredient Cost',
                                                    yours: `₹${fmt(totalCost)}`,
                                                    ideal: `₹${fmt(idealCost)}`,
                                                    diff: totalCost - idealCost,
                                                    diffStr: `₹${fmt(Math.abs(totalCost - idealCost))} ${totalCost > idealCost ? 'extra' : 'saved'}`,
                                                    isPercent: false
                                                },
                                                {
                                                    label: 'Profit per Plate',
                                                    yours: `₹${fmt(profitPerPlate)}`,
                                                    ideal: `₹${fmt(idealProfit)}`,
                                                    diff: profitPerPlate - idealProfit,
                                                    diffStr: `₹${fmt(Math.abs(profitPerPlate - idealProfit))} ${profitPerPlate < idealProfit ? 'lost' : 'extra'}`,
                                                    isPercent: false
                                                },
                                                {
                                                    label: 'Profit Margin',
                                                    yours: `${profitMargin.toFixed(1)}%`,
                                                    ideal: `${idealMargin}%`,
                                                    diff: profitMargin - idealMargin,
                                                    diffStr: `${profitMargin > idealMargin ? '+' : ''}${(profitMargin - idealMargin).toFixed(1)}%`,
                                                    isPercent: true
                                                }
                                            ].map((row, i) => {
                                                const isNegative = row.label === 'Food Cost %' || row.label === 'Ingredient Cost'
                                                    ? row.diff > 0
                                                    : row.diff < 0;
                                                return (
                                                    <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                                                        <td className="px-6 py-4 font-semibold text-[#1A1A2E]">{row.label}</td>
                                                        <td className="px-6 py-4 text-right text-[#1A1A2E] font-medium">{row.yours}</td>
                                                        <td className="px-6 py-4 text-right text-[#1D9E75] font-bold">{row.ideal}</td>
                                                        <td className={`px-6 py-4 text-right font-bold ${isNegative ? 'text-[#E24B4A]' : 'text-[#1D9E75]'}`}>
                                                            {row.diffStr}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Section D: Verdict Card */}
                    <section className="py-4 md:py-8">
                        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                            <motion.div
                                {...fadeUp}
                                className="bg-white border-2 rounded-2xl p-8 md:p-12 text-center shadow-xl"
                                style={{ borderColor: getVerdictColor(foodCostPct) + '40' }}
                            >
                                <p className="text-5xl md:text-7xl font-bold mb-2" style={{ color: getVerdictColor(foodCostPct) }}>
                                    {foodCostPct.toFixed(1)}%
                                </p>
                                <span
                                    className="inline-block text-white text-sm md:text-base font-bold px-5 py-1.5 rounded-full mb-6"
                                    style={{ backgroundColor: getVerdictColor(foodCostPct) }}
                                >
                                    {getVerdictLabel(foodCostPct)}
                                </span>

                                {/* Benchmark Bar */}
                                <div className="max-w-lg mx-auto mb-8 px-4">
                                    <div className="benchmark-bar bg-gray-100 rounded-full overflow-hidden">
                                        <div className="benchmark-zone bg-[#1D9E75]/30 left-0 rounded-l-full" style={{ width: '28%' }}></div>
                                        <div className="benchmark-zone bg-[#1D9E75]/20" style={{ left: '28%', width: '7%' }}></div>
                                        <div className="benchmark-zone bg-[#F59E0B]/20" style={{ left: '35%', width: '10%' }}></div>
                                        <div className="benchmark-zone bg-[#E24B4A]/20 rounded-r-full" style={{ left: '45%', width: '55%' }}></div>
                                    </div>
                                    {/* Zone labels */}
                                    <div className="relative mt-2 text-[10px] md:text-xs text-[#64748B]">
                                        <span className="absolute left-0">0%</span>
                                        <span className="absolute" style={{ left: '28%', transform: 'translateX(-50%)' }}>28%</span>
                                        <span className="absolute" style={{ left: '35%', transform: 'translateX(-50%)' }}>35%</span>
                                        <span className="absolute" style={{ left: '45%', transform: 'translateX(-50%)' }}>45%</span>
                                        <span className="absolute right-0">100%</span>
                                    </div>
                                    {/* Marker for user's position */}
                                    <div className="relative" style={{ marginTop: '-42px' }}>
                                        <div
                                            className="benchmark-marker"
                                            style={{
                                                left: `${Math.min(foodCostPct, 100)}%`,
                                                backgroundColor: getVerdictColor(foodCostPct),
                                                boxShadow: `0 0 8px ${getVerdictColor(foodCostPct)}80`
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <p className="text-[#64748B] text-sm md:text-base max-w-lg mx-auto leading-relaxed mt-8">
                                    {getVerdictMessage(foodCostPct)}
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Section E: CTA Soft Sell */}
                    <section className="py-8 md:py-12">
                        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                            <motion.div
                                {...fadeUp}
                                className="bg-[#16213E] rounded-2xl p-8 md:p-12 text-center shadow-xl border border-[#ffffff10]"
                            >
                                <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                                    Want to increase every order's value by 23%?
                                </h2>
                                <p className="text-[#94A3B8] text-base md:text-lg max-w-xl mx-auto mb-3">
                                    Orlena's smart QR menu suggests add-ons, upgrades, and combos automatically — so every table spends more without your staff saying a word.
                                </p>
                                <p className="text-[#1D9E75] font-semibold text-sm md:text-base mb-8">
                                    Most restaurants recover the cost in the first 2 weeks.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                                        href="/calculator"
                                        className="!border-[#FF6B35] !text-[#FF6B35] hover:!bg-[#FF6B35]/5"
                                    >
                                        Try Revenue Calculator
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </>
            )}

            {/* ============ Section F: SEO Educational Content ============ */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <motion.div {...fadeUp}>
                        {/* What Is Food Cost Percentage? */}
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-4">
                            What Is Food Cost Percentage?
                        </h2>
                        <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-10">
                            Food cost percentage tells you how much of your selling price goes toward ingredients. If your butter chicken sells for ₹350 and the ingredients cost ₹105, your food cost is 30%. That means for every ₹100 you earn, ₹30 goes to raw materials. The rest covers rent, staff, packaging, and profit.
                        </p>

                        {/* The Formula */}
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-4">
                            The Food Cost Percentage Formula
                        </h2>
                        <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-4">
                            Here's the simplest version:
                        </p>
                        <div className="bg-[#F9F9F9] border border-gray-200 rounded-xl p-6 mb-4">
                            <p className="text-[#1A1A2E] text-lg md:text-xl font-bold text-center">
                                Food Cost % = (Ingredient Cost ÷ Selling Price) × 100
                            </p>
                        </div>
                        <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-10">
                            <strong className="text-[#1A1A2E]">Example:</strong> Your paneer tikka costs ₹80 in ingredients and sells for ₹280.{' '}
                            Food cost = (80 ÷ 280) × 100 = <span className="font-bold text-[#1D9E75]">28.6% ✅ Healthy range.</span>
                        </p>

                        {/* Good Food Cost for Indian Restaurants */}
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-4">
                            What's a Good Food Cost Percentage for Indian Restaurants?
                        </h2>
                        <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-4">
                            Most successful restaurants keep food cost between 28-35%. But it depends on your type:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            {[
                                { type: 'QSR / Fast Food', range: '25-30%', note: 'Cheaper ingredients, high volume' },
                                { type: 'Casual Dining', range: '28-35%', note: 'The sweet spot' },
                                { type: 'Fine Dining', range: '30-40%', note: 'Expensive ingredients, higher menu prices' },
                                { type: 'Cloud Kitchens', range: '25-32%', note: 'No dine-in costs, margins need to be tighter' },
                                { type: 'Cafes', range: '25-35%', note: 'Coffee has very low food cost, food items are higher' },
                            ].map(item => (
                                <div key={item.type} className="bg-[#F9F9F9] border border-gray-100 rounded-xl p-4">
                                    <div className="flex items-baseline justify-between mb-1">
                                        <span className="font-bold text-[#1A1A2E] text-sm">{item.type}</span>
                                        <span className="text-[#1D9E75] font-bold text-sm">{item.range}</span>
                                    </div>
                                    <span className="text-[#94A3B8] text-xs">{item.note}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-10">
                            If you're above 35% consistently, something needs to change — your pricing, your portions, or your suppliers.
                        </p>

                        {/* How to Reduce */}
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-4">
                            How to Reduce Your Food Cost Percentage
                        </h2>
                        <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-4">
                            Five things you can do this week:
                        </p>
                        <ol className="list-decimal list-inside space-y-3 text-[#64748B] text-base md:text-lg leading-relaxed mb-10 pl-1">
                            <li><strong className="text-[#1A1A2E]">Audit your top 10 dishes</strong> — calculate food cost for each. You'll find 2-3 that are bleeding money.</li>
                            <li><strong className="text-[#1A1A2E]">Standardize portions</strong> — if one chef uses 250g chicken and another uses 300g, your costs are inconsistent.</li>
                            <li><strong className="text-[#1A1A2E]">Negotiate with suppliers</strong> — even ₹2/kg less on chicken saves thousands per month at scale.</li>
                            <li><strong className="text-[#1A1A2E]">Use cross-ingredients</strong> — if you buy mint for one dish, use it in 3 others. Less waste.</li>
                            <li><strong className="text-[#1A1A2E]">Increase average order value</strong> — instead of cutting costs, earn more per table. This is exactly what <a href="/" className="text-[#FF6B35] hover:underline font-semibold">Orlena</a> does with smart upselling on QR menus.</li>
                        </ol>

                        {/* Food Cost vs Prime Cost */}
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-4">
                            Food Cost vs. Prime Cost — What's the Difference?
                        </h2>
                        <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-4">
                            Food cost only covers ingredients. Prime cost = food cost + labor cost. Most restaurants aim for a prime cost under 60-65% of revenue. If your food cost is 30% and labor is 30%, your prime cost is 60% — that's healthy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ============ Section G: FAQ ============ */}
            <section className="py-12 md:py-16 bg-[#F9F9F9]">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <motion.div {...fadeUp}>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-8 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-3">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                                        aria-expanded={openFaq === idx}
                                    >
                                        <span className="font-semibold text-[#1A1A2E] text-sm md:text-base pr-4">{faq.q}</span>
                                        {openFaq === idx ? (
                                            <ChevronUp className="w-5 h-5 text-[#FF6B35] shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-[#94A3B8] shrink-0" />
                                        )}
                                    </button>
                                    <div className={`faq-content ${openFaq === idx ? 'open' : ''}`}>
                                        <p className="px-6 pb-4 text-[#64748B] text-sm md:text-base leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
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
                            href="/calculator"
                            className="!border-[#FF6B35] !text-[#FF6B35] hover:!bg-[#FF6B35]/5"
                        >
                            Try Revenue Calculator
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
