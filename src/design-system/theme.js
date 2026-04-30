/**
 * Tranquil Dex — Design Tokens
 * Deep dark theme. No gradient canvas.
 */

export const theme = {
  colors: {
    background:               '#10141D',
    bgRaised:                 '#161B27',
    bgCard:                   '#1C2133',
    bgHover:                  '#222840',
    border:                   'rgba(255, 255, 255, 0.08)',
    onSurface:                '#C8D0E8',
    onSurfaceVariant:         '#7A849C',
    primary:                  '#E8EDF8',
    onPrimary:                '#10141D',
    primaryFixedDim:          '#B0BAD0',
    accent:                   '#5B8BF5',
    accentDim:                'rgba(91, 139, 245, 0.15)',
    secondary:                '#7FAADC',
    // Glass surfaces
    glassSurface:             'rgba(255, 255, 255, 0.04)',
    glassSurfaceHigh:         'rgba(255, 255, 255, 0.08)',
    glassBorder:              'rgba(255, 255, 255, 0.09)',
  },

  typography: {
    displayLg:  { fontFamily: 'Inter, sans-serif', fontSize: '84px',  fontWeight: '700', lineHeight: '90px',  letterSpacing: '-0.04em' },
    headlineLg: { fontFamily: 'Inter, sans-serif', fontSize: '32px',  fontWeight: '600', lineHeight: '40px',  letterSpacing: '-0.02em' },
    headlineMd: { fontFamily: 'Inter, sans-serif', fontSize: '22px',  fontWeight: '600', lineHeight: '30px' },
    bodyLg:     { fontFamily: 'Inter, sans-serif', fontSize: '16px',  fontWeight: '400', lineHeight: '26px' },
    bodyMd:     { fontFamily: 'Inter, sans-serif', fontSize: '14px',  fontWeight: '400', lineHeight: '22px' },
    labelSm:    { fontFamily: 'Inter, sans-serif', fontSize: '11px',  fontWeight: '600', lineHeight: '16px', letterSpacing: '0.07em' },
  },

  spacing: {
    unit: 8,
    sp1: '8px', sp2: '16px', sp3: '24px', sp4: '32px', sp5: '40px',
    containerPadding: '24px',
    cardGap:          '16px',
    sectionMargin:    '40px',
    glassPadding:     '20px',
  },

  rounded: {
    sm: '0.25rem', DEFAULT: '0.5rem', md: '0.75rem',
    lg: '1rem', xl: '1.5rem', full: '9999px',
  },

  glass: {
    standard: {
      background:     '#1C2133',
      backdropFilter: 'blur(12px)',
      border:         '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow:      '0 4px 24px 0 rgba(0, 0, 0, 0.35)',
    },
    elevated: {
      background:     '#222840',
      backdropFilter: 'blur(24px)',
      border:         '1px solid rgba(255, 255, 255, 0.10)',
      boxShadow:      '0 8px 40px 0 rgba(0, 0, 0, 0.50)',
    },
  },
};
