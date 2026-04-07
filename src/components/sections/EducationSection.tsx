import React from 'react';
import { Section, Card, Icon } from '../ui';
import { EDUCATION } from '../../constants/portfolio-data';

const EducationSection: React.FC = () => {
  return (
    <Section
      id="education"
      eyebrow="Formación"
      title="Educación"
      subtitle="Base técnica formal y aprendizaje aplicado en proyectos reales."
      className="bg-white/80 border-y border-neutral-200/80"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {EDUCATION.map((education) => (
          <Card key={education.id} variant="elevated" padding="xl">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
              <div>
                <h3 className="font-display text-[length:var(--text-xl)] font-bold text-neutral-900 mb-2 break-words">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-neutral-600 text-[length:var(--text-sm)]">
                  <span className="inline-flex items-center gap-2">
                    <Icon name="GraduationCap" size={16} className="text-primary-600 shrink-0" aria-hidden />
                    {education.institution}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-neutral-500 shrink-0" aria-hidden />
                    {education.location}
                  </span>
                </div>
              </div>
              <div className="text-left lg:text-right">
                <p className="font-display text-[length:var(--text-2xl)] font-bold text-primary-700">{education.graduationYear}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Graduación</p>
              </div>
            </div>

            {education.highlights && education.highlights.length > 0 && (
              <div className="mb-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                  <Icon name="Award" size={16} className="text-accent-600" aria-hidden />
                  Logros
                </h4>
                <ul className="space-y-2">
                  {education.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-[length:var(--text-sm)] text-neutral-700">
                      <Icon name="Star" size={14} className="text-amber-500 shrink-0 mt-0.5" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-neutral-200 pt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-2">
                  <Icon name="BookOpen" size={14} aria-hidden />
                  Área
                </h5>
                <p className="text-neutral-600 text-[length:var(--text-sm)]">Desarrollo de sistemas y programación</p>
              </div>
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-2">
                  <Icon name="Target" size={14} aria-hidden />
                  Enfoque
                </h5>
                <p className="text-neutral-600 text-[length:var(--text-sm)]">Software y arquitectura de sistemas</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-14">
        <Card variant="bordered" padding="xl" className="max-w-3xl mx-auto">
          <h3 className="font-display text-[length:var(--text-lg)] font-bold text-neutral-900 mb-6 text-center">
            Aprendizaje continuo
          </h3>
          <p className="text-center text-neutral-600 text-[length:var(--text-sm)] leading-relaxed">
            Actualización constante en patrones cloud, calidad de APIs y experiencia de producto — complemento natural a la
            formación técnica.
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default EducationSection;
