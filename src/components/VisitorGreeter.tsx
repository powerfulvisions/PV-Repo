import { VisitorMode, VisitorType } from "../types/visitor";

interface Choice {
  type: VisitorType;
  label: string;
  description: string;
}

const CHOICES: Choice[] = [
  {
    type: "faith",
    label: "I lead a Church or Faith Community",
    description: "Pastors, ministry leaders, and church staff",
  },
  {
    type: "organization",
    label: "I represent a Nonprofit or Organization",
    description: "Nonprofit staff, boards, and mission-driven teams",
  },
  {
    type: "individual",
    label: "I am an Emerging Leader or Individual",
    description: "Personal growth, career, and community leadership",
  },
];

interface VisitorGreeterProps {
  onSelect: (type: VisitorMode) => void;
}

/**
 * Full-attention greeter shown to first-time visitors. Presents the
 * three-lane identification question and an "explore" escape hatch.
 * Rendering is gated by the caller (see App.tsx) based on whether
 * localStorage already has a visitorType.
 */
export function VisitorGreeter({ onSelect }: VisitorGreeterProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="visitor-greeter-heading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/90 backdrop-blur-sm p-4 sm:p-6"
    >
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl border-t-4 border-gold overflow-hidden">
        <div className="px-6 py-8 sm:px-10 sm:py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark mb-3">
            Powerful Visions AI
          </p>
          <h1
            id="visitor-greeter-heading"
            className="text-2xl sm:text-3xl font-extrabold text-navy leading-snug"
          >
            Welcome. To serve you best &mdash; who are you?
          </h1>
          <p className="mt-3 text-navy/70 text-sm sm:text-base">
            In the spirit of Ubuntu, we want to walk with you as who you are, not a
            one-size-fits-all guest.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {CHOICES.map((choice) => (
              <button
                key={choice.type}
                type="button"
                onClick={() => onSelect(choice.type)}
                className="group w-full rounded-xl border-2 border-navy bg-navy px-5 py-4 text-left transition-colors hover:bg-navy-light focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
              >
                <span className="block font-semibold text-white text-base sm:text-lg">
                  {choice.label}
                </span>
                <span className="block mt-1 text-xs sm:text-sm text-gold-light group-hover:text-gold">
                  {choice.description}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onSelect("explore")}
            className="mt-6 text-sm font-medium text-navy/60 underline decoration-gold decoration-2 underline-offset-4 hover:text-navy"
          >
            I just want to explore
          </button>
        </div>
      </div>
    </div>
  );
}
