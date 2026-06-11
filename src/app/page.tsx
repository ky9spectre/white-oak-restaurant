import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  UtensilsCrossed,
  Coffee,
  Wine,
  MapPin,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";

export const dynamic = "force-dynamic";

const foodImages: Record<string, string> = {
  "Dahi Ke Kebab": "/images/food-1.jpg",
  "Paneer Achari Tikka": "/images/food-1.jpg",
  "Peri Peri Chicken Tikka": "/images/food-11.jpg",
  "Amritsari Tandoori Chicken": "/images/food-4.jpg",
  "Tandoori Soya Chaap Masala": "/images/food-1.jpg",
  "Paneer Butter Masala": "/images/food-9.jpg",
  "Butter Chicken": "/images/food-2.jpg",
  "Chicken Biryani": "/images/food-3.jpg",
  "Mutton Biryani": "/images/food-3.jpg",
  "Dal Makhani": "/images/food-6.jpg",
  "Momos (Veg)": "/images/food-7.jpg",
  "Chicken Fried Rice": "/images/food-8.jpg",
  "Mutton Seekh Kebab": "/images/food-11.jpg",
  "Shahi Paneer": "/images/food-9.jpg",
};

export default async function Home() {
  const featuredItems = await prisma.menuItem.findMany({
    where: { featured: true, available: true },
    take: 4,
  });

  const reviews = await prisma.review.findMany({
    where: { approved: true },
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="White Oak Restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl animate-fadeInUp">
          <p className="text-brass text-xs tracking-[4px] uppercase mb-4">
            Paharganj, New Delhi
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-6">
            White Oak
            <br />
            Restaurant &amp; Bar
          </h1>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            North Indian, Chinese, Italian &amp; Biryani. Craft cocktails &amp; live music every weekend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-brass text-dark px-8 py-4 text-sm font-semibold tracking-wider hover:bg-brass-light transition-colors animate-pulse-glow"
            >
              VIEW MENU
            </Link>
            <Link
              href="/reservation"
              className="border border-white/30 text-white px-8 py-4 text-sm font-semibold tracking-wider hover:border-brass hover:text-brass transition-colors"
            >
              RESERVE TABLE
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-dark">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] relative animate-slideInLeft">
            <img src="/images/about.jpg" alt="About White Oak" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] border border-brass/30" />
          </div>
          <div className="animate-slideInRight">
            <p className="text-brass text-xs tracking-[3px] uppercase mb-3">About</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Locally Curated,
              <br />
              Globally Inspired
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              White Oak Restaurant &amp; Bar is a popular dining destination in Paharganj, New Delhi. We serve a mix of North Indian, Chinese, Italian cuisines, along with delicious Biryani and refreshing beverages.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Open daily from 12 PM to 1 AM, with live music on weekends and a full bar serving craft cocktails. Average cost for two is ₹1,300 (approx).
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-5 border-l-3 border-brass">
                <h4 className="text-sm font-semibold mb-1">Cuisine</h4>
                <p className="text-xs text-white/50">North Indian, Chinese, Italian, Biryani</p>
              </div>
              <div className="bg-white/5 p-5 border-l-3 border-brass">
                <h4 className="text-sm font-semibold mb-1">Rating</h4>
                <p className="text-xs text-white/50">4.7 on Google (1K+ Reviews)</p>
              </div>
              <div className="bg-white/5 p-5 border-l-3 border-brass">
                <h4 className="text-sm font-semibold mb-1">Cost for Two</h4>
                <p className="text-xs text-white/50">₹1,300 approx</p>
              </div>
              <div className="bg-white/5 p-5 border-l-3 border-brass">
                <h4 className="text-sm font-semibold mb-1">Features</h4>
                <p className="text-xs text-white/50">Live Music, Full Bar, Outdoor Seating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="animate-fadeInUp">
            <div className="w-16 h-16 bg-brass/10 flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="w-7 h-7 text-brass" />
            </div>
            <h3 className="font-serif text-xl mb-2">North Indian &amp; More</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              From classic Tandoori to Chinese wok dishes, Italian pasta, and aromatic Biryani.
            </p>
          </div>
          <div className="animate-fadeInUp delay-200">
            <div className="w-16 h-16 bg-brass/10 flex items-center justify-center mx-auto mb-4">
              <Wine className="w-7 h-7 text-brass" />
            </div>
            <h3 className="font-serif text-xl mb-2">Craft Cocktails &amp; Bar</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Full bar with classic Margaritas, LIIT, Whiskey Sour, Martinis, and seasonal creations.
            </p>
          </div>
          <div className="animate-fadeInUp delay-400">
            <div className="w-16 h-16 bg-brass/10 flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-7 h-7 text-brass" />
            </div>
            <h3 className="font-serif text-xl mb-2">Live Music Nights</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Enjoy live music performances every weekend. Vibrant ambience with great food and drinks.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <p className="text-brass text-xs tracking-[3px] uppercase mb-3">From Our Kitchen</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Featured Dishes</h2>
          <p className="text-white/50 mb-12 max-w-lg">
            Highlights from our menu, crafted with care using the finest ingredients.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, i) => (
              <div key={item.id} className="bg-white/5 group cursor-pointer card-hover brass-glow animate-fadeInUp" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={foodImages[item.name] || "/images/food-2.jpg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <span className="text-brass font-serif">{item.price}</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-brass text-sm font-semibold tracking-wide hover:gap-3 transition-all"
            >
              VIEW FULL MENU <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <p className="text-brass text-xs tracking-[3px] uppercase mb-3">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Guests Say</h2>
          <p className="text-white/50 mb-12 max-w-lg">
            Real reviews from diners who have experienced White Oak Restaurant &amp; Bar.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={r.id} className="bg-white/5 border border-white/10 p-8 relative animate-scaleIn" style={{ animationDelay: `${i * 200}ms` }}>
                <span className="absolute top-4 right-6 text-5xl text-brass/20 font-serif leading-none">
                  &ldquo;
                </span>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-brass text-brass" />
                  ))}
                </div>
                <blockquote className="text-white/70 text-sm leading-relaxed italic mb-6">
                  {r.text}
                </blockquote>
                <div>
                  <p className="text-brass text-sm font-medium">{r.name}</p>
                  <p className="text-white/30 text-xs capitalize">{r.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-dark via-[#2d2418] to-dark text-center px-6">
        <div className="max-w-2xl mx-auto animate-fadeInUp">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to Dine?
          </h2>
          <p className="text-white/50 mb-8">
            Reserve your table or call us for takeaway. Open daily 12 PM – 1 AM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919911611916"
              className="bg-brass text-dark px-8 py-4 text-sm font-semibold tracking-wider hover:bg-brass-light transition-colors inline-flex items-center justify-center gap-2"
            >
              CALL +91 9911611916
            </a>
            <Link
              href="/menu"
              className="border border-white/30 text-white px-8 py-4 text-sm font-semibold tracking-wider hover:border-brass hover:text-brass transition-colors inline-flex items-center justify-center gap-2"
            >
              FULL MENU
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
