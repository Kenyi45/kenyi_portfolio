/**
 * Contrato de la paleta de marca (única fuente semántica para documentación y tipado).
 * Los valores concretos viven en `palette.json` y se sincronizan con `tailwind.config.js`.
 */
export interface BrandPalette {
  readonly inkBase: string;
  readonly inkRaised: string;
  readonly steel: string;
  readonly paper: string;
  readonly paperMuted: string;
  readonly sand: string;
  readonly clay: string;
}
