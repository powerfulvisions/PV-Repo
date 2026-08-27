import { FEATURED_ARCHITECT } from "../data/architects";
import { PATHWAY_CONTENT } from "../data/pathways";
import { VisitorType } from "../types/visitor";
import { ArchitectProfileCard } from "./ArchitectProfileCard";

interface PathwayViewProps {
  visitorType: VisitorType;
  onChangePathway: () => void;
}

/**
 * Shared layout for the three routed pathways (spec points 4 & 5):
 * an Ubuntu-philosophy welcome, one featured Black Architects of AI
 * profile relevant to the visitor, then pathway-specific recommendations.
 */
export function PathwayView({ visitorType, onChangePathway }: PathwayViewProps) {
  const content = PATHWAY_CONTENT[visitorType];
  const architect = FEATURED_ARCHITECT[visitorType];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            {content.label}
          </p>
          <h1 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white">
            {content.heading}
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 space-y-10">
        <section className="rounded-2xl bg-navy/5 border border-navy/10 p-6 sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-dark mb-3">
            An Ubuntu Welcome
          </h2>
          <p className="text-lg text-navy leading-relaxed">{content.ubuntuWelcome}</p>
        </section>

        <ArchitectProfileCard profile={architect} />

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-dark mb-4">
            Recommended For You
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {content.recommendations.map((rec) => (
              <div
                key={rec.title}
                className="rounded-xl border border-navy/10 bg-white p-5 shadow-sm flex flex-col"
              >
                <h3 className="font-bold text-navy">{rec.title}</h3>
                <p className="mt-2 text-sm text-navy/80 leading-relaxed">{rec.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-4">
          <button
            type="button"
            onClick={onChangePathway}
            className="text-sm font-medium text-navy/60 underline decoration-gold decoration-2 underline-offset-4 hover:text-navy"
          >
            Not you? Change your answer
          </button>
        </div>
      </main>
    </div>
  );
}
