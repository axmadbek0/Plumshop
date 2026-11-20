import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../utils/cn';

interface RatingProps {
  value: number;
  reviewsCount?: number;
  size?: 'sm' | 'md';
  showCount?: boolean;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  reviewsCount,
  size = 'sm',
  showCount = true,
  className,
}) => {
  const iconSize = size === 'sm' ? 14 : 18;

  return (
    <div className={cn('inline-flex items-center gap-1 text-xs text-plum-700', className)}>
      <div className="flex items-center text-amber-500">
        <Star size={iconSize} className="fill-amber-400 text-amber-400" />
      </div>
      <span className="font-semibold text-plum-900">{value.toFixed(1)}</span>
      {showCount && reviewsCount !== undefined && (
        <span className="text-plum-900/60 font-normal">({reviewsCount} sharh)</span>
      )}
    </div>
  );
};
