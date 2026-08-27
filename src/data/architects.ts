import { VisitorType } from "../types/visitor";

export interface ArchitectProfile {
  name: string;
  role: string;
  legacy: string;
  bio: string;
  relevance: string;
  initials: string;
}

/**
 * Sample "Black Architects of AI" research profiles, one featured per
 * pathway. These are placeholder summaries based on well-known public
 * biography facts, written to demonstrate the featured-profile pattern.
 * Replace with the site's full Black Architects of AI research content.
 */
export const FEATURED_ARCHITECT: Record<VisitorType, ArchitectProfile> = {
  faith: {
    name: "Dr. Joy Buolamwini",
    role: "Founder, Algorithmic Justice League",
    legacy: "Exposed racial and gender bias in facial recognition systems",
    bio: "Joy Buolamwini's research uncovered how AI systems failed to see darker-skinned and female faces accurately, work she calls fighting \"the coded gaze.\" She built a movement insisting that every person, regardless of how they look, deserves to be seen fairly by the systems shaping their lives.",
    relevance:
      "Her work is a call your congregation already knows in its bones: every person carries the image of God and deserves to be seen, named, and treated with dignity - including by the tools your ministry adopts.",
    initials: "JB",
  },
  organization: {
    name: "Dr. Timnit Gebru",
    role: "Founder, Distributed AI Research Institute (DAIR)",
    legacy: "Built independent, community-rooted AI research outside Big Tech",
    bio: "After raising early alarms about the risks of large-scale AI, Timnit Gebru founded DAIR to prove that rigorous, ethical AI research could be done on the community's terms - independent, interdisciplinary, and accountable to the people it affects.",
    relevance:
      "DAIR is a model for mission-driven organizations: you don't need a Big Tech budget to do principled, high-impact work - you need clarity of purpose and a team that answers to its community.",
    initials: "TG",
  },
  individual: {
    name: "Mark Dean",
    role: "IBM Fellow; co-inventor of the IBM Personal Computer",
    legacy: "Holds 3 of IBM's original 9 PC patents; pioneered the ISA bus and color PC monitor",
    bio: "Mark Dean started as an engineer and rose to become one of the most prolific inventors in computing history, helping design the architecture that let ordinary people put a computer on their desk for the first time.",
    relevance:
      "Mark Dean's path is a reminder for every emerging leader: you don't have to arrive with a title to build something foundational. Consistent, skilled work compounds into legacy.",
    initials: "MD",
  },
};
