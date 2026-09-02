// Food & Cafes categories for OneJabalpur navigation — content not yet published for these (Coming Soon).
export interface FoodCategory {
  id: string;
  label: string;
}

export const foodCategories: FoodCategory[] = [
  { id: "restaurants", label: "Restaurants" },
  { id: "cafes", label: "Cafes" },
  { id: "street-food", label: "Street Food" },
  { id: "jabalpur-special", label: "Jabalpur Special" },
  { id: "biryani", label: "Biryani" },
  { id: "sweets", label: "Sweets" },
  { id: "food-trails", label: "Food Trails" },
];

export const restaurants = [
  { title: "Verandah Brew House Kitchen", badge: "Restaurant", desc: "Modern dining with a relaxed cafe-style experience.", meta: "⭐ 4.7 · Open · 📞 089599 89591", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80" },
  { title: "Bapu Ki Kutiya", badge: "Vegetarian", desc: "A comfortable choice for vegetarian Indian food.", meta: "⭐ 4.5 · Open · 📞 077708 39999", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },
  { title: "70 MM Dining", badge: "North Indian", desc: "A popular casual dining option for North Indian food.", meta: "⭐ 3.9 · Open · 📞 077239 99977", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80" },
  { title: "Traffic Jam Food Junction Restaurant", badge: "North Indian", desc: "A well-known local restaurant in Sadar.", meta: "⭐ 3.9 · Open · 📞 089832 43888", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80" },
  { title: "Chef Rasoi Cafe and Restaurant", badge: "North Indian", desc: "Indian and casual dining in Jabalpur.", meta: "⭐ 4.5 · Open · 📞 088714 48886", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80" },
  { title: "Rangla Jabalpur", badge: "Modern Indian", desc: "A modern Indian dining option for a sit-down meal.", meta: "⭐ 4.4 · Open · 📞 062329 21118", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80" },
];

export const jabalpurSpecials = [
  { title: "Khoya / Mawa Jalebi", badge: "Signature Sweet", desc: "Rich khoya jalebi, Jabalpur's signature sweet and a must-try local specialty.", meta: "🍬 Try it fresh in the evening", image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=900&q=80" },
  { title: "Sarafa Bazaar", badge: "Food Market", desc: "A lively local food-market experience for chaat, sweets and evening snacks.", meta: "🌃 Best for an evening food walk", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80" },
  { title: "Civic Centre Chaupati", badge: "Street Food", desc: "A popular casual food area for chaat, pav bhaji, fast food and quick bites.", meta: "🍢 Casual evening stop", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80" },
  { title: "Sadar Food Area", badge: "Local Scene", desc: "Explore kebabs, samosa, biryani and the historic local food scene around Sadar.", meta: "🥙 Local favourite", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80" },
  { title: "Gol Bazaar & Napier Town", badge: "Evening Food", desc: "Browse chaat, snacks and sweets around this popular local evening-food area.", meta: "🌙 Good for a casual outing", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80" },
  { title: "Jabalpur Poha-Jalebi", badge: "Breakfast", desc: "A classic Madhya Pradesh breakfast pairing of poha, jalebi and chai.", meta: "🌅 Best in the morning", image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80" },
  { title: "Jabalpur Samosa", badge: "Local Snack", desc: "A simple local snack stop for samosa and kachori when you need a quick bite.", meta: "🥟 Great with chai", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80" },
  { title: "Dal Bafla", badge: "MP Specialty", desc: "A hearty regional meal of baked bafla, dal and generous ghee.", meta: "🥘 Best for lunch or dinner", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80" },
  { title: "Local Chaat", badge: "Street Food", desc: "Try pani puri, dahi bhalla and aloo tikki for the essential Jabalpur street-food experience.", meta: "🌶️ Best for evening walks", image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80" },
  { title: "Local Kulfi", badge: "Traditional Dessert", desc: "Cool down with traditional kulfi after an evening meal or street-food trail.", meta: "🍨 A sweet finish", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80" },
];

export const streetFoodPlaces = [
  { title: "Naidus Dilli Ki Gali Parathe Wali", badge: "Local Food / Paratha", desc: "A local paratha stop that represents the kind of food discovery visitors look for in Jabalpur.", meta: "⭐ 4.1 · Open · 📍 Civic Centre · 📞 098263 19579", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80" },
  { title: "Food Street at Jabalpur Junction No. 6", badge: "Food Street", desc: "A food experience at Jabalpur Junction, ideal for discovering casual bites while travelling through the city.", meta: "⭐ 4.5 · Open · 📍 Jabalpur Junction · 📞 070007 88360", image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80" },
  { title: "Civic Centre Chaupati", badge: "Street Food / Food Market", desc: "A lively local food stop for quick bites, chaat, bhelpuri, chowmein, pav bhaji and street food.", meta: "🍢 Popular for affordable evening food", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80" },
  { title: "Sarafa Bazaar", badge: "Jabalpur Street Food Experience", desc: "A destination for chaat, samosa, kachori, jalebi, kulfi, Indian sweets and local snacks.", meta: "🌃 Best explored in the evening", image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=900&q=80" },
];

export const cafes = [
  { title: "Nothing Before Coffee", badge: "Café", desc: "A popular modern café option for coffee, quick breaks and casual meet-ups.", meta: "⭐ 4.7 · Open · 📍 Wright Town · 📞 098931 30207", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80" },
  { title: "Meraki The Art Cafe", badge: "Café / Art Café", desc: "A creative art-and-café experience for coffee, conversation and a more memorable outing.", meta: "⭐ 4.6 · Open · 📍 Wright Town", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80" },
  { title: "The Coffee Concept Jabalpur", badge: "Café / Coffee", desc: "A good modern café choice for coffee, casual food and late-evening visits.", meta: "⭐ 4.5 · Open · 📍 Wright Town · 📞 070000 10587", image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80" },
  { title: "Happy Hour's Cafe", badge: "Café", desc: "A casual coffee-shop option for quick bites and relaxed catch-ups around Garha Road.", meta: "⭐ 4.6 · Open · 📍 Garha Road · 📞 089200 07079", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80" },
  { title: "Zamghat", badge: "Café / Food", desc: "A recognizable local Napier Town option for Chinese food and casual dining.", meta: "⭐ 4.1 · Open · 📍 Napier Town · 📞 072472 41414", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80" },
  { title: "Coffee Culture - The Ristorante Lounge", badge: "Café / Lounge", desc: "A current Jabalpur café-listing option to consider for coffee and a sit-down outing.", meta: "📍 Jabalpur", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80" },
  { title: "The Oven Classics Bakery & Cafe", badge: "Bakery / Café", desc: "A bakery-café choice for continental and fast food, baked items and desserts.", meta: "🥐 Bakery, café and desserts · 📍 Jabalpur", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80" },
  { title: "Indian Coffee House - Sadar", badge: "Classic Café", desc: "A classic Jabalpur stop for coffee, dosa, snacks and an old-school café experience.", meta: "☕ South Indian, North Indian and fast food · 📍 Sadar", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=900&q=80" },
];

export const foodAreas = [
  { title: "Sadar", number: "01", knownFor: ["Indian Coffee House", "Kebabs", "Samosa", "Biryani", "Street food"] },
  { title: "Civic Centre", number: "02", knownFor: ["Chaupati", "Chaat", "Pav Bhaji", "Parathas", "Fast food"] },
  { title: "Wright Town", number: "03", knownFor: ["Cafés", "Modern restaurants", "Fast food"] },
  { title: "Napier Town", number: "04", knownFor: ["Cafés", "Restaurants", "Chaat", "Desserts"] },
  { title: "Sarafa", number: "05", knownFor: ["Street food", "Sweets", "Chaat", "Evening food"] },
  { title: "Garha Road", number: "06", knownFor: ["Cafés", "Local food", "Kulfi and sweets"] },
];

export const jabalpurSweets = [
  { title: "Khoya Jalebi", badge: "Jabalpur Specialty", desc: "Jabalpur's signature sweet: rich jalebi made with khoya, best enjoyed fresh.", meta: "⭐ Featured local sweet", image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=900&q=80" },
  { title: "Khoya Barfi", badge: "Traditional Sweet", desc: "A rich milk-based barfi with the distinctive flavour of khoya.", meta: "🍬 Traditional mithai", image: "https://images.unsplash.com/photo-1605196560547-1b47e2f082b8?auto=format&fit=crop&w=900&q=80" },
  { title: "Peda", badge: "Traditional Sweet", desc: "A classic milk sweet for visitors exploring Jabalpur's traditional mithai shops.", meta: "🍬 Milk-based sweet", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=80" },
  { title: "Kunda", badge: "Local Sweet", desc: "A rich, slow-cooked milk sweet worth seeking out in local sweet shops.", meta: "🥛 Milk delicacy", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80" },
  { title: "Imarti", badge: "Traditional Sweet", desc: "A bright, syrupy sweet with a crisp exterior and soft centre.", meta: "🍥 Freshly made sweet", image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=900&q=80" },
  { title: "Gulab Jamun", badge: "Classic Dessert", desc: "Soft, warm gulab jamun for an unfussy traditional dessert stop.", meta: "🍯 Indian classic", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80" },
  { title: "Kulfi", badge: "Traditional Dessert", desc: "A cooling traditional dessert, especially welcome after an evening food walk.", meta: "🍨 Evening favourite", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80" },
  { title: "Badkul Sweets / Badkul Pratisthan", badge: "Sweet Shop", desc: "A current local sweet-shop listing for Khoya Jalebi and other traditional sweets.", meta: "📍 Jabalpur", image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=900&q=80" },
];

export const foodByMeal = [
  { title: "Jabalpur Breakfast", badge: "🌅 Breakfast", desc: "Poha, jalebi, samosa, kachori, aloo or pyaz paratha, and chai.", meta: "Start early with classic MP flavours" },
  { title: "Jabalpur Evening Food", badge: "🌆 Evening", desc: "Chaat, pani puri, samosa, kachori, pav bhaji, momos and kulfi.", meta: "Best for food markets and evening walks" },
  { title: "Jabalpur Night Food", badge: "🌙 Late Night", desc: "Chaat, rolls, biryani, Chinese, fast food and tea.", meta: "Look around Sadar, Napier Town, Wright Town and Vijay Nagar" },
];
