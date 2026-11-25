import { useRef, useState, useEffect } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { MiniButton } from './MiniButton';
import { DisclosureBar } from './DisclosureBar';

interface CampaignHeroProps {
  id?: string;
  imageSrc?: string;
  videoSrc?: string;
  headline: string;
  italicSubtitle?: string;
  subText?: string;
  primaryCtaText: string;
  secondaryCtaText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  wltpDisclosureText: string;
}

export function CampaignHero({
  id,
  imageSrc,
  videoSrc,
  headline,
  italicSubtitle,
  subText,
  primaryCtaText,
  secondaryCtaText,
  onPrimaryClick,
  onSecondaryClick,
  wltpDisclosureText,
}: CampaignHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays automatically on load
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Fallback if browser requires user engagement
          setIsPlaying(false);
        });
    }
  }, [videoSrc]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id={id} className="relative w-full bg-[#FFFFFF] flex flex-col">
      {/* Hero Visual Area: 580px - 620px responsive height for cinematic 2560x1080 resolution */}
      <div className="relative h-[560px] sm:h-[620px] w-full overflow-hidden bg-[#000000]">
        {/* Background Video */}
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              poster={imageSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => setVideoLoaded(true)}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-100' : 'opacity-90'
              }`}
            />
            {/* Fallback image placeholder until video renders */}
            {imageSrc && !videoLoaded && (
              <img
                src={imageSrc}
                alt={headline}
                className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
              />
            )}
          </>
        ) : (
          imageSrc && (
            <img
              src={imageSrc}
              alt={headline}
              className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
            />
          )
        )}

        {/* Cinematic Gradient Overlay: dark left zone for high typographic contrast, preserving full video clarity in the center and right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent sm:w-[680px] pointer-events-none" />

        {/* Hero Content Overlay with Spacing Scale: lg (56px) */}
        <div className="relative z-10 flex h-full max-w-[1440px] flex-col justify-center px-6 sm:px-14 py-14 text-[#FFFFFF]">
          <div className="max-w-[560px] space-y-4">
            {/* Headline Display (MINIBold 48px/36px) */}
            <h1 className="mini-headline-lg sm:mini-headline-display uppercase text-[#FFFFFF] tracking-normal drop-shadow-md">
              {headline}
            </h1>

            {/* Editorial Italic Subtitle: body-lg (18px, 300 weight) */}
            {italicSubtitle && (
              <p className="font-mini-serif text-[20px] sm:text-[23px] italic leading-[30px] text-neutral-200 drop-shadow">
                {italicSubtitle}
              </p>
            )}

            {/* Subtext: body-md (16px / 18px) */}
            {subText && (
              <p className="mini-body-lg text-white font-normal">
                {subText}
              </p>
            )}

            {/* 56px Pill Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MiniButton
                variant="hero-primary"
                onClick={onPrimaryClick}
              >
                {primaryCtaText}
              </MiniButton>
              {secondaryCtaText && (
                <MiniButton
                  variant="hero-secondary"
                  onClick={onSecondaryClick}
                >
                  {secondaryCtaText}
                </MiniButton>
              )}
            </div>
          </div>
        </div>

        {/* Video Controls (Accessibility & User agency) */}
        {videoSrc && (
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/85 backdrop-blur-sm transition-all cursor-pointer shadow-md"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/85 backdrop-blur-sm transition-all cursor-pointer shadow-md"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Fuel Consumption / WLTP Legal Disclaimer */}
      <DisclosureBar text={wltpDisclosureText} />
    </section>
  );
}
