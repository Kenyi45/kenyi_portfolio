// ============================================================================
// NAVIGATION CONSTANTS
// ============================================================================

import type { NavigationItem } from '../types';

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    id: 'home',
    label: 'Inicio',
    href: '#home',
    icon: 'Home'
  },
  {
    id: 'about',
    label: 'Acerca de',
    href: '#about',
    icon: 'User'
  },
  {
    id: 'skills',
    label: 'Habilidades',
    href: '#skills',
    icon: 'Code2'
  },
  {
    id: 'experience',
    label: 'Experiencia',
    href: '#experience',
    icon: 'Briefcase'
  },
  {
    id: 'projects',
    label: 'Proyectos',
    href: '#projects',
    icon: 'FolderOpen'
  },
  {
    id: 'education',
    label: 'Educación',
    href: '#education',
    icon: 'GraduationCap'
  },
  {
    id: 'contact',
    label: 'Contacto',
    href: '#contact',
    icon: 'MessageCircle'
  }
] as const;

/** @deprecated Prefer HEADER_SCROLL_OFFSET_PX desde navigation/constants vía useNavigation */
export { HEADER_SCROLL_OFFSET_PX as SCROLL_OFFSET } from '../navigation/constants';

export const SCROLL_BEHAVIOR: ScrollBehavior = 'smooth';