import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps): React.JSX.Element {
  
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--fz-sm)',
    fontWeight: 500,
    border: '1px solid',
    borderRadius: 'var(--border-radius)',
    transition: 'var(--transition)',
    textDecoration: 'none',
    outline: 'none',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--green)',
          color: 'var(--navy)',
          borderColor: 'var(--green)',
        };
      case 'secondary':
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--green)',
          borderColor: 'var(--green)',
        };
      default:
        return {};
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return { padding: '7px 12px' };
      case 'md':
        return { padding: '11px 20px' };
      case 'lg':
        return { padding: '15px 28px' };
      default:
        return { padding: '10px 20px' };
    }
  };

  const buttonStyles: React.CSSProperties = {
    ...baseStyles,
    ...getVariantStyles(),
    ...getSizeStyles()
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--green-tint)';
      e.currentTarget.style.color = 'var(--green)';
    } else {
      e.currentTarget.style.backgroundColor = 'var(--green-tint)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--green)';
      e.currentTarget.style.color = 'var(--navy)';
    } else {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  // If href is provided, render as a link
  if (href) {
    return (
      <a 
        href={href}
        style={buttonStyles}
        className={className}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as a button
  return (
    <button
      type={type}
      style={buttonStyles}
      className={className}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
