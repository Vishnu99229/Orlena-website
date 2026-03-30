import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="font-heading font-bold text-2xl text-primary mb-6 block">
                            Orlena
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Intelligent QR menus that increase your average order value — automatically, at every table.
                        </p>
                        <a 
                            href="https://www.producthunt.com/products/orlena?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-orlena" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img 
                                alt="Orlena - AI that increases your restaurant's average order value | Product Hunt" 
                                width="250" 
                                height="54" 
                                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1099136&theme=light&t=1773603698333" 
                            />
                        </a>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Product</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                            <li><a href="/calculator" className="hover:text-primary transition-colors">Calculator</a></li>
                            <li><a href="/food-cost-calculator" className="hover:text-primary transition-colors">Food Cost Calculator</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                            <li><a href="/integrations" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Contact</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>Vishnu Rajan</li>
                            <li>CEO, Orlena</li>
                            <li>+91 9880622570</li>
                            <li>WeWork Bannerghatta<br />Bangalore 560079<br />India</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Orlena. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
