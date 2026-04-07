// ============================================================================
// SECTION — container queries + revelado al scroll (mobile-first)
// ============================================================================

import React from 'react';
import { clsx } from 'clsx';
import type { SectionProps } from '../../types';
import { useSectionReveal } from '../../hooks/useSectionReveal';

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  title,
  subtitle,
  eyebrow,
  ...props
}) => {
  const { ref, visible } = useSectionReveal<HTMLElement>();
  const baseClasses = 'section-padding relative';

  return (
    <section
      ref={ref}
      id={id}
      className={clsx(baseClasses, '[container-type:inline-size]', className)}
      {...props}
    >
      <div className="container-prose relative z-10 @container">
        {(title || subtitle || eyebrow) && (
          <div
            className={clsx(
              'reveal-head mb-12 max-w-3xl @md:mb-14',
              visible && 'is-visible'
            )}
          >
            {eyebrow && (
              <p className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.18em] text-primary-600 mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-fluid-h2 font-bold text-neutral-900 mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-fluid-lead text-neutral-600 max-w-2xl">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
