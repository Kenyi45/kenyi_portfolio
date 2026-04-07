// ============================================================================
// CARD — superficie clara, hover mínimo (translate + sombra)
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
  const baseClasses =
    'rounded-2xl transition-[transform,box-shadow,border-color] duration-smooth ease-out-expo';

  const variantClasses = {
    default: 'bg-white border border-neutral-200/90 shadow-soft',
    elevated: 'bg-white border border-neutral-200/80 shadow-soft hover:shadow-medium hover:-translate-y-0.5',
    bordered: 'bg-primary-50/40 border border-primary-200/60 hover:border-primary-300/80',
    gradient: 'bg-gradient-to-br from-white via-primary-50/50 to-secondary-50/80 border border-primary-100/60 shadow-soft',
    'gradient-border':
      'relative bg-white overflow-hidden shadow-soft hover:shadow-medium hover:-translate-y-0.5',
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
        className="relative rounded-2xl p-px bg-gradient-to-br from-primary-400/40 via-accent-500/35 to-primary-600/35 transition-all duration-smooth ease-out-expo hover:shadow-medium"
        style={style}
        {...props}
      >
        <div className={clsx('w-full h-full rounded-2xl bg-white', paddingClasses[padding])}>{children}</div>
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
