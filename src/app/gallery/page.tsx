import { prisma } from "@/lib/prisma";
import { UtensilsCrossed, Wine, Coffee, PartyPopper } from "lucide-react";

export const dynamic = "force-dynamic";

const categoryIcons: Record<string, React.ReactNode> = {
  food: <UtensilsCrossed className="w-8 h-8 text-gold/30" />,
  drinks: <Wine className="w-8 h-8 text-gold/30" />,
  interior: <Coffee className="w-8 h-8 text-gold/30" />,
  events: <PartyPopper className="w-8 h-8 text-gold/30" />,
};

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  const categories = [...new Set(images.map((i) => i.category))];

  return (
    <>
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Gallery</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Moments at White Oak</h1>
          <p className="text-white/50 max-w-xl mx-auto">
            A glimpse into the ambiance, plates, and craft cocktails that define our restaurant.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {categories.map((cat) => (
            <div key={cat} className="mb-12">
              <h2 className="font-serif text-2xl mb-6 capitalize">{cat}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images
                  .filter((i) => i.category === cat)
                  .map((img) => (
                    <div
                      key={img.id}
                      className="aspect-[4/3] bg-gradient-to-br from-[#2d2418] to-dark flex items-center justify-center relative group cursor-pointer"
                    >
                      {categoryIcons[cat]}
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
