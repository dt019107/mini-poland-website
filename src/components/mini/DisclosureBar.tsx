interface DisclosureBarProps {
  text: string;
  className?: string;
}

export function DisclosureBar({ text, className = '' }: DisclosureBarProps) {
  return (
    <aside
      aria-label="Fuel Consumption and Legal Specifications"
      className={`w-full bg-[#FFFFFF] px-6 sm:px-14 py-3 border-b border-[#E5E7EB] ${className}`}
    >
      <p className="max-w-[1400px] mx-auto mini-label-sm text-[#666666] leading-relaxed">
        {text}
      </p>
    </aside>
  );
}
