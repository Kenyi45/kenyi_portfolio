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
  tone = 'ink',
  ...props
}) => {
  const { ref, visible } = useSectionReveal<HTMLElement>();
  const baseClasses = 'section-padding relative scroll-mt-20';

  const surfaceClasses =
    tone === 'paper'
      ? 'section-paper-texture text-neutral-900 border-y border-paper-border'
      : 'bg-ink-base text-neutral-50';

  const eyebrowClass =
    tone === 'paper'
      ? 'font-mono text-[length:var(--text-xs)] uppercase tracking-[0.18em] text-primary-700 mb-3'
      : 'font-mono text-[length:var(--text-xs)] uppercase tracking-[0.18em] text-primary-400 mb-3';

  const titleClass =
    tone === 'paper'
      ? 'font-display text-fluid-h2 font-bold text-neutral-900 mb-4'
      : 'font-display text-fluid-h2 font-bold text-neutral-50 mb-4';

  const subtitleClass =
    tone === 'paper'
      ? 'text-fluid-lead text-neutral-600 max-w-2xl'
      : 'text-fluid-lead text-neutral-400 max-w-2xl';

  return (
    <section
      ref={ref}
      id={id}
      className={clsx(baseClasses, '[container-type:inline-size]', surfaceClasses, className)}
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
            {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
            {title && <h2 className={titleClass}>{title}</h2>}
            {subtitle && <p className={subtitleClass}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
