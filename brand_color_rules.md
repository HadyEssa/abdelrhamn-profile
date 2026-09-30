# Brand Color Integration Rule

**Scope**: Applies to all future sections of the portfolio (icons, logos, brand elements).

## Rules
1. **Brand/Service Icons**
   - Use the official brand colors for recognizable logos (LinkedIn, GitHub, Qualys, RSA Archer, PCI DSS, certification logos, etc.).
   - Colors should be used **as accents** (icon fill, small label, hover state, tiny indicator), not to recolor entire cards or sections.
2. **UI Icons**
   - Generic UI icons (arrow, menu, external link, calendar, etc.) must use `currentColor` to inherit surrounding text color.
3. **Visual Consistency**
   - The overall portfolio remains dark, premium, editorial, and restrained.
   - Brand colors are integrated subtly, preserving the design system.
4. **No Invented Colors**
   - If an official brand color is unknown, use a neutral treatment rather than creating a new color.

**Implementation Note**: Future components should reference CSS variables for brand colors (e.g., `--brand-linkedin`, `--brand-github`, `--brand-qualys`). These variables can be defined in the design token system and applied to SVG/IMG icons via `fill` or `color` as appropriate.

*Do not modify existing sections; this rule serves as guidance for upcoming work.*
