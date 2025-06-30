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
    bordered: 'bg-white border border-neutral-200 hover:border-primary-300'
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

  return (
    <div className={computedClasses} style={style} {...props}>
      {children}
    </div>
  );
};

export default Card; 