/**
 * 1Klangmassage Farbpalette
 * Aus dem Farbwähler übernommen (HSB/RGB/HEX)
 *
 * 1. Salbeigrün: #8e9d7b | HSB 86° 22% 62% | RGB 142, 157, 123
 *    → Sanft, ruhig, Wellness-Stimmung
 *
 * 2. Orange: #f7a600 | HSB 40° 100% 97% | RGB 247, 166, 0
 *    → Logo-Farbe, markanter Akzent, CTAs
 *
 * 3. Braun: #86705d | HSB 28° 31% 53% | RGB 134, 112, 93
 *    → Wärme, Schrift, erdige Töne
 */

export const colors = {
  /** Salbeigrün – Hauptakzent für Wellness-Stimmung */
  sage: '#8e9d7b',

  /** Orange – Logo und Call-to-Action */
  orange: '#f7a600',

  /** Braun – Text und erdige Akzente */
  brown: '#86705d',

  /** Beige – Hintergrund (unverändert) */
  beige: '#F5F5DC',
} as const
