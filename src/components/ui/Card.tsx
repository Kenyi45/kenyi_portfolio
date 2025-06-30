// ============================================================================
// CARD COMPONENT - UI Foundation
// ============================================================================

import React from 'react';
import { clsx } from 'clsx';
import type { CardProps } from '../../types';

// Principio Single Responsibility: Solo maneja la presentación de tarjetas
// Principio Open/Closed: Extensible sin modificación del código base

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  style,
  ...props
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white shadow-soft',
    elevated: 'bg-white shadow-medium hover:shadow-large',
    bordered: 'bg-white border border-neutral-200 hover:border-primary-300',
    gradient: 'bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 border border-transparent bg-clip-padding shadow-medium hover:shadow-large',
    'gradient-border': 'relative bg-white overflow-hidden shadow-medium hover:shadow-large'
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const computedClasses = clsx(
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    className
  );

  // Renderizado especial para variante gradient-border
  if (variant === 'gradient-border') {
    return (
      <div className="relative bg-gradient-to-br from-primary-400 via-accent-500 to-primary-600 rounded-xl p-[2px] shadow-medium hover:shadow-large transition-all duration-300" style={style} {...props}>
        <div className={clsx('w-full h-full bg-white rounded-xl', paddingClasses[padding])}>
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