/**
 * Scroll spy y scroll programático por sección.
 * Responsabilidad única: geometría del documento vs. cabecera fija (SRP).
 */
export class SectionScrollSpy {
  constructor(
    private readonly orderedSectionIds: readonly string[],
    private readonly headerOffsetPx: number
  ) {}

  /** Posición del borde superior del elemento en el documento (robusta ante offsetParent). */
  elementDocumentTop(el: HTMLElement): number {
    return el.getBoundingClientRect().top + window.scrollY;
  }

  /**
   * Determina qué sección está "activa": la última cuyo inicio ya pasó la línea
   * de activación (viewport + offset debajo del header).
   */
  resolveActiveSectionId(scrollY: number = window.scrollY): string {
    const fallbacks = this.orderedSectionIds[0] ?? 'home';
    const lastId = this.orderedSectionIds[this.orderedSectionIds.length - 1] ?? fallbacks;
    const activationLine = scrollY + this.headerOffsetPx;

    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    if (scrollY >= maxScroll - 3) {
      return lastId;
    }

    let active = fallbacks;
    for (const id of this.orderedSectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = this.elementDocumentTop(el);
      if (top <= activationLine + 0.5) {
        active = id;
      }
    }

    return active;
  }

  scrollToSectionId(sectionId: string, behavior: ScrollBehavior = 'smooth'): void {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const top = this.elementDocumentTop(el);
    const y = Math.max(0, top - this.headerOffsetPx);
    window.scrollTo({ top: y, behavior });
  }
}
