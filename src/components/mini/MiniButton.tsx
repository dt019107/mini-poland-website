import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type MiniButtonVariant =
  | 'primary' // height: 56px, bg: #000000, text: #FFFFFF, rounded-full
  | 'secondary' // height: 56px, bg: #FFFFFF, text: #000000, border: #E5E7EB, rounded-full
  | 'tertiary' // bg: transparent, text: #666666, rounded: 0
  | 'hero-primary' // height: 56px, bg: #FFFFFF, text: #000000 (contrast against dark hero image)
  | 'hero-secondary'; // height: 56px, bg: transparent, text: #FFFFFF, border: 2px white

interface MiniButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: MiniButtonVariant;
  children: ReactNode;
  icon?: ReactNode;
}

export function MiniButton({
  variant = 'primary',
  children,
  icon,
  className = '',
  type = 'button',
  ...props
}: MiniButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-normal mini-button-text transition-all duration-200 cursor-pointer select-none text-center focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2';

  const variantMap: Record<MiniButtonVariant, string> = {
    // Exact spec: height 56px, padding 8px 16px (we add comfortable horizontal padding for desktop readability), bg primary, text neutral, rounded full
    primary:
      'h-[56px] min-h-[56px] px-8 bg-[#000000] text-[#FFFFFF] rounded-full hover:bg-neutral-800 active:bg-neutral-900 border border-transparent shadow-sm',
    secondary:
      'h-[56px] min-h-[56px] px-8 bg-[#FFFFFF] text-[#000000] border border-[#E5E7EB] rounded-full hover:bg-[#F7F7F7] active:bg-[#ECECEC] shadow-sm',
    tertiary:
      'bg-transparent text-[#666666] hover:text-[#000000] rounded-none p-0 border-none underline font-medium',
    'hero-primary':
      'h-[56px] min-h-[56px] px-8 bg-[#FFFFFF] text-[#000000] rounded-full hover:bg-neutral-100 active:bg-neutral-200 shadow-md',
    'hero-secondary':
      'h-[56px] min-h-[56px] px-8 bg-transparent text-[#FFFFFF] border-2 border-[#FFFFFF] rounded-full hover:bg-white/10 active:bg-white/20 backdrop-blur-xs',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantMap[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2 shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
