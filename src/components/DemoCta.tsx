import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const DemoCta: React.FC = () => {
    return (
        <Section background="dark" className="text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                    See How AI Can <br />
                    <span className="text-primary">Increase Your Revenue.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Join the restaurants that are automating their upselling today. No setup fees. No risk.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight size={20} />} href="https://cal.com/vishnu-rajan-3siibd/secret?overlayCalendar=true" target="_blank">
                        Book Your Free Demo
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-600 text-white hover:bg-white/10">
                        Contact Sales
                    </Button>
                </div>

                <p className="mt-8 text-sm text-gray-500">
                    * No credit card required. Cancel anytime.
                </p>
            </div>
        </Section>
    );
};
