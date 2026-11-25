import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import speedcarImg from '../../assets/mini/news/speedcar.png';
import fansImg from '../../assets/mini/news/fans.png';
import jordaniaImg from '../../assets/mini/news/jordania.png';
import ambassadorImg from '../../assets/mini/news/ambassador.png';

interface ArticleItem {
  id: string;
  image: string;
  title: string;
  category?: string;
  href: string;
}

const articles: ArticleItem[] = [
  {
    id: 'speedcar',
    image: speedcarImg,
    title: 'MINI sponsors the 2021 Polish Speedcar Championship',
    category: 'Motorsport',
    href: '#news-speedcar',
  },
  {
    id: 'fans',
    image: fansImg,
    title: 'MINI story – The largest European MINI fan meeting is behind us!',
    category: 'Community',
    href: '#news-fans',
  },
  {
    id: 'jordania',
    image: jordaniaImg,
    title: 'MINI in Jordania, Thank you for being with us!',
    category: 'Adventure',
    href: '#news-jordania',
  },
  {
    id: 'ambassador',
    image: ambassadorImg,
    title: 'Dawid Godziek, MINI ambassador.',
    category: 'Ambassadors',
    href: '#news-ambassador',
  },
];

export function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section aria-labelledby="news-heading" className="w-full bg-[#F7F7F7] py-16 sm:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <h2
          id="news-heading"
          className="mini-headline-lg uppercase text-[#000000] text-center mb-14 sm:mb-20"
        >
          NEWS FROM MINI
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Controls */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous news"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000] text-[#FFFFFF] shadow-lg cursor-pointer transition-transform hover:scale-105"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next news"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000] text-[#FFFFFF] shadow-lg cursor-pointer transition-transform hover:scale-105"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards following mini-card spec */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[0, 1, 2, 3].map((offset) => {
              const item = articles[(currentIndex + offset) % articles.length];
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="mini-card group flex flex-col justify-between overflow-hidden rounded-[8px] hover:border-[#8E8E8E] transition-all duration-300"
                >
                  <div>
                    <div className="relative h-[200px] w-full overflow-hidden rounded-[4px] bg-neutral-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {item.category && (
                      <span className="mt-3 block mini-label-sm text-[#8E8E8E] uppercase tracking-wider">
                        {item.category}
                      </span>
                    )}
                    <h3 className="mt-2 text-[16px] font-bold leading-snug text-[#000000] group-hover:text-neutral-700">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center mini-label-sm font-semibold text-[#000000] group-hover:underline">
                    Read more &rarr;
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
