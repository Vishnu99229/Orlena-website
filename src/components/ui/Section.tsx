import React from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    background?: 'white' | 'beige' | 'dark';
}

export const Section: React.FC<SectionProps> = ({
    id,
    className = '',
    children,
    background = 'white',
}) => {
    const backgrounds = {
        white: 'bg-white',
        beige: 'bg-background',
        dark: 'bg-secondary',
    };

    return (
        <section
            id={id}
            className={`py-20 md:py-28 ${backgrounds[background]} ${className}`}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {children}
            </div>
        </section>
    );
};
