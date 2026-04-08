// ============================================================================
// EXPERIENCE — timeline alternado (izq / der) en vista amplia
// ============================================================================

import React from 'react';
import { clsx } from 'clsx';
import { Section, Card, Icon } from '../ui';
import { EXPERIENCE } from '../../constants/portfolio-data';

const ExperienceSection: React.FC = () => {
  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startMonth = start.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
    const endMonth = end.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
    return `${startMonth} — ${endMonth}`;
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    if (months < 12) {
      return `${months} meses`;
    }
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return remainingMonths > 0 ? `${years} años ${remainingMonths} meses` : `${years} años`;
  };

  const jobCard = (job: (typeof EXPERIENCE)[number]) => (
    <Card variant="elevated" surface="paper" padding="lg" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent pointer-events-none" aria-hidden />

      <div className="relative mb-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-primary-700 mb-2">
          {formatDateRange(job.startDate, job.endDate)} · {calculateDuration(job.startDate, job.endDate)}
        </p>
        <h3 className="font-display text-[length:var(--text-2xl)] font-bold text-neutral-900">{job.position}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-600 text-[length:var(--text-sm)]">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="Building" size={16} className="text-accent-700 shrink-0" aria-hidden />
            {job.company}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="MapPin" size={16} className="text-neutral-500 shrink-0" aria-hidden />
            {job.location}
          </span>
        </div>
      </div>

      <p className="text-neutral-600 text-[length:var(--text-sm)] leading-relaxed mb-6">{job.description}</p>

      <div className="mb-6">
        <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
          <Icon name="Trophy" size={16} className="text-primary-600" aria-hidden />
          Impacto
        </h4>
        <ul className="space-y-2.5">
          {job.achievements.map((achievement, i) => (
            <li key={i} className="flex gap-3 text-[length:var(--text-sm)] text-neutral-700 leading-relaxed">
              <Icon name="CheckCircle" size={16} className="text-emerald-500 shrink-0 mt-0.5" aria-hidden />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3">Stack</h4>
        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg border border-neutral-200 bg-white text-xs font-mono text-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );

  return (
    <Section
      id="experience"
      tone="paper"
      eyebrow="Trayectoria"
      title="Experiencia profesional"
      subtitle="Roles con responsabilidad en integración, producto interno y confiabilidad operativa."
    >
      <div className="max-w-5xl mx-auto relative">
        <div
          className="pointer-events-none md:hidden absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-primary-400 via-accent-400 to-primary-500"
          aria-hidden
        />

        <div
          className="pointer-events-none hidden md:block absolute left-1/2 top-3 bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-500"
          aria-hidden
        />

        <ul className="space-y-10 md:space-y-14 relative z-[1]">
          {EXPERIENCE.map((job, index) => {
            const onLeft = index % 2 === 0;

            return (
              <li key={job.id} className="relative">
                <div
                  className={clsx(
                    'md:hidden absolute left-0 top-8 h-3 w-3 rounded-full border-2 border-paper bg-primary-500 shadow-[0_0_0_3px_rgba(6,182,212,0.22)]',
                    index === 0 && 'bg-primary-600 shadow-[0_0_0_4px_rgba(6,182,212,0.3)]'
                  )}
                  aria-hidden
                />

                <div
                  className={clsx(
                    'hidden md:block absolute left-1/2 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-paper bg-primary-500 shadow-[0_0_0_4px_rgba(6,182,212,0.22)]',
                    index === 0 && 'bg-primary-600 shadow-[0_0_0_5px_rgba(6,182,212,0.32)]'
                  )}
                  aria-hidden
                />

                <div
                  className={clsx(
                    'pl-10 md:pl-0 md:max-w-[min(100%,calc(50%-2.75rem))]',
                    onLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                  )}
                >
                  {jobCard(job)}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-16">
        <Card variant="bordered" surface="paper" padding="xl">
          <h3 className="font-display text-[length:var(--text-lg)] font-bold text-neutral-900 mb-8 text-center">En números</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: 'Calendar' as const, value: '+4', label: 'Años' },
              { icon: 'Building' as const, value: '3', label: 'Empresas' },
              { icon: 'Zap' as const, value: '25%', label: 'Mejora ref.' },
              { icon: 'Shield' as const, value: '99.9%', label: 'SLA objetivo' },
            ].map((item) => (
              <div key={item.label}>
                <Icon name={item.icon} size={28} className="text-primary-600 mx-auto mb-3" aria-hidden />
                <div className="font-display text-[length:var(--text-2xl)] font-bold text-neutral-900">{item.value}</div>
                <div className="text-neutral-500 text-xs font-mono uppercase tracking-wider mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default ExperienceSection;
