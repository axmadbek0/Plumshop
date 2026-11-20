import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'discount' | 'bestseller' | 'new' | 'neutral' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'discount',
  children,
  ...props
}) => {
  const variants = {
    discount: 'bg-plum-500 text-white font-bold text-xs px-2 py-0.5 rounded-full shadow-sm',
    bestseller: 'bg-plum-700 text-white font-semibold text-xs px-2.5 py-0.5 rounded-md',
    new: 'bg-plum-400 text-white font-medium text-xs px-2 py-0.5 rounded-md',
    neutral: 'bg-plum-50 text-plum-900 text-xs px-2 py-0.5 rounded-md border border-plum-100',
    outline: 'border border-plum-300 text-plum-700 text-xs px-2 py-0.5 rounded-full',
  };

  return (
    <span
      className={cn('inline-flex items-center justify-center select-none', variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
