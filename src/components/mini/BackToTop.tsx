import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white py-10 flex flex-col items-center justify-center border-t border-[#ececec]">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="group flex flex-col items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-black cursor-pointer"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:-translate-y-1 group-hover:bg-neutral-800 shadow-md">
          <ArrowUp className="h-5 w-5" />
        </div>
        <span className="text-[12px] font-bold tracking-widest text-black uppercase">
          UP
        </span>
      </button>
    </div>
  );
}
