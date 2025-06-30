// ============================================================================
// PORTFOLIO DATA CONSTANTS
// ============================================================================

import type { 
  PortfolioData, 
  PersonalInfo, 
  Skill, 
  Experience, 
  Education, 
  Project,
  ContactInfo,
  SocialLink 
} from '../types';

// ============================================================================
// PERSONAL INFORMATION
// ============================================================================

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Kenyi Ivan Vega Aliaga',
  title: 'Desarrollador Full Stack',
  location: 'Lima, Perú',
  phone: '954201172',
  email: 'kenyiva45@gmail.com',
  linkedin: 'linkedin.com/in/ivan-vega-aliaga',
  summary: 'Desarrollador fullstack con más de 4 años de experiencia en desarrollo web, móvil y sistemas ERP. He liderado integraciones de pasarelas de pago, desarrollado soluciones backend y frontend, y gestionado infraestructura TI. Apasionado por la creación de productos eficientes, escalables y centrados en el usuario.'
} as const;

// ============================================================================
// SKILLS PORTFOLIO
// ============================================================================

export const SKILLS: readonly Skill[] = [
  // Lenguajes de Programación
  { id: 'js', name: 'JavaScript', category: 'languages', level: 'expert', icon: 'SiJavascript' },
  { id: 'ts', name: 'TypeScript', category: 'languages', level: 'expert', icon: 'SiTypescript' },
  { id: 'python', name: 'Python', category: 'languages', level: 'advanced', icon: 'SiPython' },
  { id: 'php', name: 'PHP', category: 'languages', level: 'advanced', icon: 'SiPhp' },
  { id: 'csharp', name: '.NET', category: 'languages', level: 'intermediate', icon: 'SiDotnet' },
  { id: 'html', name: 'HTML5', category: 'frontend', level: 'expert', icon: 'SiHtml5' },
  { id: 'css', name: 'CSS3', category: 'frontend', level: 'expert', icon: 'SiCss3' },
  
  // Frontend Frameworks
  { id: 'react', name: 'ReactJS', category: 'frontend', level: 'expert', icon: 'SiReact' },
  { id: 'angular', name: 'Angular', category: 'frontend', level: 'advanced', icon: 'SiAngular' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', level: 'advanced', icon: 'SiNextdotjs' },
  
  // Backend Frameworks
  { id: 'laravel', name: 'Laravel', category: 'backend', level: 'expert', icon: 'SiLaravel' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', level: 'advanced', icon: 'SiFastapi' },
  { id: 'nestjs', name: 'NestJS', category: 'backend', level: 'advanced', icon: 'SiNestjs' },
  { id: 'nodejs', name: 'Node.js', category: 'backend', level: 'advanced', icon: 'SiNodedotjs' },
  
  // Bases de Datos
  { id: 'mysql', name: 'MySQL', category: 'database', level: 'expert', icon: 'SiMysql' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', level: 'advanced', icon: 'SiPostgresql' },
  { id: 'sqlserver', name: 'SQL Server', category: 'database', level: 'advanced', icon: 'DiMsqlServer' },
  { id: 'mongodb', name: 'MongoDB', category: 'database', level: 'intermediate', icon: 'SiMongodb' },
  
  // Cloud & DevOps
  { id: 'gcp', name: 'Google Cloud Platform', category: 'cloud', level: 'advanced', icon: 'SiGooglecloud' },
  { id: 'aws', name: 'AWS Lambda', category: 'cloud', level: 'intermediate', icon: 'SiAwslambda' },
  { id: 'aws-gateway', name: 'API Gateway', category: 'cloud', level: 'intermediate', icon: 'SiAmazonapigateway' },
  
  // Herramientas
  { id: 'git', name: 'Git', category: 'tools', level: 'expert', icon: 'SiGit' },
  { id: 'jira', name: 'Jira', category: 'tools', level: 'advanced', icon: 'SiJira' },
  { id: 'trello', name: 'Trello', category: 'tools', level: 'advanced', icon: 'SiTrello' },
] as const;

// ============================================================================
// PROFESSIONAL EXPERIENCE
// ============================================================================

export const EXPERIENCE: readonly Experience[] = [
  {
    id: 'urbano-express',
    company: 'Urbano Express',
    position: 'Desarrollador Full Stack',
    location: 'Lima, Perú',
    startDate: '2024-06',
    endDate: '2025-04',
    technologies: ['React', 'TypeScript', 'Laravel', 'Angular', 'PHP', 'Python', 'NestJS', 'Node.js', 'PostgreSQL', 'GCP'],
    achievements: [
      'Desarrollé un sistema de rutas óptimas para entregas, mejorando la eficiencia logística en un 25% usando Python, React con TypeScript, PostgreSQL, GCP y APIs de terceros',
      'Agregué nuevos módulos y funcionalidades al ERP de desarrollo propio PYP, desarrollado en Laravel con framework Sencha de frontend',
      'Creé APIs, Web Services e integración con APIs de terceros, nuevos módulos de reportes y administrativos',
      'Colaboré con equipos de diseño y operaciones para ajustar el sistema a las necesidades del negocio',
      'Realicé pruebas automatizadas para asegurar la estabilidad de los nuevos desarrollos'
    ],
    description: 'Desarrollo de sistemas de logística y ERP con tecnologías modernas y arquitectura escalable.'
  },
  {
    id: 'delfosti',
    company: 'Delfosti',
    position: 'Gestor de Integraciones',
    location: 'Lima, Perú',
    startDate: '2021-08',
    endDate: '2024-05',
    technologies: ['PHP', 'React', 'TypeScript', 'MySQL', 'PostgreSQL', 'Laravel', 'AWS Lambda', 'API Gateway', 'Node.js'],
    achievements: [
      'Lideré la integración de pasarelas de pago como Izipay, mejorando el proceso de cobros online',
      'Creé un sistema ERP para la administración y registro de todas las integraciones realizadas usando Laravel, React con TypeScript y MySQL',
      'Implementé flujos serverless utilizando AWS Lambda, API Gateway y Node.js, facilitando integraciones escalables y de alto rendimiento',
      'Brindé soporte técnico y coordinación directa con clientes para asegurar integraciones exitosas',
      'Administré Microsoft 365 y gestioné la infraestructura TI, asegurando disponibilidad del 99.9%',
      'Documenté procesos de integración para facilitar futuras implementaciones'
    ],
    description: 'Liderazgo en integraciones de sistemas y desarrollo de soluciones serverless para múltiples clientes.'
  },
  {
    id: 'lima-ilustra',
    company: 'Lima Ilustra',
    position: 'Desarrollador Web',
    location: 'Lima, Perú',
    startDate: '2020-07',
    endDate: '2021-05',
    technologies: ['Laravel', 'MySQL', 'React', '.NET'],
    achievements: [
      'Diseñé y desarrollé plantillas dinámicas en PHP para la creación de CVs personalizados',
      'Implementé interfaces web responsivas y amigables para usuarios no técnicos',
      'Mejoré el rendimiento del sitio web en un 30% mediante optimización de código',
      'Coordiné pruebas de usabilidad con usuarios reales para validar diseños'
    ],
    description: 'Desarrollo de aplicaciones web con enfoque en experiencia de usuario y optimización de rendimiento.'
  }
] as const;

// ============================================================================
// EDUCATION
// ============================================================================

export const EDUCATION: readonly Education[] = [
  {
    id: 'wernher-von-braun',
    institution: 'Instituto Wernher Von Braun',
    degree: 'Técnico en Desarrollo de Sistemas',
    location: 'Lima, Perú',
    graduationYear: 2021,
    highlights: [
      'Beca 18',
      'Participación activa en proyectos académicos de software'
    ]
  }
] as const;

// ============================================================================
// PROJECTS (Ejemplos basados en experiencia)
// ============================================================================

export const PROJECTS: readonly Project[] = [
  {
    id: 'sistema-rutas-urbano',
    title: 'Sistema de Rutas Óptimas',
    description: 'Sistema avanzado de optimización de rutas para entregas que mejoró la eficiencia logística en un 25%.',
    technologies: ['Python', 'React', 'TypeScript', 'PostgreSQL', 'GCP', 'APIs de terceros'],
    highlights: [
      'Algoritmos de optimización de rutas',
      'Integración con APIs de mapas',
      'Dashboard en tiempo real',
      'Mejora del 25% en eficiencia logística'
    ],
    category: 'fullstack'
  },
  {
    id: 'erp-pyp',
    title: 'ERP PYP - Sistema Empresarial',
    description: 'Sistema ERP completo desarrollado en Laravel con frontend Sencha para gestión empresarial integral.',
    technologies: ['Laravel', 'PHP', 'Sencha', 'MySQL', 'APIs REST'],
    highlights: [
      'Módulos de reportes avanzados',
      'Gestión administrativa completa',
      'Integración con sistemas terceros',
      'Arquitectura escalable'
    ],
    category: 'fullstack'
  },
  {
    id: 'integraciones-izipay',
    title: 'Sistema de Pagos Izipay',
    description: 'Integración completa de pasarela de pagos con sistema ERP para procesamiento automático de transacciones.',
    technologies: ['PHP', 'React', 'TypeScript', 'AWS Lambda', 'API Gateway', 'Node.js'],
    highlights: [
      'Integración segura de pagos',
      'Flujos serverless automatizados',
      'Dashboard de transacciones',
      'Disponibilidad 99.9%'
    ],
    category: 'backend'
  },
  {
    id: 'generador-cv',
    title: 'Generador de CV Dinámicos',
    description: 'Plataforma web para crear CVs personalizados con plantillas dinámicas y interfaces amigables.',
    technologies: ['Laravel', 'MySQL', 'React', '.NET'],
    highlights: [
      'Plantillas dinámicas personalizables',
      'Interfaz responsiva',
      'Optimización de rendimiento 30%',
      'Pruebas de usabilidad con usuarios reales'
    ],
    category: 'web'
  }
] as const;

// ============================================================================
// CONTACT & SOCIAL LINKS
// ============================================================================

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/ivan-vega-aliaga',
    icon: 'Linkedin'
  },
  {
    id: 'email',
    platform: 'Email',
    url: 'mailto:kenyiva45@gmail.com',
    icon: 'Mail'
  },
  {
    id: 'phone',
    platform: 'Teléfono',
    url: 'tel:+51954201172',
    icon: 'Phone'
  }
] as const;

export const CONTACT_INFO: ContactInfo = {
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  location: PERSONAL_INFO.location,
  socialLinks: SOCIAL_LINKS
} as const;

// ============================================================================
// COMPLETE PORTFOLIO DATA
// ============================================================================

export const PORTFOLIO_DATA: PortfolioData = {
  personalInfo: PERSONAL_INFO,
  skills: SKILLS,
  experience: EXPERIENCE,
  education: EDUCATION,
  projects: PROJECTS,
  contactInfo: CONTACT_INFO
} as const; 