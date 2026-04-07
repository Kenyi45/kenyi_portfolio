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
      expert: 'bg-primary-500/15 text-primary-300 border-primary-500/30',
      advanced: 'bg-accent-500/10 text-accent-300 border-accent-500/25',
      intermediate: 'bg-secondary-700/80 text-secondary-300 border-secondary-600',
      beginner: 'bg-secondary-800 text-secondary-400 border-secondary-700',
    };
    return map[level as keyof typeof map] ?? map.beginner;
  };

  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Herramientas y profundidad"
      subtitle="Clasificado por dominio. Los niveles reflejan uso profesional reciente, no autocalificación genérica."
    >
      <div className="space-y-14">
        {Object.entries(skillsByCategory).map(([category, skills]) => {
          const config = categoryConfig[category as SkillCategory];
          if (!config) return null;

          return (
            <div key={category}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center rounded-xl border border-secondary-700 bg-secondary-900/60 p-2.5">
                  <Icon name={config.icon} size={20} className="text-primary-400" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-secondary-100">{config.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-secondary-500">{config.tag}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {skills.map((skill) => {
                  const TechIcon = skill.icon ? iconMap[skill.icon] : null;
                  return (
                    <Card
                      key={skill.id}
                      variant="bordered"
                      padding="md"
                      className="group text-center hover:border-primary-500/35"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="text-primary-200 group-hover:scale-105 transition-transform">
                          {TechIcon ? (
                            <TechIcon size={36} />
                          ) : (
                            <Icon name="Code2" size={36} className="text-secondary-600" aria-hidden />
                          )}
                        </div>
                        <h4 className="font-medium text-secondary-100 text-sm leading-tight">{skill.name}</h4>
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
          <h3 className="font-display text-xl font-bold text-secondary-100 mb-8 text-center">Principios de ingeniero</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <Icon name="Target" size={32} className="text-primary-400 mx-auto md:mx-0 mb-3" aria-hidden />
              <h4 className="font-semibold text-secondary-100 mb-2">Límites claros</h4>
              <p className="text-secondary-500 text-sm leading-relaxed">Contratos de API y modelos de dominio explícitos.</p>
            </div>
            <div>
              <Icon name="Zap" size={32} className="text-primary-400 mx-auto md:mx-0 mb-3" aria-hidden />
              <h4 className="font-semibold text-secondary-100 mb-2">Rendimiento</h4>
              <p className="text-secondary-500 text-sm leading-relaxed">Menos trabajo inútil en request; observabilidad cuando aporta.</p>
            </div>
            <div>
              <Icon name="Users" size={32} className="text-primary-400 mx-auto md:mx-0 mb-3" aria-hidden />
              <h4 className="font-semibold text-secondary-100 mb-2">Producto</h4>
              <p className="text-secondary-500 text-sm leading-relaxed">Handoffs con negocio y operaciones sin sorpresas en producción.</p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default SkillsSection;
