import { Car, Compass, MessageCircle, Sliders } from 'lucide-react';

interface QuickActionItem {
  icon: typeof Car;
  label: string;
  href: string;
}

const actionItems: QuickActionItem[] = [
  { icon: Car, label: 'MINI ready for pickup', href: '#pickup' },
  { icon: Sliders, label: 'Configure MINI', href: '#configure' },
  { icon: MessageCircle, label: 'Contact us', href: '#contact' },
  { icon: Compass, label: 'Book a Test Drive', href: '#test-drive' },
];

export function QuickActionsBar() {
  return (
    <section
      aria-label="Quick Actions"
      className="w-full bg-[#FFFFFF] py-14 sm:py-20 border-b border-[#E5E7EB]"
    >
      <div className="max-w-[1100px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {actionItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="group flex flex-col items-center text-center focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4 rounded-[8px] p-3 transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Circular Action Badge */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#000000] text-[#FFFFFF] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-neutral-800">
                <Icon className="h-9 w-9 stroke-[1.75]" />
              </div>

              {/* Label: MINISansReg 16px (label-lg) */}
              <span className="mt-4 mini-label-lg font-normal text-[#000000] transition-colors group-hover:text-[#666666]">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
