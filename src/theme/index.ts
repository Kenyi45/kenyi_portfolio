import raw from './palette.json';
import type { BrandPalette } from './types';

export type { BrandPalette };

/** Paleta global del portafolio (POO: objeto de valor inmutable vía `as const` en JSON import). */
export const brandPalette = raw as BrandPalette;
