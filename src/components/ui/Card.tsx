// ============================================================================
// CARD COMPONENT - UI Foundation
// ============================================================================

import React from 'react';
import { clsx } from 'clsx';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  style,
  ...props
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';

  const variantClasses = {
    default: 'bg-secondary-900/60 backdrop-blur-sm border border-secondary-800/80 shadow-soft',
    elevated: 'bg-secondary-900/80 backdrop-blur-md border border-secondary-800 shadow-medium hover:border-primary-500/25 hover:shadow-glow-cyan',
    bordered: 'bg-secondary-900/40 border border-secondary-700/90 hover:border-primary-500/30',
    gradient: 'bg-gradient-to-br from-secondary-900/90 via-secondary-900/70 to-secondary-950 border border-secondary-800/60 shadow-soft',
    'gradient-border': 'relative bg-secondary-950 overflow-hidden shadow-medium hover:shadow-glow-violet',
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const computedClasses = clsx(
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    className
  );

  if (variant === 'gradient-border') {
    return (
      <div
        className="relative rounded-2xl p-px bg-gradient-to-br from-primary-500/50 via-accent-500/40 to-primary-600/50 shadow-medium hover:shadow-glow-violet transition-all duration-300"
        style={style}
        {...props}
      >
        <div className={clsx('w-full h-full rounded-2xl bg-secondary-950', paddingClasses[padding])}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={computedClasses} style={style} {...props}>
      {children}
    </div>
  );
};

export default Card;
