import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
    const plans = [
        {
            name: "Smart Ordering",
            price: "$120",
            description: "Core positioning: AI powered ordering + recommendations.",
            features: [
                "QR based digital ordering system",
                "AI powered product recommendations",
                "Upsell and cross sell automation",
                "Real time order analytics dashboard"
            ],
            isPopular: false
        },
        {
            name: "Intelligent Growth",
            price: "$215",
            description: "This package includes everything in Smart Ordering plus advanced intelligence.",
            features: [
                "Everything in Smart Ordering",
                "Hyper personalised AI recommendations",
                "AI thinking engine that adapts to customer behavior",
                "Revenue optimization insights and smart nudges"
            ],
            isPopular: true
        },
        {
            name: "Your Full Butler",
            price: "$360",
            description: "Premium positioning. This is the complete AI agent layer.",
            features: [
                "Everything in Intelligent Growth",
                "Fully autonomous AI ordering assistant",
                "Customer memory and repeat behavior learning",
                "Dynamic pricing, upsell logic, and predictive engagement"
            ],
            isPopular: false
        }
    ];

    return (
        <Section background="white" className="relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-stone-900">
                    Pricing That <span className="text-primary text-gradient">Scales With You.</span>
                </h2>
                <p className="text-xl text-stone-600">
                    Choose the intelligence tier that fits your establishment.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative rounded-3xl p-8 bg-white shadow-xl ${plan.isPopular ? 'border-2 border-primary ring-4 ring-primary/10' : 'border border-stone-100'}`}
                    >
                        {plan.isPopular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-orange-200">
                                    <Sparkles size={14} />
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-stone-900 mb-2">{plan.name}</h3>
                            <p className="text-sm text-stone-500 h-10">{plan.description}</p>
                        </div>

                        <div className="mb-8">
                            <Button
                                className="w-full text-2xl font-bold py-6 shadow-xl shadow-primary/20"
                                href="https://cal.com/vishnu-rajan-3siibd/secret?overlayCalendar=true"
                                target="_blank"
                                variant={plan.isPopular ? 'primary' : 'outline'}
                            >
                                {plan.price} <span className="text-sm font-normal ml-1 opacity-80">/mo</span>
                            </Button>
                        </div>

                        <ul className="space-y-4">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-3 text-stone-600">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center text-primary mt-0.5">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-sm leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
