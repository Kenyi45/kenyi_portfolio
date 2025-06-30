// ============================================================================
// PORTFOLIO TYPES & INTERFACES
// ============================================================================

export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly location: string;
  readonly phone: string;
  readonly email: string;
  readonly linkedin: string;
  readonly summary: string;
}

export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly category: SkillCategory;
  readonly level: SkillLevel;
  readonly icon?: string;
}

export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'cloud' 
  | 'tools' 
  | 'frameworks'
  | 'languages';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly position: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly technologies: readonly string[];
  readonly achievements: readonly string[];
  readonly description: string;
}

export interface Education {
  readonly id: string;
  readonly institution: string;
  readonly degree: string;
  readonly location: string;
  readonly graduationYear: number;
  readonly highlights?: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly highlights: readonly string[];
  readonly url?: string;
  readonly githubUrl?: string;
  readonly imageUrl?: string;
  readonly category: ProjectCategory;
}

export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'fullstack' | 'automation';

// ============================================================================
// COMPONENT PROPS INTERFACES
// ============================================================================

export interface BaseComponentProps {
  readonly className?: string;
  readonly children?: React.ReactNode;
  readonly style?: React.CSSProperties;
}

export interface SectionProps extends BaseComponentProps {
  readonly id?: string;
  readonly title?: string;
  readonly subtitle?: string;
}

export interface CardProps extends BaseComponentProps {
  readonly variant?: 'default' | 'elevated' | 'bordered';
  readonly padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface ButtonProps extends BaseComponentProps {
  readonly variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  readonly size?: 'sm' | 'md' | 'lg';
  readonly disabled?: boolean;
  readonly loading?: boolean;
  readonly onClick?: () => void;
  readonly href?: string;
  readonly external?: boolean;
  readonly type?: 'button' | 'submit' | 'reset';
}

export interface IconProps {
  readonly name: string;
  readonly size?: number | string;
  readonly className?: string;
  readonly color?: string;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type Theme = 'light' | 'dark';

export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon?: string;
}

export interface SocialLink {
  readonly id: string;
  readonly platform: string;
  readonly url: string;
  readonly icon: string;
}

export interface ContactInfo {
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly socialLinks: readonly SocialLink[];
}

// ============================================================================
// API TYPES (Para futuras integraciones)
// ============================================================================

export interface ApiResponse<T> {
  readonly data: T;
  readonly message?: string;
  readonly status: 'success' | 'error';
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

// ============================================================================
// PORTFOLIO DATA STRUCTURE
// ============================================================================

export interface PortfolioData {
  readonly personalInfo: PersonalInfo;
  readonly skills: readonly Skill[];
  readonly experience: readonly Experience[];
  readonly education: readonly Education[];
  readonly projects: readonly Project[];
  readonly contactInfo: ContactInfo;
} 