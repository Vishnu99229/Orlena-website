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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleSectionNav = (sectionId: string) => {
        setIsMobileMenuOpen(false);
        const currentPath = window.location.pathname;
        if (currentPath === '/' || currentPath === '') {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.location.href = '/#' + sectionId;
        }
    };

    const handleLinkNav = (path: string) => {
        setIsMobileMenuOpen(false);
        window.location.href = path;
    };

    const sectionLinks = [
        { name: 'Features', sectionId: 'features' },
        { name: 'How It Works', sectionId: 'how-it-works' },
        { name: 'Results', sectionId: 'results' },
        { name: 'Pricing', sectionId: 'pricing' },
    ];

    const pageLinks = [
        { name: 'Blogs', href: '/blog' },
        { name: 'Calculator', href: '/calculator' },
        { name: 'Food Cost Calculator', href: '/food-cost-calculator' },
    ];

    const desktopNavLinks = [
        { name: 'Features', href: '/#features' },
        { name: 'How It Works', href: '/#how-it-works' },
        { name: 'Results', href: '/#results' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Blogs', href: '/blog' },
        { name: 'Calculator', href: '/calculator' },
        { name: 'Food Cost Calculator', href: '/food-cost-calculator' },
    ];

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

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
                        {desktopNavLinks.map((link) => {
                            const isActive = link.href === '/blog' ? currentPath.startsWith('/blog') : false;
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
                        className="md:hidden relative z-[60] text-text-dark"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? <X className="text-white" /> : <Menu />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay - Full Screen */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 bg-[#1A1A2E] flex flex-col pt-20 px-6 md:hidden"
                    >
                        {/* Section nav items */}
                        {sectionLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleSectionNav(link.sectionId)}
                                className="text-white text-xl font-medium py-4 border-b border-[#ffffff15] w-full text-left"
                            >
                                {link.name}
                            </button>
                        ))}

                        {/* Page nav items */}
                        {pageLinks.map((link) => {
                            const isActive = link.href === '/blog' ? currentPath.startsWith('/blog') : currentPath === link.href;
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => handleLinkNav(link.href)}
                                    className={`text-xl font-medium py-4 border-b border-[#ffffff15] w-full text-left ${isActive ? 'text-[#FF6B35]' : 'text-white'}`}
                                >
                                    {link.name}
                                </button>
                            );
                        })}

                        {/* Book a Demo button pushed to bottom */}
                        <a
                            href="https://cal.com/vishnu-rajan-3siibd/secret?overlayCalendar=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-auto mb-8 w-full min-h-[52px] bg-[#FF6B35] text-white font-bold rounded-xl flex items-center justify-center text-lg"
                        >
                            Book a Demo
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
