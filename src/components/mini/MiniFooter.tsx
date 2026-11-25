import miniLogo from '../../assets/mini/logo.svg';

const modelsLinks = [
  'Electric MINI Cooper',
  'The all-electric MINI Countryman',
  '3-door MINI Cooper',
  '5-door MINI Cooper',
  'MINI Cooper Convertible',
  'MINI Countryman',
  'John Cooper Works',
];

const quickLinks = [
  'Search for your MINI',
  'MINI Used Cars',
  'MINI Leasing & Financing',
  'MINI Paul Smith Edition',
  'MINI Countryman Untamed Edition',
];

const findOutMore = [
  'Schedule a Service Appointment',
  'MINI Accessories',
  'MINI Connected Services',
  'MINI Connected Book',
  'MINI Digital Experience',
  'FAQ & Assistance',
  'Contact MINI Poland',
];

const legalNoticeLinks = [
  'CONTACT',
  'CAREER / JOBS',
  'LEGAL NOTICE',
  'COOKIES',
  'BMW GROUP POLAND',
  'FAQS',
  'PRIVACY POLICY',
  'ENVIRONMENT / CO2',
  'EU/GDPR',
  'NEW PRICE LIST',
  'DIGITAL SERVICES ACT (DSA)',
  'CLARIFIER',
  'ACCESSIBILITY STATEMENT',
  'UODO',
  'AIR QUALITY REGULATION',
];

export function MiniFooter() {
  return (
    <footer role="contentinfo" className="w-full flex flex-col">
      {/* Mega Footer: Primary (#000000) Theme */}
      <div className="w-full bg-[#000000] text-[#FFFFFF] py-16 sm:py-24 px-6 sm:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 text-[14px]">
          {/* Column 1: Models */}
          <div>
            <h3 className="mini-label-sm font-semibold tracking-widest uppercase text-neutral-400 pb-3 border-b border-neutral-800">
              MODELS
            </h3>
            <ul className="mt-4 space-y-2.5">
              {modelsLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#models"
                    className="mini-body-sm text-[#8E8E8E] hover:text-[#FFFFFF] transition-colors leading-relaxed"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mini-label-sm font-semibold tracking-widest uppercase text-neutral-400 pb-3 border-b border-neutral-800">
              QUICK LINKS
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#quick"
                    className="mini-body-sm text-[#8E8E8E] hover:text-[#FFFFFF] transition-colors leading-relaxed"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Find Out More */}
          <div>
            <h3 className="mini-label-sm font-semibold tracking-widest uppercase text-neutral-400 pb-3 border-b border-neutral-800">
              FIND OUT MORE
            </h3>
            <ul className="mt-4 space-y-2.5">
              {findOutMore.map((item) => (
                <li key={item}>
                  <a
                    href="#more"
                    className="mini-body-sm text-[#8E8E8E] hover:text-[#FFFFFF] transition-colors leading-relaxed"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & WLTP Specifications */}
          <div>
            <h3 className="mini-label-sm font-semibold tracking-widest uppercase text-neutral-400 pb-3 border-b border-neutral-800">
              LEGAL NOTICE / WLTP
            </h3>
            <p className="mt-4 mini-body-sm text-[#8E8E8E] leading-relaxed">
              Values for vehicles marked with an asterisk (*) are preliminary. Fuel consumption, CO2 emissions, electricity consumption and range are determined according to the WLTP test cycle.
            </p>
            <p className="mt-3.5 mini-label-sm text-[#666666] leading-relaxed">
              More information on the official fuel consumption and official specific CO2 emissions of new passenger cars can be found in the official guide available free of charge at all dealerships.
            </p>
          </div>
        </div>
      </div>

      {/* Legal Notice White Bar */}
      <div className="w-full bg-[#FFFFFF] text-[#000000] py-12 px-6 sm:px-14 border-t border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto space-y-6">
          <div className="flex items-center gap-4">
            <img src={miniLogo} alt="MINI Logo" className="h-8 w-auto object-contain" />
            <h4 className="mini-headline-sm uppercase text-[#000000] font-bold">
              LEGAL NOTICE.
            </h4>
          </div>

          {/* Horizontal Directory Links */}
          <nav aria-label="Legal Directory" className="flex flex-wrap gap-x-6 gap-y-2.5 mini-label-sm font-medium text-[#666666]">
            {legalNoticeLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="hover:text-[#000000] hover:underline"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="mini-label-sm text-[#8E8E8E] pt-3 border-t border-[#E5E7EB]">
            &copy; {new Date().getFullYear()} BMW Vertriebs GmbH, Branch in Poland. All rights reserved. MINI is a registered trademark of BMW AG.
          </p>
        </div>
      </div>
    </footer>
  );
}
