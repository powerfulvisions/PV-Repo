import { VisitorType } from "../types/visitor";

export interface Recommendation {
  title: string;
  description: string;
}

export interface PathwayContent {
  label: string;
  heading: string;
  ubuntuWelcome: string;
  recommendations: Recommendation[];
}

/**
 * Sample copy per pathway. The Ubuntu welcome is written in plain
 * language on purpose (spec point 5), and every recommendation keeps the
 * human as the final decision-maker ("human as CEO"). Replace with the
 * site's real offerings and voice as needed.
 */
export const PATHWAY_CONTENT: Record<VisitorType, PathwayContent> = {
  faith: {
    label: "Church & Faith Community",
    heading: "Welcome, Shepherd of Your People",
    ubuntuWelcome:
      "Ubuntu teaches us: I am because we are. Your congregation is a living circle of care, and technology should never replace that circle - it should help you tend it more faithfully. Here, AI serves your ministry. You remain the shepherd.",
    recommendations: [
      {
        title: "Sermon & Teaching Copilot",
        description:
          "Draft outlines, illustrations, and study guides in your own voice - you review, refine, and deliver every word.",
      },
      {
        title: "Congregant Care Assistant",
        description:
          "Organize prayer requests, follow-ups, and pastoral notes with the confidentiality and dignity your people deserve.",
      },
      {
        title: "Ubuntu Prompt Engineering for Ministry",
        description:
          "A gentle, Ubuntu-grounded on-ramp for pastors and staff who are new to AI - start with the SIGMA tier and grow at your own pace.",
      },
    ],
  },
  organization: {
    label: "Nonprofit & Organization",
    heading: "Welcome, Steward of the Mission",
    ubuntuWelcome:
      "Ubuntu reminds us that no work of service is done alone. Your mission belongs to a community of people who trust you to steward it well. AI can lighten the load of reports, grants, and outreach - but the vision, the relationships, and the decisions stay in your hands.",
    recommendations: [
      {
        title: "Grant & Impact Report Assistant",
        description:
          "Turn program data into clear, funder-ready narratives in a fraction of the time - you set the story, AI helps you tell it.",
      },
      {
        title: "Volunteer & Program Coordination Toolkit",
        description:
          "Streamline scheduling, onboarding, and community communications so your team can focus on people, not paperwork.",
      },
      {
        title: "Ubuntu Prompt Engineering for Nonprofits",
        description:
          "Build board-ready, mission-safe AI workflows your whole team can trust, using the BLUE tier of the Ubuntu Prompt Engineering Method.",
      },
    ],
  },
  individual: {
    label: "Emerging Leader & Individual",
    heading: "Welcome, Builder of What's Next",
    ubuntuWelcome:
      "Ubuntu says a person becomes a person through other people. Your growth as a leader is not a solo climb - it is shaped by community, mentorship, and purpose. Use these tools to sharpen your voice, not to replace it. You are the CEO of your own becoming.",
    recommendations: [
      {
        title: "Personal Leadership Copilot",
        description:
          "Sharpen your voice for resumes, pitches, and public speaking - AI drafts options, you make the call.",
      },
      {
        title: "Ubuntu Prompt Engineering Method",
        description:
          "Learn to prompt AI with clarity, character, and community at the center - start at SIGMA and grow toward BLUE.",
      },
      {
        title: "Emerging Leaders Cohort",
        description:
          "A peer community for first-generation and emerging leaders building their next chapter, together.",
      },
    ],
  },
};
