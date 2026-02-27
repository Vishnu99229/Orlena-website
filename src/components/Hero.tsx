import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ArrowRight, User, ShoppingBag } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <Section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-orange-100/40 to-transparent" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-t from-orange-50/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center space-x-2 bg-orange-50 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6 border border-orange-100">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>Intelligent Hospitality Platform</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        A Menu That Understands <br />
                        <span className="text-gradient">Your Guests.</span>
                    </h1>

                    <p className="text-xl text-text mb-8 max-w-lg leading-relaxed">
                        Intelligent dining experiences that learn each guest’s preferences and gently guide them toward thoughtful additions, elevating every table at scale.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" rightIcon={<ArrowRight size={20} />} href="https://cal.com/vishnu-rajan-3siibd/secret?overlayCalendar=true" target="_blank">
                            Book a Private Demo
                        </Button>
                        <Button size="lg" variant="outline">
                            Discover Orlena
                        </Button>
                    </div>


                </motion.div>

                {/* Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center justify-center"
                >
                    {/* Abstract blobs behind phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-200/30 rounded-full blur-3xl animate-pulse" />

                    {/* Phone Frame */}
                    <div className="relative w-[300px] h-[600px] bg-white rounded-[40px] shadow-2xl border-8 border-gray-900 overflow-hidden z-10">
                        {/* Dynamic Island */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />

                        {/* Screen Content - Mock UI */}
                        <div className="h-full w-full bg-[#FAFAFA] pt-10 px-4 flex flex-col">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center text-stone-600">
                                    <User size={16} />
                                </div>
                                <div className="font-bold text-stone-800">Menu</div>
                                <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center text-stone-600">
                                    <ShoppingBag size={16} />
                                </div>
                            </div>

                            {/* Product Item */}
                            <div className="bg-white p-4 rounded-xl shadow-sm mb-4 border border-stone-100">
                                <div
                                    className="w-full h-32 rounded-lg mb-3 bg-cover bg-center bg-stone-50"
                                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80")' }}
                                />
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-stone-800 text-lg">Truffle Pappardelle</h3>
                                        <p className="text-sm text-stone-500 mt-1">Handmade pasta, black truffle, parmesan</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bot Suggestion Overlay */}
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                                className="mt-auto mb-6 bg-white p-4 rounded-xl shadow-xl border border-stone-100"
                            >
                                <div className="flex items-start space-x-3 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-cover bg-center flex-shrink-0 bg-stone-50"
                                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1619531040578-1cfb36b9557a?auto=format&fit=crop&w=150&q=80")' }}
                                    />
                                    <p className="text-sm font-medium text-stone-800 leading-snug pt-1">
                                        Complement your order with our warm <span className="text-primary font-bold">Artisan Garlic Bread</span>?
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="py-2.5 rounded-lg bg-stone-50 text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors">No, thank you</button>
                                    <button className="py-2.5 rounded-lg bg-primary text-sm font-medium text-white shadow-lg shadow-orange-200 hover:bg-primary/90 transition-colors">Add for $6</button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
