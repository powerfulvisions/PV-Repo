import { ArchitectProfile } from "../data/architects";

export function ArchitectProfileCard({ profile }: { profile: ArchitectProfile }) {
  return (
    <section
      aria-label={`Featured Black Architect of AI: ${profile.name}`}
      className="rounded-2xl border border-navy/10 bg-white shadow-sm p-6 sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-gold-dark mb-4">
        Black Architects of AI · Featured Profile
      </p>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
        <div
          aria-hidden="true"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy text-gold font-bold text-lg"
        >
          {profile.initials}
        </div>
        <div>
          <h3 className="text-xl font-bold text-navy">{profile.name}</h3>
          <p className="text-sm font-medium text-navy/70">{profile.role}</p>
          <p className="mt-1 text-sm font-semibold text-gold-dark">{profile.legacy}</p>
          <p className="mt-4 text-navy/90 leading-relaxed">{profile.bio}</p>
          <p className="mt-4 text-navy/90 leading-relaxed italic border-l-4 border-gold pl-4">
            {profile.relevance}
          </p>
        </div>
      </div>
    </section>
  );
}
