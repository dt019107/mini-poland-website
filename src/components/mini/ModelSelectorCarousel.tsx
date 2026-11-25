import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cooper3door from '../../assets/mini/models/cooper-3door.png';
import cooper5door from '../../assets/mini/models/cooper-5door.png';
import convertible from '../../assets/mini/models/cooper-convertible.png';
import countryman from '../../assets/mini/models/countryman.png';
import { MiniButton } from './MiniButton';

interface ModelItem {
  id: string;
  name: string;
  image: string;
  startingPrice: string;
  fuelConsumption: string;
  badge?: string;
}

const models: ModelItem[] = [
  {
    id: '3door',
    name: 'MINI COOPER 3-DOOR',
    image: cooper3door,
    startingPrice: 'From PLN 129,900',
    fuelConsumption: 'WLTP: 5.5-6.0 l/100 km',
    badge: 'Iconic Design',
  },
  {
    id: '5door',
    name: 'MINI COOPER 5-DOOR',
    image: cooper5door,
    startingPrice: 'From PLN 135,400',
    fuelConsumption: 'WLTP: 5.6-6.2 l/100 km',
    badge: 'More Space',
  },
  {
    id: 'convertible',
    name: 'MINI COOPER CONVERTIBLE',
    image: convertible,
    startingPrice: 'From PLN 158,200',
    fuelConsumption: 'WLTP: 5.9-6.4 l/100 km',
    badge: 'Open Air',
  },
  {
    id: 'countryman',
    name: 'MINI COUNTRYMAN',
    image: countryman,
    startingPrice: 'From PLN 148,800',
    fuelConsumption: 'WLTP: 6.2-7.1 l/100 km',
    badge: 'All4 AWD',
  },
];

export function ModelSelectorCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? models.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="models"
      aria-label="MINI Model Lineup"
      className="relative w-full bg-[#FFFFFF] py-16 sm:py-24 border-b border-[#E5E7EB]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Model Cards Grid */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {[0, 1, 2].map((offset) => {
              const model = models[(startIndex + offset) % models.length];
              return (
                <div
                  key={model.id}
                  className="mini-card flex flex-col justify-between items-center text-center rounded-[8px] transition-all duration-300 hover:shadow-md hover:border-[#8E8E8E]"
                >
                  <div className="w-full">
                    {/* Chip Tag */}
                    <div className="flex justify-center pb-2">
                      <span className="mini-chip">{model.badge}</span>
                    </div>

                    {/* Car Silhouette Cutout */}
                    <div className="h-[200px] sm:h-[220px] w-full flex items-center justify-center p-2">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="max-h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Heading MD (28px) */}
                    <h3 className="mt-4 mini-headline-md uppercase text-[#000000]">
                      {model.name}
                    </h3>

                    {/* Price & Specs */}
                    <p className="mt-2 mini-body-md text-[#000000] font-normal">
                      {model.startingPrice}
                    </p>
                    <p className="mt-1 mini-body-sm text-[#666666]">
                      {model.fuelConsumption}
                    </p>
                  </div>

                  {/* Actions (56px Pill Button) */}
                  <div className="mt-6 w-full flex justify-center">
                    <MiniButton variant="secondary" className="w-full max-w-[240px]">
                      Configure
                    </MiniButton>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left / Right Carousel Controls */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous models"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000] text-[#FFFFFF] shadow-lg cursor-pointer transition-transform hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next models"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#000000] text-[#FFFFFF] shadow-lg cursor-pointer transition-transform hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {models.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setStartIndex(idx)}
              aria-label={`Go to model ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                startIndex === idx
                  ? 'w-8 bg-[#000000]'
                  : 'w-2.5 bg-[#8E8E8E] hover:bg-[#666666]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
