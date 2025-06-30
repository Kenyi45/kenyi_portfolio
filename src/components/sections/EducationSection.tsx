import React from 'react';
import { Section, Card, Icon } from '../ui';
import { EDUCATION } from '../../constants/portfolio-data';

const EducationSection: React.FC = () => {
  return (
    <Section
      id="education"
      title="Educación"
      subtitle="Mi formación académica y desarrollo profesional"
      className="bg-neutral-50"
    >
      <div className="max-w-4xl mx-auto">
        {EDUCATION.map((education, index) => (
          <Card
            key={education.id}
            variant="elevated"
            padding="xl"
            className="group hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {education.degree}
                </h3>
                <div className="flex items-center space-x-4 text-neutral-600 mb-4">
                  <div className="flex items-center">
                    <Icon name="GraduationCap" size={18} className="mr-2 text-primary-600" />
                    <span className="font-medium">{education.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2 text-primary-600" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-bold text-primary-700 mb-1">
                  {education.graduationYear}
                </div>
                <div className="text-sm text-neutral-500">
                  Graduado
                </div>
              </div>
            </div>

            {/* Highlights */}
            {education.highlights && education.highlights.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-neutral-900 mb-4 flex items-center">
                  <Icon name="Award" size={18} className="mr-2 text-primary-600" />
                  Logros y Reconocimientos
                </h4>
                <ul className="space-y-3">
                  {education.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start">
                      <Icon name="Star" size={16} className="text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Info */}
            <div className="border-t border-neutral-200 pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-neutral-900 mb-2 flex items-center">
                    <Icon name="BookOpen" size={16} className="mr-2 text-primary-600" />
                    Área de Estudio
                  </h5>
                  <p className="text-neutral-600">
                    Desarrollo de Sistemas y Programación
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-neutral-900 mb-2 flex items-center">
                    <Icon name="Target" size={16} className="mr-2 text-primary-600" />
                    Enfoque
                  </h5>
                  <p className="text-neutral-600">
                    Desarrollo de Software y Arquitectura de Sistemas
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Education Summary */}
      <div className="mt-16 text-center">
        <Card variant="bordered" padding="xl" className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8">
            Aprendizaje Continuo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <Icon name="BookOpen" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-neutral-900 mb-2">Formación Técnica</h4>
              <p className="text-neutral-600 text-sm">
                Educación especializada en desarrollo de sistemas
              </p>
            </div>
            
            <div className="group">
              <Icon name="Award" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-neutral-900 mb-2">Beca de Excelencia</h4>
              <p className="text-neutral-600 text-sm">
                Reconocimiento por desempeño académico sobresaliente
              </p>
            </div>
            
            <div className="group">
              <Icon name="Lightbulb" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-neutral-900 mb-2">Proyectos Académicos</h4>
              <p className="text-neutral-600 text-sm">
                Participación activa en desarrollo de software innovador
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-primary-50 rounded-lg">
            <p className="text-neutral-700 italic">
              "La educación es el pasaporte hacia el futuro, el mañana pertenece a aquellos 
              que se preparan para él en el día de hoy." - Malcolm X
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default EducationSection; 