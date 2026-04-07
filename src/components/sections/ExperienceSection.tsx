// ============================================================================
// EXPERIENCE SECTION
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

  return (
    <Section
      id="experience"
      eyebrow="Trayectoria"
      title="Experiencia profesional"
      subtitle="Roles con responsabilidad en integración, producto interno y confiabilidad operativa."
      className="bg-secondary-900/35 border-y border-secondary-800/60"
    >
      <div className="max-w-3xl mx-auto relative pl-8 sm:pl-10">
        <div
          className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/40 to-primary-600/50"
          aria-hidden
        />

        <ul className="space-y-12">
          {EXPERIENCE.map((job, index) => (
            <li key={job.id} className="relative">
              <div
                className={clsx(
                  'absolute left-[-1.55rem] sm:left-[-1.85rem] top-6 h-3 w-3 rounded-full border-2 border-secondary-950 bg-primary-400 shadow-[0_0_0_4px_rgba(34,211,238,0.15)]',
                  index === 0 && 'bg-primary-300 shadow-[0_0_0_4px_rgba(34,211,238,0.28)]'
                )}
                aria-hidden
              />

              <Card variant="elevated" padding="lg" className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] to-transparent pointer-events-none" aria-hidden />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 relative">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-primary-400/90 mb-2">
                      {formatDateRange(job.startDate, job.endDate)} · {calculateDuration(job.startDate, job.endDate)}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-secondary-50">{job.position}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-secondary-400 text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <Icon name="Building" size={16} className="text-accent-400 shrink-0" aria-hidden />
                        {job.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Icon name="MapPin" size={16} className="text-secondary-500 shrink-0" aria-hidden />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-secondary-400 text-sm leading-relaxed mb-6">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-secondary-500 mb-3 flex items-center gap-2">
                    <Icon name="Trophy" size={16} className="text-primary-400" aria-hidden />
                    Impacto
                  </h4>
                  <ul className="space-y-2.5">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-sm text-secondary-300 leading-relaxed">
                        <Icon name="CheckCircle" size={16} className="text-emerald-400/90 shrink-0 mt-0.5" aria-hidden />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-secondary-500 mb-3">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg border border-secondary-700 bg-secondary-900/80 text-xs font-mono text-secondary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <Card variant="bordered" padding="xl">
          <h3 className="font-display text-lg font-bold text-secondary-100 mb-8 text-center">En números</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: 'Calendar' as const, value: '+4', label: 'Años' },
              { icon: 'Building' as const, value: '3', label: 'Empresas' },
              { icon: 'Zap' as const, value: '25%', label: 'Mejora ref.' },
              { icon: 'Shield' as const, value: '99.9%', label: 'SLA objetivo' },
            ].map((item) => (
              <div key={item.label}>
                <Icon name={item.icon} size={28} className="text-primary-400 mx-auto mb-3" aria-hidden />
                <div className="font-display text-2xl font-bold text-secondary-100">{item.value}</div>
                <div className="text-secondary-500 text-xs font-mono uppercase tracking-wider mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default ExperienceSection;
