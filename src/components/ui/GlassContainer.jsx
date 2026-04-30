import React, { memo } from 'react';
import { theme } from '../../design-system/theme';

// ── Elevation style map ────────────────────────────────────────────────────
const elevationMap = {
  standard: {
    background:              theme.glass.standard.background,
    backdropFilter:          theme.glass.standard.backdropFilter,
    WebkitBackdropFilter:    theme.glass.standard.backdropFilter,
    border:                  theme.glass.standard.border,
    boxShadow:               theme.glass.standard.boxShadow,
    borderRadius:            theme.rounded.lg,
    padding:                 theme.spacing.glassPadding,
    color:                   theme.colors.primary,
  },
  elevated: {
    background:              theme.glass.elevated.background,
    backdropFilter:          theme.glass.elevated.backdropFilter,
    WebkitBackdropFilter:    theme.glass.elevated.backdropFilter,
    border:                  theme.glass.elevated.border,
    boxShadow:               theme.glass.elevated.boxShadow,
    borderRadius:            theme.rounded.xl,
    padding:                 theme.spacing.glassPadding,
    color:                   theme.colors.primary,
  },
};

// ── Sub-components (Compound Components pattern) ───────────────────────────

/**
 * GlassContainer.Header
 * Renders a bottom-border divider section. Hosts titles and meta info.
 */
const Header = memo(function GlassContainerHeader({ children, style }) {
  return (
    <div
      style={{
        paddingBottom: theme.spacing.sp2,
        borderBottom: '1px solid rgba(255, 255, 255, 0.10)',
        marginBottom: theme.spacing.sp2,
        ...style,
      }}
    >
      {children}
    </div>
  );
});
Header.displayName = 'GlassContainer.Header';

/**
 * GlassContainer.Body
 * Main content area — flex: 1 to fill available space.
 */
const Body = memo(function GlassContainerBody({ children, style }) {
  return (
    <div style={{ flex: 1, ...style }}>
      {children}
    </div>
  );
});
Body.displayName = 'GlassContainer.Body';

/**
 * GlassContainer.Footer
 * Renders a top-border divider section. Hosts actions and secondary info.
 */
const Footer = memo(function GlassContainerFooter({ children, style }) {
  return (
    <div
      style={{
        paddingTop: theme.spacing.sp2,
        borderTop: '1px solid rgba(255, 255, 255, 0.10)',
        marginTop: theme.spacing.sp2,
        ...style,
      }}
    >
      {children}
    </div>
  );
});
Footer.displayName = 'GlassContainer.Footer';

// ── Root component ─────────────────────────────────────────────────────────

/**
 * GlassContainer
 *
 * A reusable frosted-glass surface following the Atmospheric Glass spec.
 *
 * Props:
 *   elevation  – 'standard' (blur 20px) | 'elevated' (blur 40px)
 *   as         – HTML tag or component to render as (default: 'div')
 *   className  – Additional CSS class names
 *   style      – Inline style overrides (merged, not replaced)
 *
 * Compound sub-components:
 *   <GlassContainer.Header />
 *   <GlassContainer.Body />
 *   <GlassContainer.Footer />
 *
 * @example
 *   <GlassContainer elevation="elevated">
 *     <GlassContainer.Header><h2>Title</h2></GlassContainer.Header>
 *     <GlassContainer.Body>Content</GlassContainer.Body>
 *     <GlassContainer.Footer><button>Action</button></GlassContainer.Footer>
 *   </GlassContainer>
 */
function GlassContainer({
  children,
  elevation = 'standard',
  style,
  className = '',
  as: Tag = 'div',
}) {
  return (
    <Tag
      className={`glass-container ${className}`}
      style={{ ...elevationMap[elevation], ...style }}
    >
      {children}
    </Tag>
  );
}

GlassContainer.Header = Header;
GlassContainer.Body   = Body;
GlassContainer.Footer = Footer;

// Wrap with memo AFTER attaching sub-components so they survive on the export
const MemoGlassContainer = memo(GlassContainer);
MemoGlassContainer.Header = Header;
MemoGlassContainer.Body   = Body;
MemoGlassContainer.Footer = Footer;

export default MemoGlassContainer;
