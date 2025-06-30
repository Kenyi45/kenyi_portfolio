// ============================================================================
// ICON COMPONENT - UI Foundation
// ============================================================================

import React from 'react';
import { clsx } from 'clsx';
import * as LucideIcons from 'lucide-react';
import type { IconProps } from '../../types';

// Principio Single Responsibility: Solo maneja la renderización de iconos
// Principio Dependency Inversion: Depende de abstracciones (props) no de implementaciones concretas

const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  className,
  color,
  ...props
}) => {
  // Type assertion para acceder dinámicamente a los iconos de Lucide
  const LucideIcon = (LucideIcons as any)[name];
  
  if (!LucideIcon) {
    // Fallback icon si no se encuentra el ícono especificado
    console.warn(`Icon "${name}" not found in Lucide React`);
    return <LucideIcons.AlertCircle size={size} className={clsx('text-red-500', className)} {...props} />;
  }

  return (
    <LucideIcon
      size={size}
      className={clsx('inline-block', className)}
      color={color}
      {...props}
    />
  );
};

export default Icon; 