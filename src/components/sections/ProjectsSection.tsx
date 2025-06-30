import React from 'react';
import { Section, Card, Icon, Button } from '../ui';
import { PROJECTS } from '../../constants/portfolio-data';

const ProjectsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    const icons = {
      web: 'Globe',
      mobile: 'Smartphone',
      backend: 'Server',
      fullstack: 'Code2',
      automation: 'Cog'
    };
    return icons[category as keyof typeof icons] || 'Code2';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      web: 'bg-blue-50 text-blue-700 border-blue-200',
      mobile: 'bg-green-50 text-green-700 border-green-200',
      backend: 'bg-purple-50 text-purple-700 border-purple-200',
      fullstack: 'bg-primary-50 text-primary-700 border-primary-200',
      automation: 'bg-orange-50 text-orange-700 border-orange-200'
    };
    return colors[category as keyof typeof colors] || 'bg-primary-50 text-primary-700 border-primary-200';
  };

  return (
    <Section
      id="projects"
      title="Proyectos Destacados"
      subtitle="Algunos de los proyectos más importantes que he desarrollado"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {PROJECTS.map((project, index) => (
          <Card
            key={project.id}
            variant="elevated"
            padding="xl"
            className="group hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    <Icon name={getCategoryIcon(project.category)} size={12} className="mr-1" />
                    {project.category.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="flex space-x-2 ml-4">
                {project.url && (
                  <Button
                    variant="ghost"
                    size="sm"
                    href={project.url}
                    external
                  >
                    <Icon name="ExternalLink" size={16} />
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    href={project.githubUrl}
                    external
                  >
                    <Icon name="Github" size={16} />
                  </Button>
                )}
              </div>
            </div>

            {/* Project Description */}
            <p className="text-neutral-600 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Project Highlights */}
            <div className="mb-6">
              <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                <Icon name="Star" size={16} className="mr-2 text-primary-600" />
                Características Principales
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start text-sm">
                    <Icon name="ChevronRight" size={14} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                <Icon name="Code2" size={16} className="mr-2 text-primary-600" />
                Stack Tecnológico
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-md hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Projects Summary */}
      <div className="text-center">
        <Card variant="bordered" padding="xl" className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">
            Más Proyectos
          </h3>
          <p className="text-neutral-600 mb-8">
            Estos son algunos de mis proyectos destacados. Tengo experiencia desarrollando 
            desde aplicaciones web completas hasta sistemas de integración complejos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              size="lg"
              href="mailto:kenyiva45@gmail.com"
              external
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Discutir un Proyecto
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="https://linkedin.com/in/ivan-vega-aliaga"
              external
            >
              <Icon name="Linkedin" size={20} className="mr-2" />
              Ver LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default ProjectsSection; 