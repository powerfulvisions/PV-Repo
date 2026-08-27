interface ExploreBannerProps {
  onPersonalize: () => void;
}

/**
 * Soft, persistent banner shown to visitors who chose to explore instead
 * of identifying themselves (spec point 7). Clicking through clears the
 * stored visitorType so App.tsx re-shows the VisitorGreeter.
 */
export function ExploreBanner({ onPersonalize }: ExploreBannerProps) {
  return (
    <div className="sticky top-0 z-40 bg-navy text-white">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 py-3 text-center sm:text-left">
        <p className="text-sm">
          Tell us who you are for a personalized experience.
        </p>
        <button
          type="button"
          onClick={onPersonalize}
          className="shrink-0 rounded-full bg-gold px-4 py-1.5 text-xs sm:text-sm font-semibold text-navy-dark transition-colors hover:bg-gold-light focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Personalize my experience
        </button>
      </div>
    </div>
  );
}
