// ============================================================================
// EXPERIENCE SECTION - Professional Experience
// ============================================================================

import React from 'react';
import { Section, Card, Icon } from '../ui';
import { EXPERIENCE } from '../../constants/portfolio-data';

// Principio Single Responsibility: Solo maneja la experiencia profesional

const ExperienceSection: React.FC = () => {
  // Formatear fechas para mostrar
  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const startMonth = start.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
    const endMonth = end.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
    
    return `${startMonth} - ${endMonth}`;
  };

  // Calcular duración en meses
  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    
    if (months < 12) {
      return `${months} meses`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      return remainingMonths > 0 ? `${years} años ${remainingMonths} meses` : `${years} años`;
    }
  };

  return (
    <Section
      id="experience"
      title="Experiencia Profesional"
      subtitle="Mi trayectoria profesional desarrollando soluciones tecnológicas innovadoras"
      className="bg-neutral-50"
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden lg:block" />

        <div className="space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-sm hidden lg:block" />
              
              <div className="lg:ml-20">
                <Card variant="elevated" padding="xl" className="group hover:scale-[1.02] transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                        {job.position}
                      </h3>
                      <div className="flex items-center space-x-4 text-neutral-600 mb-2">
                        <div className="flex items-center">
                          <Icon name="Building" size={16} className="mr-2 text-primary-600" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="MapPin" size={16} className="mr-2 text-primary-600" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary-700 mb-1">
                        {formatDateRange(job.startDate, job.endDate)}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {calculateDuration(job.startDate, job.endDate)}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-4 flex items-center">
                      <Icon name="Trophy" size={18} className="mr-2 text-primary-600" />
                      Logros Principales
                    </h4>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-600 leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                      <Icon name="Code2" size={18} className="mr-2 text-primary-600" />
                      Tecnologías Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-200 hover:bg-primary-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Summary */}
      <div className="mt-20">
        <Card variant="bordered" padding="xl" className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8">
            Resumen de Experiencia
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <Icon name="Calendar" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-neutral-900 mb-2">+4</div>
              <div className="text-neutral-600 text-sm">Años de Experiencia</div>
            </div>
            
            <div className="group">
              <Icon name="Building" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-neutral-900 mb-2">3</div>
              <div className="text-neutral-600 text-sm">Empresas</div>
            </div>
            
            <div className="group">
              <Icon name="Zap" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-neutral-900 mb-2">25%</div>
              <div className="text-neutral-600 text-sm">Mejora Promedio</div>
            </div>
            
            <div className="group">
              <Icon name="Shield" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-neutral-900 mb-2">99.9%</div>
              <div className="text-neutral-600 text-sm">Disponibilidad</div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default ExperienceSection; 