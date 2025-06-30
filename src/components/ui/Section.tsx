// ============================================================================
// SECTION COMPONENT - Layout Foundation
// ============================================================================

import React from 'react';
import { clsx } from 'clsx';
import type { SectionProps } from '../../types';

// Principio Single Responsibility: Solo maneja la estructura de secciones
// Principio Open/Closed: Extensible para diferentes tipos de secciones

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  title,
  subtitle,
  ...props
}) => {
  const baseClasses = 'py-20 lg:py-28';
  
  const computedClasses = clsx(baseClasses, className);

  return (
    <section id={id} className={computedClasses} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-display-md font-bold text-neutral-900 mb-4 animate-fade-in">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto animate-slide-up">
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