import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children: React.ReactNode;
    href?: string;
    target?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    className = '',
    disabled,
    href,
    target,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5',
        secondary: 'bg-secondary text-white hover:bg-secondary-light shadow-md hover:shadow-lg',
        outline: 'border-2 border-primary text-primary hover:bg-primary/5',
        ghost: 'text-text-dark hover:bg-black/5',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const content = (
        <>
            {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : leftIcon ? (
                <span className="mr-2">{leftIcon}</span>
            ) : null}

            {children}

            {!isLoading && rightIcon && (
                <span className="ml-2">{rightIcon}</span>
            )}
        </>
    );

    const commonProps = {
        whileTap: { scale: 0.98 },
        className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
    };

    if (href) {
        return (
            <motion.a
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                {...commonProps}
                {...(props as any)}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            disabled={disabled || isLoading}
            {...commonProps}
            {...(props as any)}
        >
            {content}
        </motion.button>
    );
};
