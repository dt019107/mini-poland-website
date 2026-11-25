import jcwImg from '../../assets/mini/learn/jcw.png';
import companiesImg from '../../assets/mini/learn/companies.png';
import youngUsedImg from '../../assets/mini/learn/young-used.png';
import digitalImg from '../../assets/mini/learn/digital.png';

interface FeatureCard {
  title: string;
  subtitle: string;
  disclaimer?: string;
  image: string;
  href: string;
}

const features: FeatureCard[] = [
  {
    title: 'MINI JOHN COOPER WORKS.',
    subtitle: 'Feel the spirit of sports emotions!',
    disclaimer:
      'MINI Cooper JCW 3-door: fuel consumption (WLTP combined): 6.5-6.8 l/100 km; CO2 emissions (WLTP combined): 147-154 g/km',
    image: jcwImg,
    href: '#jcw',
  },
  {
    title: 'MINI FOR COMPANIES.',
    subtitle:
      'Apply for the MINI corporate customer program and raise the profile of your company with an excellent fleet.',
    image: companiesImg,
    href: '#companies',
  },
  {
    title: 'MINI YOUNG USED.',
    subtitle:
      'Check out our wide selection and enjoy a MINI with low mileage and a quality guarantee. Find your dream car, available immediately, and buy online or from a selected Partner.',
    image: youngUsedImg,
    href: '#young-used',
  },
  {
    title: 'MINI DIGITAL EXPERIENCE.',
    subtitle:
      'Experience the futuristic round OLED central display, custom ambient light moods, and intuitive connected cockpit intelligence.',
    image: digitalImg,
    href: '#digital',
  },
];

export function LearnMoreGrid() {
  return (
    <section aria-labelledby="learn-more-heading" className="w-full bg-[#FFFFFF] py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Heading: headline-lg (36px, line-height 48px) */}
        <h2
          id="learn-more-heading"
          className="mini-headline-lg uppercase text-[#000000] text-center mb-14 sm:mb-20"
        >
          LEARN MORE.
        </h2>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="mini-card group flex flex-col overflow-hidden rounded-[8px] border border-[#E5E7EB] hover:border-[#8E8E8E] transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-[280px] sm:h-[360px] w-full overflow-hidden bg-[#F7F7F7]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title & Description */}
              <div className="pt-6 pb-2">
                <h3 className="mini-headline-md uppercase text-[#000000] group-hover:text-neutral-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 mini-body-md text-[#000000] leading-relaxed">
                  {item.subtitle}
                </p>
                {item.disclaimer && (
                  <p className="mt-3.5 mini-label-sm text-[#666666]">
                    {item.disclaimer}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
