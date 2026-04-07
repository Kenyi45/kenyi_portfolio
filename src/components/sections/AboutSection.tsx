// ============================================================================
// ABOUT SECTION
// ============================================================================

import React from 'react';
import { Section, Card, Icon } from '../ui';
import { PERSONAL_INFO } from '../../constants/portfolio-data';

const AboutSection: React.FC = () => {
  const highlights = [
    { icon: 'Trophy' as const, title: '+4 años', description: 'Construcción y evolución de productos' },
    { icon: 'Users' as const, title: 'Integraciones', description: 'Pagos, ERP y equipos multidisciplina' },
    { icon: 'Zap' as const, title: '25–30%', description: 'Ganancias medibles en proyectos clave' },
    { icon: 'Shield' as const, title: '99.9%', description: 'Disponibilidad objetivo en operaciones' },
  ];

  const pillars = [
    {
      icon: 'Code2' as const,
      title: 'Frontend & DX',
      body: 'React, Angular, TypeScript, UX orientada a dominios de negocio.',
    },
    {
      icon: 'Server' as const,
      title: 'Backend & contratos',
      body: 'Laravel, NestJS, FastAPI, Node — APIs coherentes y versionables.',
    },
    {
      icon: 'Cloud' as const,
      title: 'Nube & operación',
      body: 'GCP, AWS Lambda y API Gateway para cargas integradas y escalables.',
    },
  ];

  return (
    <Section
      id="about"
      eyebrow="Perfil"
      title="Arquitectura práctica sobre código"
      subtitle="Conecto requisitos de negocio con diseño de sistemas: integraciones, datos y despliegue, sin perder de vista la mantenibilidad."
      className="bg-secondary-900/35 border-y border-secondary-800/60"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-2xl font-semibold text-secondary-100 mb-4">{PERSONAL_INFO.title}</h3>
            <p className="text-secondary-400 leading-relaxed text-lg">{PERSONAL_INFO.summary}</p>
          </div>

          <div className="space-y-4 font-mono text-sm">
            <div className="flex items-center gap-3 text-secondary-300">
              <Icon name="MapPin" size={18} className="text-primary-400 shrink-0" aria-hidden />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-3 text-secondary-300">
              <Icon name="Mail" size={18} className="text-primary-400 shrink-0" aria-hidden />
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary-300 transition-colors break-all">
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-secondary-300">
              <Icon name="Linkedin" size={18} className="text-primary-400 shrink-0" aria-hidden />
              <a
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-300 transition-colors"
              >
                {PERSONAL_INFO.linkedin}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h) => (
            <Card key={h.title} variant="bordered" padding="lg" className="group hover:-translate-y-0.5">
              <div className="mb-4 inline-flex rounded-xl border border-primary-500/25 bg-primary-500/10 p-3">
                <Icon name={h.icon} size={22} className="text-primary-300" aria-hidden />
              </div>
              <h4 className="font-display text-lg font-bold text-secondary-100 mb-1">{h.title}</h4>
              <p className="text-secondary-500 text-sm leading-snug">{h.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-400/90 mb-6">Áreas de trabajo</p>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <Card key={p.title} variant="elevated" padding="lg" className="h-full">
              <Icon name={p.icon} size={32} className="text-accent-400 mb-4" aria-hidden />
              <h4 className="font-display font-semibold text-secondary-100 mb-2">{p.title}</h4>
              <p className="text-secondary-500 text-sm leading-relaxed">{p.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
