import { useState } from 'react';
import { MiniButton } from './MiniButton';

export function CookieConsentBanner() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <aside
      aria-label="Cookie Consent"
      className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-8 sm:w-[540px] z-50 bg-[#FFFFFF] border border-[#E5E7EB] rounded-[8px] p-6 shadow-2xl transition-all"
    >
      <div className="space-y-3">
        <h3 className="mini-headline-sm font-bold text-[#000000]">
          Cookie Settings on MINI Poland
        </h3>
        <p className="mini-body-sm text-[#666666] leading-relaxed">
          We use cookies (including third-party cookies) to provide you with the best possible online experience and to tailor content to your interests. By clicking &ldquo;Accept All&rdquo;, you agree to the processing of your personal data.
        </p>

        {/* Buttons matching design system specs */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <MiniButton
            variant="primary"
            onClick={() => setAccepted(true)}
            className="flex-1"
          >
            Accept All
          </MiniButton>
          <MiniButton
            variant="secondary"
            onClick={() => setAccepted(true)}
            className="flex-1"
          >
            Configure
          </MiniButton>
        </div>

        <div className="pt-2 text-center">
          <MiniButton
            variant="tertiary"
            onClick={() => setAccepted(true)}
            className="mini-label-sm"
          >
            More information in our Privacy &amp; Cookie Policy
          </MiniButton>
        </div>
      </div>
    </aside>
  );
}
