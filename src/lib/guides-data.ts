// Guide categories for OneJabalpur navigation — content not yet published for these (Coming Soon).
// "Things To Do" is deliberately excluded — it links to the existing /things-to-do page instead.
export interface GuideCategory {
  id: string;
  label: string;
}

export const guideCategories: GuideCategory[] = [
  { id: "1-day-in-jabalpur", label: "1 Day in Jabalpur" },
  { id: "weekend-in-jabalpur", label: "Weekend in Jabalpur" },
  { id: "hidden-gems", label: "Hidden Gems" },
  { id: "family-guide", label: "Family Guide" },
  { id: "couple-guide", label: "Couple Guide" },
  { id: "monsoon-guide", label: "Monsoon Guide" },
  { id: "local-travel-guides", label: "Local Travel Guides" },
];
