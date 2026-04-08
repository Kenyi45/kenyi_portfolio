// ============================================================================
// CARD — tinta / papel según surface
// ============================================================================

import React from 'react';
import { clsx } from 'clsx';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  surface = 'ink',
  padding = 'md',
  style,
  ...props
}) => {
  const isPaper = surface === 'paper';

  const baseClasses =
    'rounded-2xl transition-[transform,box-shadow,border-color] duration-smooth ease-out-expo';

  const variantClasses: Record<'default' | 'elevated' | 'bordered' | 'gradient', string> = {
    default: isPaper
      ? 'bg-white border border-paper-border shadow-card-paper text-neutral-900'
      : 'bg-ink-raised/95 border border-ink-line shadow-card-ink text-neutral-100',
    elevated: isPaper
      ? 'bg-white border border-paper-border shadow-card-paper hover:shadow-medium hover:-translate-y-0.5 text-neutral-900'
      : 'bg-ink-raised/95 border border-ink-line shadow-card-ink hover:shadow-brutal-cyan hover:-translate-y-0.5 text-neutral-100',
    bordered: isPaper
      ? 'bg-primary-50/40 border border-primary-200/60 hover:border-primary-300/80 text-neutral-900'
      : 'bg-primary-950/25 border border-primary-500/35 text-neutral-100',
    gradient: isPaper
      ? 'bg-gradient-to-br from-white via-primary-50/50 to-paper-muted border border-primary-100/60 shadow-soft text-neutral-900'
      : 'bg-gradient-to-br from-ink-raised via-primary-950/35 to-ink-base border border-ink-line text-neutral-100',
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const innerPaper = 'w-full h-full rounded-2xl bg-white';
  const innerInk =
    'w-full h-full rounded-2xl bg-ink-raised/95 border border-ink-line text-neutral-100';

  if (variant === 'gradient-border') {
    return (
      <div
        className={clsx(
          'relative rounded-2xl p-px bg-gradient-to-br from-primary-400/50 via-accent-500/40 to-primary-600/45 transition-all duration-smooth ease-out-expo hover:-translate-y-0.5',
          isPaper ? 'hover:shadow-medium' : 'shadow-card-ink hover:shadow-brutal-cyan',
          className
        )}
        style={style}
        {...props}
      >
        <div className={clsx(isPaper ? innerPaper : innerInk, paddingClasses[padding])}>{children}</div>
      </div>
    );
  }

  return (
    <div className={clsx(baseClasses, variantClasses[variant], paddingClasses[padding], className)} style={style} {...props}>
      {children}
    </div>
  );
};

export default Card;
