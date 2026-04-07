// ============================================================================
// PROJECTS SECTION — layout bento
// ============================================================================

import React from 'react';
import { clsx } from 'clsx';
import { Section, Card, Icon, Button } from '../ui';
import { PROJECTS } from '../../constants/portfolio-data';

const ProjectsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    const icons = {
      web: 'Globe',
      mobile: 'Smartphone',
      backend: 'Server',
      fullstack: 'Code2',
      automation: 'Cog',
    };
    return icons[category as keyof typeof icons] || 'Code2';
  };

  const getCategoryStyle = (category: string) => {
    const styles: Record<string, string> = {
      web: 'border-sky-500/30 text-sky-300 bg-sky-500/10',
      mobile: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
      backend: 'border-accent-500/30 text-accent-300 bg-accent-500/10',
      fullstack: 'border-primary-500/35 text-primary-300 bg-primary-500/10',
      automation: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
    };
    return styles[category] || styles.fullstack;
  };

  return (
    <Section
      id="projects"
      eyebrow="Casos"
      title="Proyectos y sistemas"
      subtitle="Selección de entregas con impacto: optimización logística, ERP, pagos y herramientas web."
      className="bg-secondary-900/35 border-y border-secondary-800/60"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-fr">
        {PROJECTS.map((project, index) => {
          const featured = index === 0;

          return (
            <Card
              key={project.id}
              variant={featured ? 'gradient-border' : 'elevated'}
              padding={featured ? 'xl' : 'lg'}
              className={clsx(
                'flex flex-col h-full min-h-[180px] motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5',
                featured && 'md:col-span-2 md:row-span-2'
              )}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span
                    className={clsx(
                      'inline-flex items-center gap-1 rounded-lg border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
                      getCategoryStyle(project.category)
                    )}
                  >
                    <Icon name={getCategoryIcon(project.category)} size={12} aria-hidden />
                    {project.category}
                  </span>
                  <h3
                    className={clsx(
                      'font-display font-bold text-secondary-50 mt-3 group-hover:text-primary-200 transition-colors',
                      featured ? 'text-2xl' : 'text-lg'
                    )}
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-1 shrink-0">
                  {project.url && (
                    <Button variant="ghost" size="sm" href={project.url} external className="!p-2">
                      <Icon name="ExternalLink" size={16} aria-hidden />
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" href={project.githubUrl} external className="!p-2">
                      <Icon name="Github" size={16} aria-hidden />
                    </Button>
                  )}
                </div>
              </div>

              <p
                className={clsx(
                  'text-secondary-400 leading-relaxed grow',
                  featured ? 'text-base' : 'text-sm line-clamp-3 md:line-clamp-none'
                )}
              >
                {project.description}
              </p>

              <div className={clsx('mt-5 space-y-4', !featured && 'hidden sm:block')}>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-secondary-500 mb-2 flex items-center gap-2">
                    <Icon name="Star" size={14} className="text-primary-400" aria-hidden />
                    Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {(featured ? project.highlights : project.highlights.slice(0, 2)).map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-sm text-secondary-300">
                        <Icon name="ChevronRight" size={14} className="text-primary-500 shrink-0 mt-0.5" aria-hidden />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-secondary-500 mb-2">Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-secondary-900 border border-secondary-700 text-[11px] font-mono text-secondary-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-14">
        <Card variant="bordered" padding="xl" className="text-center max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-bold text-secondary-100 mb-3">¿Siguiente sistema?</h3>
          <p className="text-secondary-500 text-sm mb-8">
            Cuéntame el contexto de negocio, restricciones y el resultado esperado; propongo arquitectura y plan de entrega.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" size="lg" href="mailto:kenyiva45@gmail.com" external>
              <Icon name="Mail" size={18} className="mr-2" aria-hidden />
              Escribirme
            </Button>
            <Button variant="outline" size="lg" href="https://linkedin.com/in/ivan-vega-aliaga" external>
              <Icon name="Linkedin" size={18} className="mr-2" aria-hidden />
              LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default ProjectsSection;
