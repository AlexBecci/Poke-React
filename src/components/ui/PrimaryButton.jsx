import React, { memo } from 'react';

/**
 * PrimaryButton
 *
 * Atomic button component following the Atmospheric Glass spec.
 * Variants are driven by CSS classes in glass.css — no inline variant logic.
 *
 * Props:
 *   variant  – 'primary' (white fill) | 'ghost' (transparent glass)
 *   type     – HTML button type (default: 'button')
 *   disabled – Disables interaction + applies 0.5 opacity
 *   onClick  – Click handler
 *   style    – Inline style overrides
 *   className– Additional class names
 *
 * @example
 *   <PrimaryButton onClick={handleSearch}>Buscar</PrimaryButton>
 *   <PrimaryButton variant="ghost" onClick={toggleFilter}>Filtrar</PrimaryButton>
 */
function PrimaryButton({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  style,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`glass-btn glass-btn--${variant} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

export default memo(PrimaryButton);
