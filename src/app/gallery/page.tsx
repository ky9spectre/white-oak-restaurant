import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const allImages = [
  { url: "/images/food-1.jpg", alt: "Paneer Tikka", caption: "Charcoal Grilled Paneer Tikka", category: "food" },
  { url: "/images/food-2.jpg", alt: "Butter Chicken", caption: "Classic Creamy Butter Chicken", category: "food" },
  { url: "/images/food-3.jpg", alt: "Biryani", caption: "Dum Cooked Chicken Biryani", category: "food" },
  { url: "/images/food-4.jpg", alt: "Tandoori Chicken", caption: "Amritsari Tandoori Chicken", category: "food" },
  { url: "/images/food-5.jpg", alt: "Naan", caption: "Fresh Tandoori Naan", category: "food" },
  { url: "/images/food-6.jpg", alt: "Dal Makhani", caption: "Slow Cooked Dal Makhani", category: "food" },
  { url: "/images/food-7.jpg", alt: "Momos", caption: "Steamed Momos", category: "food" },
  { url: "/images/food-8.jpg", alt: "Fried Rice", caption: "Wok Tossed Fried Rice", category: "food" },
  { url: "/images/food-9.jpg", alt: "Paneer Butter Masala", caption: "Creamy Paneer Butter Masala", category: "food" },
  { url: "/images/food-10.jpg", alt: "Manchurian", caption: "Indo-Chinese Manchurian", category: "food" },
  { url: "/images/food-11.jpg", alt: "Kebab", caption: "Sizzling Kebab Platter", category: "food" },
  { url: "/images/food-12.jpg", alt: "Beverages", caption: "Refreshing Beverages & Desserts", category: "food" },
  { url: "/images/restaurant-1.jpg", alt: "Restaurant Interior", caption: "Contemporary Dining Ambience", category: "interior" },
  { url: "/images/restaurant-2.jpg", alt: "Bar Area", caption: "Full Bar with Cocktails", category: "interior" },
  { url: "/images/restaurant-3.jpg", alt: "Outdoor Seating", caption: "Vibrant Outdoor Seating", category: "interior" },
  { url: "/images/restaurant-4.jpg", alt: "Live Music", caption: "Live Music Nights", category: "events" },
  { url: "/images/restaurant-5.jpg", alt: "Private Dining", caption: "Private Dining Area", category: "events" },
  { url: "/images/restaurant-6.jpg", alt: "Restaurant Entrance", caption: "Welcome to White Oak", category: "interior" },
];

const categoryLabels: Record<string, string> = {
  food: "Food & Dishes",
  interior: "Restaurant Ambience",
  events: "Events & Experiences",
};

export default async function GalleryPage() {
  const categories = [...new Set(allImages.map((i) => i.category))];

  return (
    <>
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brass text-xs tracking-[3px] uppercase mb-3">Gallery</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Moments at White Oak</h1>
          <p className="text-white/50 max-w-xl mx-auto">
            A glimpse into the ambiance, plates, and craft cocktails that define our restaurant.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          {categories.map((cat) => (
            <div key={cat} className="mb-12">
              <h2 className="font-serif text-2xl mb-6 text-brass">{categoryLabels[cat] || cat}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allImages
                  .filter((i) => i.category === cat)
                  .map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-[4/3] overflow-hidden relative group cursor-pointer animate-fadeInUp"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <div>
                          <p className="text-white text-sm font-medium">{img.alt}</p>
                          {img.caption && <p className="text-white/60 text-xs">{img.caption}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
