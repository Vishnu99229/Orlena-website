import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '/#solution' },
        { name: 'How It Works', href: '/#how-it-works' },
        { name: 'Results', href: '/#results' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Blogs', href: '/blog' },
        { name: 'Calculator', href: '/calculator' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/" className="font-heading font-bold text-2xl text-primary">
                            Orlena
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = link.href === '/blog' ? typeof window !== 'undefined' && window.location.pathname.startsWith('/blog') : false;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`font-medium transition-colors ${isActive ? 'text-primary' : 'text-text hover:text-primary'}`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <Button size="sm" href="https://cal.com/vishnu-rajan-3siibd/secret?overlayCalendar=true" target="_blank">Book a Demo</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-text-dark"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => {
                                const isActive = link.href === '/blog' ? typeof window !== 'undefined' && window.location.pathname.startsWith('/blog') : false;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`font-medium py-2 ${isActive ? 'text-primary' : 'text-text-dark hover:text-primary'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                            <Button className="w-full" href="https://cal.com/vishnu-rajan-3siibd/secret?overlayCalendar=true" target="_blank">Book a Demo</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
