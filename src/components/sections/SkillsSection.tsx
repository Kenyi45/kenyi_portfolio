// ============================================================================
// SKILLS SECTION - Professional Skills
// ============================================================================

import React from 'react';
import { Section, Card, Icon } from '../ui';
import { SKILLS } from '../../constants/portfolio-data';
import type { SkillCategory, Skill } from '../../types';

// Importar iconos específicos de react-icons
import {
  SiJavascript, SiTypescript, SiPython, SiPhp, SiDotnet, SiHtml5, SiCss3,
  SiReact, SiAngular, SiNextdotjs, SiLaravel, SiFastapi, SiNestjs, SiNodedotjs,
  SiMysql, SiPostgresql, SiMongodb, SiGooglecloud,
  SiAwslambda, SiAmazonapigateway, SiGit, SiJira, SiTrello
} from 'react-icons/si';
import { DiMsqlServer } from "react-icons/di";

// Principio Single Responsibility: Solo maneja la visualización de habilidades
// Principio Open/Closed: Extensible para nuevas categorías de skills

const SkillsSection: React.FC = () => {
  // Agrupar skills por categoría - creamos arrays mutables
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  // Configuración de categorías con iconos y títulos
  const categoryConfig = {
    languages: { title: 'Lenguajes de Programación', icon: 'Code2', color: 'primary' },
    frontend: { title: 'Frontend', icon: 'Palette', color: 'accent' },
    backend: { title: 'Backend', icon: 'Server', color: 'secondary' },
    frameworks: { title: 'Frameworks', icon: 'Layers', color: 'primary' },
    database: { title: 'Bases de Datos', icon: 'Database', color: 'accent' },
    cloud: { title: 'Cloud & DevOps', icon: 'Cloud', color: 'secondary' },
    tools: { title: 'Herramientas', icon: 'Settings', color: 'primary' }
  };

  // Mapeo de iconos de react-icons
  const iconMap: Record<string, any> = {
    SiJavascript, SiTypescript, SiPython, SiPhp, SiDotnet, SiHtml5, SiCss3,
    SiReact, SiAngular, SiNextdotjs, SiLaravel, SiFastapi, SiNestjs, SiNodedotjs,
    SiMysql, SiPostgresql, SiMongodb, SiGooglecloud,
    SiAwslambda, SiAmazonapigateway, DiMsqlServer, SiGit, SiJira, SiTrello
  };

  // Obtener color por nivel de habilidad
  const getLevelColor = (level: string) => {
    const colors = {
      beginner: 'text-neutral-400',
      intermediate: 'text-accent-500',
      advanced: 'text-primary-600',
      expert: 'text-primary-700'
    };
    return colors[level as keyof typeof colors] || 'text-neutral-400';
  };

  return (
    <Section
      id="skills"
      title="Habilidades Técnicas"
      subtitle="Tecnologías y herramientas con las que trabajo día a día"
    >
      <div className="space-y-12">
        {Object.entries(skillsByCategory).map(([category, skills]) => {
          const config = categoryConfig[category as SkillCategory];
          if (!config) return null;

          return (
            <div key={category} className="animate-fade-in">
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary-50 rounded-lg mr-4">
                  <Icon name={config.icon} size={24} className="text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {config.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill) => {
                  const TechIcon = skill.icon ? iconMap[skill.icon] : null;
                  
                  return (
                    <Card
                      key={skill.id}
                      variant="bordered"
                      padding="lg"
                      className="group hover:scale-110 transition-all duration-300 hover:border-primary-300 hover:shadow-lg text-center"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        {/* Icono de la tecnología */}
                        <div className={`transition-all duration-300 ${getLevelColor(skill.level)} group-hover:scale-125`}>
                          {TechIcon ? (
                            <TechIcon size={48} />
                          ) : (
                            <Icon name="Code2" size={48} className="text-neutral-400" />
                          )}
                        </div>
                        
                        {/* Nombre de la tecnología */}
                        <div>
                          <h4 className="font-semibold text-neutral-900 text-sm mb-1">
                            {skill.name}
                          </h4>
                          
                          {/* Nivel de experiencia */}
                          <span className={`text-xs font-medium capitalize px-2 py-1 rounded-full ${
                            skill.level === 'expert' ? 'bg-primary-100 text-primary-700' :
                            skill.level === 'advanced' ? 'bg-accent-100 text-accent-700' :
                            skill.level === 'intermediate' ? 'bg-blue-100 text-blue-700' :
                            'bg-neutral-100 text-neutral-600'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Skills Summary */}
      <div className="mt-20 text-center">
        <Card variant="elevated" padding="xl" className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">
            Filosofía de Desarrollo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <Icon name="Target" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-neutral-900 mb-2">Clean Code</h4>
              <p className="text-neutral-600 text-sm">
                Código limpio, mantenible y siguiendo principios SOLID
              </p>
            </div>
            
            <div className="group">
              <Icon name="Zap" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-neutral-900 mb-2">Performance</h4>
              <p className="text-neutral-600 text-sm">
                Optimización constante para máxima eficiencia
              </p>
            </div>
            
            <div className="group">
              <Icon name="Users" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-neutral-900 mb-2">UX Focus</h4>
              <p className="text-neutral-600 text-sm">
                Centrado en la experiencia del usuario final
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default SkillsSection; 