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
      <div className="max-w-6xl mx-auto">
        {/* Timeline central */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-500 to-primary-600 hidden lg:block"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={job.id} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                  
                  {/* Content */}
                  <div className={`lg:flex lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Spacer */}
                    <div className="hidden lg:block lg:w-1/2"></div>
                    
                    {/* Card */}
                    <div className="lg:w-1/2 lg:px-8">
                      <Card variant="elevated" padding="lg" className="border-2 border-primary-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                        {/* Date Badge */}
                        <div className="mb-6 text-center">
                          <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold">
                            {formatDateRange(job.startDate, job.endDate)}
                          </div>
                          <div className="mt-2">
                            <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                              {calculateDuration(job.startDate, job.endDate)}
                            </span>
                          </div>
                        </div>

                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-neutral-900 mb-3 text-center">
                            {job.position}
                          </h3>
                          <div className="text-center space-y-2">
                            <div className="flex items-center justify-center">
                              <Icon name="Building" size={18} className="mr-2 text-primary-600" />
                              <span className="font-semibold text-lg text-neutral-800">{job.company}</span>
                            </div>
                            <div className="flex items-center justify-center">
                              <Icon name="MapPin" size={16} className="mr-2 text-accent-600" />
                              <span className="text-neutral-600">{job.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                          <p className="text-neutral-600 leading-relaxed text-center">
                            {job.description}
                          </p>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-bold text-neutral-900 mb-4 flex items-center justify-center text-lg">
                            <Icon name="Trophy" size={20} className="mr-2 text-primary-600" />
                            Logros Principales
                          </h4>
                          <ul className="space-y-3">
                            {job.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start">
                                <Icon name="CheckCircle" size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-neutral-600 leading-relaxed text-sm">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-bold text-neutral-900 mb-4 flex items-center justify-center text-lg">
                            <Icon name="Code2" size={20} className="mr-2 text-accent-600" />
                            Tecnologías Utilizadas
                          </h4>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {job.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 text-sm font-semibold rounded-full border border-primary-200 hover:from-primary-100 hover:to-accent-100 hover:scale-105 transition-all duration-300 shadow-soft"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
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
      </div>
    </Section>
  );
};

export default ExperienceSection; 