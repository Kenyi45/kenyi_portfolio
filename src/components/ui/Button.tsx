// ============================================================================
// BUTTON COMPONENT - UI Foundation
// ============================================================================

import React from 'react';
import { clsx } from 'clsx';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  href,
  external = false,
  type = 'button',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-950 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl';

  const variantClasses = {
    primary:
      'bg-primary-500 hover:bg-primary-400 text-secondary-950 shadow-md hover:shadow-glow-cyan',
    secondary:
      'bg-secondary-800 hover:bg-secondary-700 text-secondary-100 border border-secondary-600',
    outline:
      'border-2 border-primary-500/60 text-primary-300 hover:bg-primary-500/10 hover:border-primary-400',
    ghost: 'text-primary-300 hover:bg-secondary-800/80',
    gradient:
      'bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-secondary-950 shadow-md hover:shadow-glow-cyan',
    'gradient-outline':
      'border-2 border-transparent bg-clip-padding text-primary-200 hover:text-primary-100 ring-1 ring-inset ring-primary-500/40 hover:ring-primary-400/60',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base',
  };

  const computedClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    {
      'opacity-75 cursor-wait': loading,
      'cursor-pointer': !disabled && !loading,
    },
    className
  );

  const content = loading ? (
    <>
      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Cargando...
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <a
        href={href}
        className={computedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={computedClasses} disabled={disabled || loading} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
