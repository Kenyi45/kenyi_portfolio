// ============================================================================
// BUTTON
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
    'inline-flex items-center justify-center font-semibold transition-[color,background,box-shadow,border-color,transform] duration-smooth ease-out-expo focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-base disabled:opacity-50 disabled:cursor-not-allowed rounded-xl active:scale-[0.98]';

  const variantClasses = {
    primary:
      'bg-accent-600 hover:bg-accent-500 text-white shadow-brutal-clay hover:shadow-lg hover:brightness-[1.03]',
    secondary:
      'bg-neutral-800/90 hover:bg-neutral-800 text-neutral-100 border border-ink-line',
    outline:
      'border-2 border-primary-400 text-primary-300 hover:bg-primary-500/10 hover:border-primary-300',
    ghost: 'text-primary-300 hover:bg-white/5',
    gradient:
      'bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-400 hover:to-accent-500 text-white shadow-md',
    'gradient-outline':
      'text-primary-200 ring-1 ring-inset ring-primary-500/50 hover:bg-primary-500/10',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
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
