// ============================================================================
// SKILLS SECTION
// ============================================================================

import React from 'react';
import { Section, Card, Icon } from '../ui';
import { SKILLS } from '../../constants/portfolio-data';
import type { SkillCategory, Skill } from '../../types';

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiDotnet,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiLaravel,
  SiFastapi,
  SiNestjs,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
  SiAwslambda,
  SiAmazonapigateway,
  SiGit,
  SiJira,
  SiTrello,
} from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';

const SkillsSection: React.FC = () => {
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  const categoryConfig = {
    languages: { title: 'Lenguajes', icon: 'Code2', tag: 'core' },
    frontend: { title: 'Frontend', icon: 'Palette', tag: 'ui' },
    backend: { title: 'Backend', icon: 'Server', tag: 'services' },
    frameworks: { title: 'Frameworks', icon: 'Layers', tag: 'stack' },
    database: { title: 'Datos', icon: 'Database', tag: 'storage' },
    cloud: { title: 'Nube & DevOps', icon: 'Cloud', tag: 'ops' },
    tools: { title: 'Herramientas', icon: 'Settings', tag: 'delivery' },
  };

  // react-icons / React 18: IconType puede exponer ReactNode; evitamos fricción de tipos aquí
  const iconMap: Record<string, any> = {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiPhp,
    SiDotnet,
    SiHtml5,
    SiCss3,
    SiReact,
    SiAngular,
    SiNextdotjs,
    SiLaravel,
    SiFastapi,
    SiNestjs,
    SiNodedotjs,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiGooglecloud,
    SiAwslambda,
    SiAmazonapigateway,
    DiMsqlServer,
    SiGit,
    SiJira,
    SiTrello,
  };

  const levelBadge = (level: string) => {
    const map = {
      expert: 'bg-primary-100 text-primary-900 border-primary-200',
      advanced: 'bg-accent-100 text-accent-900 border-accent-200',
      intermediate: 'bg-neutral-100 text-neutral-800 border-neutral-200',
      beginner: 'bg-neutral-50 text-neutral-600 border-neutral-200',
    };
    return map[level as keyof typeof map] ?? map.beginner;
  };

  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Herramientas y profundidad"
      subtitle="Clasificado por dominio. Los niveles reflejan uso profesional reciente, no autocalificación genérica."
      className="bg-secondary-50/50"
    >
      <div className="space-y-14">
        {Object.entries(skillsByCategory).map(([category, skills]) => {
          const config = categoryConfig[category as SkillCategory];
          if (!config) return null;

          return (
            <div key={category}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center rounded-xl border border-primary-200 bg-white p-2.5 shadow-sm">
                  <Icon name={config.icon} size={20} className="text-primary-700" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-[length:var(--text-xl)] font-bold text-neutral-900">{config.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{config.tag}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 @lg:gap-4">
                {skills.map((skill) => {
                  const TechIcon = skill.icon ? iconMap[skill.icon] : null;
                  return (
                    <Card
                      key={skill.id}
                      variant="bordered"
                      padding="md"
                      className="group text-center hover:border-primary-300"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="text-primary-700 group-hover:scale-105 transition-transform duration-smooth ease-out-expo">
                          {TechIcon ? (
                            <TechIcon size={36} />
                          ) : (
                            <Icon name="Code2" size={36} className="text-neutral-400" aria-hidden />
                          )}
                        </div>
                        <h4 className="font-medium text-neutral-900 text-[length:var(--text-sm)] leading-tight">{skill.name}</h4>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wide px-2 py-0.5 rounded-md border ${levelBadge(skill.level)}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <Card variant="gradient" padding="xl">
          <h3 className="font-display text-[length:var(--text-xl)] font-bold text-neutral-900 mb-8 text-center">Principios de ingeniero</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <Icon name="Target" size={32} className="text-primary-600 mx-auto md:mx-0 mb-3" aria-hidden />
              <h4 className="font-semibold text-neutral-900 mb-2">Límites claros</h4>
              <p className="text-neutral-600 text-[length:var(--text-sm)] leading-relaxed">Contratos de API y modelos de dominio explícitos.</p>
            </div>
            <div>
              <Icon name="Zap" size={32} className="text-primary-600 mx-auto md:mx-0 mb-3" aria-hidden />
              <h4 className="font-semibold text-neutral-900 mb-2">Rendimiento</h4>
              <p className="text-neutral-600 text-[length:var(--text-sm)] leading-relaxed">Menos trabajo inútil en request; observabilidad cuando aporta.</p>
            </div>
            <div>
              <Icon name="Users" size={32} className="text-primary-600 mx-auto md:mx-0 mb-3" aria-hidden />
              <h4 className="font-semibold text-neutral-900 mb-2">Producto</h4>
              <p className="text-neutral-600 text-[length:var(--text-sm)] leading-relaxed">Handoffs con negocio y operaciones sin sorpresas en producción.</p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default SkillsSection;
