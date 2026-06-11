import { prisma } from "@/lib/prisma";
import { Star } from "lucide-react";
import ReviewForm from "./ReviewForm";

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  const reviews = await prisma.review.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "0";

  return (
    <>
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Testimonials</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Guest Reviews</h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={18}
                  className={s <= Math.round(Number(avgRating)) ? "fill-gold text-gold" : "text-white/20"}
                />
              ))}
            </div>
            <span className="text-white/60 text-lg font-serif">{avgRating}</span>
            <span className="text-white/30 text-sm">({reviews.length} reviews)</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviews.map((r) => (
              <div key={r.id} className="bg-white p-6 shadow-sm relative">
                <span className="absolute top-3 right-4 text-4xl text-gold/15 font-serif leading-none">&ldquo;</span>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed italic mb-4">
                  {r.text}
                </blockquote>
                <div>
                  <p className="text-dark text-sm font-semibold">{r.name}</p>
                  <p className="text-gray-400 text-xs capitalize">{r.source}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-lg mx-auto">
            <h2 className="font-serif text-2xl mb-6 text-center">Leave a Review</h2>
            <ReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}
