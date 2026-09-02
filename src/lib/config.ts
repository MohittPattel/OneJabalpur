type NavChild = {
  label: string;
  href: string;
  children?: NavChild[];
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const siteConfig: {
  name: string;
  brandName: string;
  tagline: string;
  url: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: NavItem[];
  sections: Array<{ title: string; desc: string; icon: string; href: string }>;
  featuredPlaces: Array<{
    title: string;
    desc: string;
    badge: string;
    image: string;
    meta: string;
    href: string;
  }>;
  stats: Array<{ value: string; label: string }>;
  images: { heroBg: string };
  footer: {
    explore: Array<{ label: string; href: string }>;
    local: Array<{ label: string; href: string }>;
    about: Array<{ label: string; href: string }>;
  };
} = {
  name: "One Jabalpur",
  brandName: "OneJabalpur",
  tagline: "Discover Everything Jabalpur",
  url: "https://onejabalpur.com",

  seo: {
    title: "One Jabalpur - Discover Events, Places, Food & Businesses in Jabalpur",
    description:
      "Discover Jabalpur's events, restaurants, places to visit, local businesses, activities, offers and everything happening in Jabalpur, Madhya Pradesh.",
    keywords: [
      "Jabalpur",
      "events in Jabalpur",
      "places to visit in Jabalpur",
      "restaurants in Jabalpur",
      "cafes in Jabalpur",
      "things to do in Jabalpur",
      "Jabalpur businesses",
      "Jabalpur activities",
      "Jabalpur tourist places",
    ],
  },

  nav: [
    {
      label: "Places",
      href: "/places",
      children: [
        { label: "⭐ Must Visit", href: "/places/category/must-visit" },
        { label: "🏙️ Jabalpur City", href: "/places/category/heritage" },
        { label: "🌊 Nature & Waterfalls", href: "/places/category/nature" },
        { label: "🛕 Temples & Spiritual", href: "/places/category/temples" },
        { label: "🌳 Parks & Nature", href: "/places/category/parks" },
        {
          label: "🚗 Near Jabalpur",
          href: "/places/category/nearby",
          children: [
            { label: "🦁 Kanha National Park", href: "/places/kanha-national-park" },
            { label: "🐯 Bandhavgarh", href: "/places/bandhavgarh-national-park" },
            { label: "🌳 Pench", href: "/places/pench-national-park" },
            { label: "⛰️ Pachmarhi", href: "/places/pachmarhi" },
          ],
        },
      ],
    },
    { label: "Events", href: "/events" },
    { label: "Food & Cafes", href: "/food" },
    { label: "Businesses", href: "/businesses" },
  ],

  sections: [
    { title: "Places",        desc: "Discover attractions",  icon: "📍", href: "/places" },
    { title: "Events",        desc: "What's happening",      icon: "🎉", href: "/events" },
    { title: "Food & Cafes",  desc: "Eat & explore",         icon: "☕", href: "/food" },
    { title: "Businesses",    desc: "Local businesses",      icon: "🏪", href: "/businesses" },
    { title: "Things To Do",  desc: "Plan your day",         icon: "🎯", href: "/things-to-do" },
    { title: "Offers",        desc: "Local deals",           icon: "🏷️", href: "#" },
  ],

  featuredPlaces: [
    {
      title: "Dhuandhar Falls",
      desc: "Experience one of Jabalpur's iconic natural attractions.",
      badge: "Must Visit",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      meta: "📍 Bhedaghat · ⭐ Popular",
      href: "/places/dhuandhar-falls",
    },
    {
      title: "Marble Rocks",
      desc: "Explore the dramatic marble cliffs and Narmada landscape.",
      badge: "Nature",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
      meta: "📍 Bhedaghat · 🧭 Experience",
      href: "/places/marble-rocks",
    },
    {
      title: "Dumna Nature Park",
      desc: "A peaceful escape for nature lovers near the city.",
      badge: "Explore",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
      meta: "📍 Jabalpur · 🌿 Nature",
      href: "/places/dumna-nature-park",
    },
  ],

  stats: [
    { value: "50+",  label: "Places" },
    { value: "25+",  label: "Events" },
    { value: "40+",  label: "Cafes" },
    { value: "100+", label: "Businesses" },
  ],

  images: {
    heroBg: "/images/MainBackgroundImage.jpg",
  },

  footer: {
    explore: [
      { label: "Places",      href: "/places" },
      { label: "Events",      href: "/events" },
      { label: "Food & Cafes", href: "/food" },
    ],
    local: [
      { label: "Businesses",   href: "/businesses" },
      { label: "Offers",       href: "#" },
      { label: "Things to Do", href: "/things-to-do" },
    ],
    about: [
      { label: "About",               href: "#" },
      { label: "Contact",             href: "#" },
      { label: "List your business",  href: "#" },
    ],
  },
};
