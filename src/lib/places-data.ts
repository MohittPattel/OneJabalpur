// Places data for OneJabalpur
// Organized by categories as recommended

export interface Place {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  category: string[];
  tags: string[];
  image: string;
  location: string;
  highlights: string[];
  bestTime?: string;
  timings?: string;
  entryFee?: string;
  isMustVisit?: boolean;
  isFeatured?: boolean;
}

export const placeCategories = [
  { id: "must-visit", label: "Must Visit", icon: "⭐", color: "#F59E0B" },
  { id: "nature", label: "Nature & Waterfalls", icon: "🌊", color: "#10B981" },
  { id: "heritage", label: "History & Heritage", icon: "🏛️", color: "#8B5CF6" },
  { id: "temples", label: "Temples & Spiritual", icon: "🛕", color: "#EC4899" },
  { id: "parks", label: "Parks & Nature", icon: "🌳", color: "#22C55E" },
  { id: "narmada", label: "Narmada & Ghats", icon: "🌊", color: "#0EA5E9" },
  { id: "wildlife", label: "Wildlife & Adventure", icon: "🦁", color: "#F97316" },
  { id: "nearby", label: "Near Jabalpur", icon: "🚗", color: "#6366F1" },
];

// Tier 1 Places - Priority destinations
export const places: Place[] = [
  // ⭐ MUST VISIT
  {
    slug: "bhedaghat",
    title: "Bhedaghat & Marble Rocks",
    shortDesc: "Jabalpur's defining landscape — towering marble cliffs along the Narmada.",
    description: "The Narmada passes through towering Marble Rocks creating one of Jabalpur's most iconic landscapes. Boat rides through the gorge, especially during moonlit nights, are a signature Jabalpur experience. The 100-foot-high marble cliffs change colors with sunlight, creating a magical atmosphere.",
    category: ["must-visit", "nature", "narmada"],
    tags: ["Marble Rocks", "Boat Ride", "Narmada", "Photography"],
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    location: "Bhedaghat, 25 km from Jabalpur",
    highlights: ["Boat rides through marble gorge", "Moonlit boat experiences", "Cable car ride", "Sound & light show"],
    bestTime: "October to March",
    timings: "7:00 AM - 6:00 PM (Boating)",
    isMustVisit: true,
    isFeatured: true,
  },
  {
    slug: "dhuandhar-falls",
    title: "Dhuandhar Falls",
    shortDesc: "The Narmada plunges creating the famous 'smoke' waterfall effect.",
    description: "Where the Narmada river dramatically plunges through a narrow gorge, creating a permanent mist that gives the falls its name — 'Dhuandhar' means 'smoke cascade'. The thundering waters and spray can be experienced from multiple viewpoints, including a ropeway offering aerial views.",
    category: ["must-visit", "nature"],
    tags: ["Waterfall", "Narmada", "Ropeway", "Photography"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    location: "Bhedaghat, near Marble Rocks",
    highlights: ["Thundering waterfall views", "Ropeway ride", "Multiple viewpoints", "Sunset visits"],
    bestTime: "Monsoon (Jul-Sep) for full flow, Winter for pleasant weather",
    timings: "6:00 AM - 7:00 PM",
    isMustVisit: true,
    isFeatured: true,
  },
  {
    slug: "chausath-yogini-temple",
    title: "Chausath Yogini Temple",
    shortDesc: "Ancient 10th-century circular temple above the Narmada valley.",
    description: "One of India's rare circular temples dedicated to the 64 Yoginis, this 10th-century Kalchuri-era monument sits atop a hill with commanding views of the Narmada valley. The 108-step climb rewards visitors with stunning panoramic views and a connection to Jabalpur's ancient spiritual heritage.",
    category: ["must-visit", "heritage", "temples"],
    tags: ["Ancient Temple", "Architecture", "Panoramic Views", "History"],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    location: "Near Bhedaghat",
    highlights: ["Rare circular temple design", "64 Yogini shrines", "Panoramic Narmada views", "Ancient stone carvings"],
    bestTime: "October to March",
    timings: "6:00 AM - 6:00 PM",
    isMustVisit: true,
    isFeatured: true,
  },
  {
    slug: "madan-mahal-fort",
    title: "Madan Mahal Fort",
    shortDesc: "Historic Gond-era fort connected to Rani Durgavati's legacy.",
    description: "Built in the 11th century by the Gond ruler Madan Shah, this hilltop fort offers panoramic city views and a window into Jabalpur's Gond heritage. The fort is closely associated with the legendary Rani Durgavati, who ruled the Gondwana kingdom from this region.",
    category: ["must-visit", "heritage"],
    tags: ["Fort", "History", "Gond Heritage", "City Views"],
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
    location: "Madan Mahal, Jabalpur City",
    highlights: ["Gond heritage site", "City panoramic views", "Rani Durgavati connection", "Historic architecture"],
    bestTime: "October to March",
    timings: "8:00 AM - 6:00 PM",
    isMustVisit: true,
    isFeatured: true,
  },
  {
    slug: "dumna-nature-reserve",
    title: "Dumna Nature Reserve",
    shortDesc: "1,058 hectares of forest, wildlife and nature within the city.",
    description: "One of India's largest urban nature reserves, Dumna covers over 1,058 hectares of forest with diverse wildlife, nature trails, and recreational facilities. It's a green escape right within Jabalpur, perfect for nature walks, bird watching, and peaceful retreats.",
    category: ["must-visit", "parks", "wildlife"],
    tags: ["Nature Reserve", "Wildlife", "Bird Watching", "Trekking"],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    location: "Dumna, Jabalpur",
    highlights: ["Nature trails", "Wildlife spotting", "Bird watching", "Picnic areas"],
    bestTime: "October to March",
    timings: "6:00 AM - 6:00 PM",
    entryFee: "₹20 per person",
    isMustVisit: true,
  },
  {
    slug: "bargi-dam",
    title: "Bargi Dam",
    shortDesc: "Scenic Narmada reservoir with water sports and sunset views.",
    description: "A major dam on the Narmada river creating a vast reservoir that's become a popular destination for water sports, boating, and scenic sunset views. The surrounding hills and the expansive water body make it perfect for day trips and adventure activities.",
    category: ["must-visit", "nature", "wildlife"],
    tags: ["Dam", "Boating", "Water Sports", "Sunset"],
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80",
    location: "Bargi, 45 km from Jabalpur",
    highlights: ["Boating and water sports", "Sunset views", "Crocodile spotting", "Island visits"],
    bestTime: "October to March",
    timings: "6:00 AM - 6:00 PM",
    isMustVisit: true,
  },

  // 🛕 SPIRITUAL & TEMPLES
  {
    slug: "gwarighat",
    title: "Gwarighat",
    shortDesc: "Sacred Narmada riverfront famous for the evening Aarti ceremony.",
    description: "One of Jabalpur's most recognizable and spiritually significant locations on the Narmada. The evening Narmada Aarti ceremony draws devotees and visitors alike to witness the beautiful ritual of lights and prayers on the riverbank.",
    category: ["must-visit", "temples", "narmada"],
    tags: ["Ghat", "Narmada Aarti", "Spiritual", "Evening Ceremony"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
    location: "Gwarighat, Jabalpur City",
    highlights: ["Evening Narmada Aarti", "River bathing", "Sunrise views", "Spiritual atmosphere"],
    bestTime: "Evening for Aarti, Early morning for peace",
    timings: "Open 24 hours, Aarti at sunset",
    isMustVisit: true,
  },
  {
    slug: "kachnar-city",
    title: "Kachnar City Shiva Temple",
    shortDesc: "Massive 76-foot Shiva statue and modern temple complex.",
    description: "Home to a towering 76-foot statue of Lord Shiva in meditation pose, Kachnar City has become one of Jabalpur's most visited spiritual destinations. The modern temple complex includes caves, gardens, and various shrines creating a serene spiritual atmosphere.",
    category: ["temples"],
    tags: ["Shiva Temple", "Giant Statue", "Modern Temple", "Photography"],
    image: "https://images.unsplash.com/photo-1545126178-862cdb469409?auto=format&fit=crop&w=900&q=80",
    location: "Kachnar City, Vijay Nagar",
    highlights: ["76-foot Shiva statue", "Cave shrines", "Beautiful gardens", "Evening illumination"],
    bestTime: "Any time, Evening for lighting",
    timings: "5:00 AM - 9:00 PM",
    isFeatured: true,
  },
  {
    slug: "pisanhari-ki-madiya",
    title: "Pisanhari Ki Madiya",
    shortDesc: "Hilltop Jain temple complex with panoramic city views.",
    description: "A beautiful Jain temple complex situated on a hilltop, offering stunning panoramic views of Jabalpur city. The white marble temples and peaceful atmosphere make it a favorite for both pilgrims and visitors seeking tranquility.",
    category: ["temples"],
    tags: ["Jain Temple", "Hilltop", "City Views", "Architecture"],
    image: "https://images.unsplash.com/photo-1564804955516-d7ed9b7b5f24?auto=format&fit=crop&w=900&q=80",
    location: "Pisanhari, Jabalpur",
    highlights: ["Hilltop location", "City panorama", "Jain architecture", "Peaceful atmosphere"],
    bestTime: "October to March",
    timings: "6:00 AM - 8:00 PM",
  },
  {
    slug: "balancing-rock",
    title: "Balancing Rock",
    shortDesc: "Unique geological wonder — a massive rock balanced on a tiny base.",
    description: "A fascinating geological formation where a massive volcanic rock balances precariously on another rock with minimal contact. This natural wonder near Madan Mahal has survived earthquakes and is a testament to nature's incredible balancing act.",
    category: ["must-visit", "nature"],
    tags: ["Geological Wonder", "Natural Formation", "Photography", "Unique"],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    location: "Near Madan Mahal Fort",
    highlights: ["Unique geological formation", "Photography spot", "Combine with Madan Mahal", "Educational visits"],
    bestTime: "Any time",
    timings: "Open access",
    isMustVisit: true,
  },

  // 🏛️ HERITAGE & MUSEUMS
  {
    slug: "rani-durgavati-museum",
    title: "Rani Durgavati Museum",
    shortDesc: "Regional museum showcasing Gond heritage and local history.",
    description: "Named after the legendary Gond queen, this museum houses an impressive collection of sculptures, inscriptions, prehistoric artifacts, and items related to the region's rich cultural heritage. A must-visit for understanding Jabalpur's historical significance.",
    category: ["heritage"],
    tags: ["Museum", "History", "Gond Heritage", "Artifacts"],
    image: "https://images.unsplash.com/photo-1565060169194-19fabf3ca36e?auto=format&fit=crop&w=900&q=80",
    location: "Napier Town, Jabalpur",
    highlights: ["Gond artifacts", "Ancient sculptures", "Historical inscriptions", "Cultural exhibits"],
    bestTime: "Any time",
    timings: "10:00 AM - 5:00 PM (Closed Mondays)",
    entryFee: "₹10 (Indians), ₹100 (Foreigners)",
  },
  {
    slug: "tilwara-ghat",
    title: "Tilwara Ghat",
    shortDesc: "Historic ghat where Mahatma Gandhi's ashes were immersed.",
    description: "A historically significant ghat on the Narmada where Mahatma Gandhi's ashes were immersed. The ghat holds deep spiritual and national importance, with a memorial and peaceful riverside atmosphere.",
    category: ["heritage", "narmada"],
    tags: ["Historic Ghat", "Gandhi Memorial", "Narmada", "Heritage"],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
    location: "Tilwara, Jabalpur",
    highlights: ["Gandhi memorial", "Historic significance", "Peaceful riverside", "Morning visits"],
    bestTime: "Morning",
    timings: "Open 24 hours",
  },
  {
    slug: "sangram-sagar-lake",
    title: "Sangram Sagar Lake",
    shortDesc: "Historic lake with scenic beauty and recreational facilities.",
    description: "A beautiful historic lake in the heart of Jabalpur, Sangram Sagar offers boating facilities, lakeside walks, and lovely sunset views. The surrounding area has been developed for recreation while maintaining its natural charm.",
    category: ["parks", "nature"],
    tags: ["Lake", "Boating", "Park", "Recreation"],
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=900&q=80",
    location: "Sangram Sagar, Jabalpur City",
    highlights: ["Boating", "Lakeside walks", "Sunset views", "Bird watching"],
    bestTime: "Evening",
    timings: "6:00 AM - 8:00 PM",
  },
  {
    slug: "bargi-hills",
    title: "Bargi Hills",
    shortDesc: "Rocky landscape with valleys, ridges and scenic viewpoints.",
    description: "A rocky terrain featuring valleys, ridges, and water bodies that offers adventure seekers trekking opportunities and nature lovers scenic vistas. The area around Bargi Hills includes Khandari Lake and Thakur Tal.",
    category: ["nature", "wildlife"],
    tags: ["Trekking", "Hills", "Adventure", "Scenic Views"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    location: "Bargi Hills, near Jabalpur",
    highlights: ["Trekking trails", "Rocky terrain", "Scenic viewpoints", "Nature photography"],
    bestTime: "October to March",
    timings: "Daylight hours",
  },
  {
    slug: "bhawartal-garden",
    title: "Bhawartal Garden",
    shortDesc: "Popular city park with lake, boating and family recreation.",
    description: "Jabalpur's most popular urban park featuring a lake with boating facilities, gardens, children's play areas, and spaces for morning walks. A favorite spot for families and morning exercisers alike.",
    category: ["parks"],
    tags: ["Park", "Lake", "Boating", "Family"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",
    location: "Civil Lines, Jabalpur",
    highlights: ["Boating", "Children's area", "Morning walks", "Family picnics"],
    bestTime: "Morning or Evening",
    timings: "5:00 AM - 9:00 PM",
    entryFee: "₹5 per person",
  },

  // 🌊 WATERFALLS (Tier 2, but adding key ones)
  {
    slug: "bhadbhada-falls",
    title: "Bhadbhada Falls",
    shortDesc: "Seasonal waterfall spectacular during monsoon season.",
    description: "A beautiful seasonal waterfall that comes alive during the monsoon, creating a dramatic cascade. Best visited during or just after the rainy season when the water flow is at its peak.",
    category: ["nature"],
    tags: ["Waterfall", "Monsoon", "Nature", "Photography"],
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80",
    location: "Near Jabalpur",
    highlights: ["Monsoon spectacle", "Photography", "Nature escape", "Picnic spot"],
    bestTime: "July to September (Monsoon)",
    timings: "Daylight hours",
  },

  // 🚗 NEARBY DESTINATIONS
  {
    slug: "kanha-national-park",
    title: "Kanha National Park",
    shortDesc: "One of India's finest tiger reserves, inspiration for The Jungle Book.",
    description: "One of the largest and most well-maintained national parks in India, Kanha is famous for its Bengal tigers, diverse wildlife, and being the inspiration for Rudyard Kipling's Jungle Book. The park offers incredible safari experiences through sal and bamboo forests.",
    category: ["nearby", "wildlife"],
    tags: ["Tiger Reserve", "Safari", "Wildlife", "Jungle Book"],
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80",
    location: "Mandla District, 160 km from Jabalpur",
    highlights: ["Tiger safaris", "Diverse wildlife", "Jungle Book connection", "Bird watching"],
    bestTime: "October to June (Park closed Jul-Sep)",
    timings: "Safari: 6 AM & 3 PM",
    entryFee: "₹2000+ (Safari booking)",
    isFeatured: true,
  },
  {
    slug: "bandhavgarh-national-park",
    title: "Bandhavgarh National Park",
    shortDesc: "Highest density of tigers in India with ancient fort ruins.",
    description: "Famous for having the highest density of Bengal tigers in India, Bandhavgarh also features ancient cave dwellings and a historic fort. The diverse terrain of hills, grasslands, and forests supports an incredible variety of wildlife.",
    category: ["nearby", "wildlife"],
    tags: ["Tiger Reserve", "Safari", "Fort", "Wildlife"],
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=900&q=80",
    location: "Umaria District, 195 km from Jabalpur",
    highlights: ["Highest tiger density", "Ancient fort", "Cave paintings", "Wildlife photography"],
    bestTime: "October to June",
    timings: "Safari: 6 AM & 3 PM",
    entryFee: "₹2500+ (Safari booking)",
    isFeatured: true,
  },
  {
    slug: "pench-national-park",
    title: "Pench National Park",
    shortDesc: "The land of Mowgli — Kipling's actual Jungle Book inspiration.",
    description: "The actual inspiration for Rudyard Kipling's Jungle Book, Pench straddles Madhya Pradesh and Maharashtra. Its teak forests, river, and diverse wildlife create the perfect setting for memorable safari experiences.",
    category: ["nearby", "wildlife"],
    tags: ["Tiger Reserve", "Safari", "Jungle Book", "Nature"],
    image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?auto=format&fit=crop&w=900&q=80",
    location: "Seoni District, 200 km from Jabalpur",
    highlights: ["Jungle Book inspiration", "River safaris", "Bird watching", "Night safaris"],
    bestTime: "October to June",
    timings: "Safari: 6 AM & 3 PM",
    entryFee: "₹2000+ (Safari booking)",
  },
  {
    slug: "pachmarhi",
    title: "Pachmarhi Hill Station",
    shortDesc: "The Queen of Satpura — MP's only hill station with waterfalls and caves.",
    description: "Madhya Pradesh's only hill station, Pachmarhi offers a cool retreat with numerous waterfalls, ancient caves with prehistoric paintings, panoramic viewpoints, and lush forests. Known as the 'Queen of Satpura'.",
    category: ["nearby", "nature"],
    tags: ["Hill Station", "Waterfalls", "Caves", "Nature"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
    location: "Hoshangabad District, 200 km from Jabalpur",
    highlights: ["Waterfalls", "Prehistoric caves", "Panoramic views", "Colonial architecture"],
    bestTime: "October to June",
    timings: "Various attraction timings",
  },
  {
    slug: "ghughwa-fossil-park",
    title: "Ghughwa National Fossil Park",
    shortDesc: "Ancient plant fossils dating back millions of years.",
    description: "A unique geological site containing plant fossils dating back 40-150 million years. The fossilized remains of ancient trees and plants offer a fascinating glimpse into prehistoric India. A must-visit for geology enthusiasts.",
    category: ["nearby", "nature"],
    tags: ["Fossils", "Geology", "Prehistoric", "Educational"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    location: "Dindori District, 90 km from Jabalpur",
    highlights: ["Plant fossils", "Geological museum", "Educational tours", "Unique formations"],
    bestTime: "October to March",
    timings: "9:00 AM - 5:00 PM",
    entryFee: "₹25 per person",
  },
];

// Helper functions
export function getPlaceBySlug(slug: string): Place | undefined {
  return places.find((p) => p.slug === slug);
}

export function getPlacesByCategory(categoryId: string): Place[] {
  return places.filter((p) => p.category.includes(categoryId));
}

export function getMustVisitPlaces(): Place[] {
  return places.filter((p) => p.isMustVisit);
}

export function getFeaturedPlaces(): Place[] {
  return places.filter((p) => p.isFeatured);
}

export function getNearbyDestinations(): Place[] {
  return places.filter((p) => p.category.includes("nearby"));
}
