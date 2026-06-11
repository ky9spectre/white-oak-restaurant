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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#2d2418] to-dark" />
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 1200 800" className="w-full h-full">
            <path d="M0 400 Q 300 200 600 400 T 1200 400" stroke="white" fill="none" strokeWidth="2" />
            <path d="M0 450 Q 300 250 600 450 T 1200 450" stroke="white" fill="none" strokeWidth="1" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-gold text-xs tracking-[4px] uppercase mb-4">
            Located in The Galleria, Houston
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-6">
            White Oak
            <br />
            Restaurant &amp; Bar
          </h1>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Locally curated ingredients, skillfully crafted by our culinary team.
            A dining experience that invigorates your senses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-gold text-dark px-8 py-4 text-sm font-semibold tracking-wider hover:bg-gold-dark transition-colors"
            >
              VIEW MENU
            </Link>
            <Link
              href="/reservation"
              className="border border-white/30 text-white px-8 py-4 text-sm font-semibold tracking-wider hover:border-gold hover:text-gold transition-colors"
            >
              RESERVE TABLE
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-gradient-to-br from-[#2d2418] to-dark flex items-center justify-center relative">
            <UtensilsCrossed className="w-20 h-20 text-gold/20" />
            <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] border border-gold/20" />
          </div>
          <div>
            <p className="text-gold text-xs tracking-[3px] uppercase mb-3">About</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Locally Curated,
              <br />
              Globally Inspired
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              White Oak Restaurant &amp; Bar is renowned for its locally curated
              collection of fresh ingredients, skillfully crafted by our culinary
              team. Our dishes are a true masterpiece, offering some of the most
              delectable food you'll find in Houston.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Located on Level 2 of the Houston Galleria near Neiman Marcus, offering
              complimentary valet at The Westin Oaks Houston.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 border-l-3 border-gold shadow-sm">
                <h4 className="text-sm font-semibold mb-1">Cuisine</h4>
                <p className="text-xs text-gray-500">American — Smart Casual. Private dining available.</p>
              </div>
              <div className="bg-white p-5 border-l-3 border-gold shadow-sm">
                <h4 className="text-sm font-semibold mb-1">Parking</h4>
                <p className="text-xs text-gray-500">Complimentary valet at The Westin Oaks. Garage also available.</p>
              </div>
              <div className="bg-white p-5 border-l-3 border-gold shadow-sm">
                <h4 className="text-sm font-semibold mb-1">Bar & Events</h4>
                <p className="text-xs text-gray-500">Full bar, happy hour daily 3–6:30PM. Private room for 40 guests.</p>
              </div>
              <div className="bg-white p-5 border-l-3 border-gold shadow-sm">
                <h4 className="text-sm font-semibold mb-1">Amenities</h4>
                <p className="text-xs text-gray-500">Free Wi-Fi, wheelchair accessible, contactless payments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="w-16 h-16 bg-dark flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-serif text-xl mb-2">Farm to Table</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fresh, locally sourced ingredients from trusted purveyors in every dish.
            </p>
          </div>
          <div>
            <div className="w-16 h-16 bg-dark flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-serif text-xl mb-2">Weekend Brunch</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Saturday &amp; Sunday 8AM–3PM. Huevos Rancheros, French Toast, Mimosas &amp; more.
            </p>
          </div>
          <div>
            <div className="w-16 h-16 bg-dark flex items-center justify-center mx-auto mb-4">
              <Wine className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-serif text-xl mb-2">Craft Cocktails</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Cotton Kiss, Donut Disturb, Agave Sunrise &amp; seasonal creations at our bar.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">From Our Kitchen</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Featured Dishes</h2>
          <p className="text-gray-500 mb-12 max-w-lg">
            Highlights from our menu, crafted with care using the finest ingredients.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#2d2418] to-dark flex items-center justify-center">
                  <UtensilsCrossed className="w-10 h-10 text-gold/20 group-hover:text-gold/40 transition-colors" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <span className="text-gold font-serif">{item.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide hover:gap-3 transition-all"
            >
              VIEW FULL MENU <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-dark text-white px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Guests Say</h2>
          <p className="text-white/50 mb-12 max-w-lg">
            Real reviews from diners who have experienced White Oak Restaurant &amp; Bar.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.id} className="bg-white/5 border border-white/10 p-8 relative">
                <span className="absolute top-4 right-6 text-5xl text-gold/20 font-serif leading-none">
                  &ldquo;
                </span>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-white/70 text-sm leading-relaxed italic mb-6">
                  {r.text}
                </blockquote>
                <div>
                  <p className="text-gold text-sm font-medium">{r.name}</p>
                  <p className="text-white/30 text-xs capitalize">{r.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-dark via-[#2d2418] to-dark text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to Dine?
          </h2>
          <p className="text-white/50 mb-8">
            Reserve your table or order takeout for a taste of White Oak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17139606588"
              className="bg-gold text-dark px-8 py-4 text-sm font-semibold tracking-wider hover:bg-gold-dark transition-colors inline-flex items-center justify-center gap-2"
            >
              CALL (713) 960-6588
            </a>
            <Link
              href="/menu"
              className="border border-white/30 text-white px-8 py-4 text-sm font-semibold tracking-wider hover:border-gold hover:text-gold transition-colors inline-flex items-center justify-center gap-2"
            >
              FULL MENU
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
