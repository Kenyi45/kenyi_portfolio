// ============================================================================
// SECTION COMPONENT - Layout Foundation
// ============================================================================

import React from 'react';
import { clsx } from 'clsx';
import type { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  title,
  subtitle,
  eyebrow,
  ...props
}) => {
  const baseClasses = 'section-padding relative';

  const computedClasses = clsx(baseClasses, className);

  return (
    <section id={id} className={computedClasses} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle || eyebrow) && (
          <div className="mb-14 md:mb-16 max-w-3xl">
            {eyebrow && (
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-400/90 mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-display-md font-bold text-secondary-50 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-secondary-400 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
