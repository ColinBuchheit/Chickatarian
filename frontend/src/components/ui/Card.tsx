import React from 'react';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  clickable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    variant = 'default',
    padding = 'md',
    hover = false,
    clickable = false,
    children,
    ...props
  }, ref) => {
    const baseClasses = [
      'rounded-xl transition-all duration-200',
      'bg-white',
    ];

    const variantClasses = {
      default: [
        'shadow-sm border border-neutral-200',
      ],
      elevated: [
        'shadow-md border border-neutral-100',
      ],
      outlined: [
        'border-2 border-neutral-300 shadow-none',
      ],
      ghost: [
        'shadow-none border-none bg-transparent',
      ],
    };

    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-4 sm:p-6',
      lg: 'p-6 sm:p-8',
      xl: 'p-8 sm:p-10',
    };

    const interactionClasses = [];
    
    if (hover) {
      interactionClasses.push('hover:shadow-lg');
      if (variant !== 'ghost') {
        interactionClasses.push('hover:-translate-y-1');
      }
    }
    
    if (clickable) {
      interactionClasses.push(
        'cursor-pointer',
        'active:scale-98',
        'focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2'
      );
    }

    return (
      <div
        ref={ref}
        className={clsx(
          baseClasses,
          variantClasses[variant],
          paddingClasses[padding],
          interactionClasses,
          className
        )}
        tabIndex={clickable ? 0 : undefined}
        role={clickable ? 'button' : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Sub-components for structured content
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx('mb-4 space-y-1', className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, as: Component = 'h3', ...props }, ref) => (
    <Component
      ref={ref}
      className={clsx(
        'text-heading font-semibold text-neutral-900',
        Component === 'h1' && 'text-2xl',
        Component === 'h2' && 'text-xl',
        Component === 'h3' && 'text-lg',
        Component === 'h4' && 'text-base',
        Component === 'h5' && 'text-sm',
        Component === 'h6' && 'text-xs',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={clsx('text-caption text-neutral-600', className)}
      {...props}
    >
      {children}
    </p>
  )
);

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx('text-body', className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx('mt-4 pt-4 border-t border-neutral-200', className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = 'CardFooter';

export default Card;