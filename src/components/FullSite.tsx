import { FEATURED_ARCHITECT } from "../data/architects";
import { ArchitectProfileCard } from "./ArchitectProfileCard";
import { ExploreBanner } from "./ExploreBanner";

interface FullSiteProps {
  onPersonalize: () => void;
}

/**
 * What "I just want to explore" visitors see (spec point 7): the full
 * site, including the Black Architects of AI research section, with a
 * soft persistent banner inviting them back to the greeter at any time.
 */
export function FullSite({ onPersonalize }: FullSiteProps) {
  return (
    <div className="min-h-screen bg-white">
      <ExploreBanner onPersonalize={onPersonalize} />

      <header className="bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Powerful Visions AI
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white">
            AI in the Spirit of Ubuntu
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            I am because we are. Explore how faith communities, nonprofits, and emerging
            leaders are putting AI to work without losing the human at the center.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 space-y-14">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-dark mb-6 text-center">
            Black Architects of AI &middot; Research
          </h2>
          <div className="space-y-6">
            {Object.values(FEATURED_ARCHITECT).map((profile) => (
              <ArchitectProfileCard key={profile.name} profile={profile} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
