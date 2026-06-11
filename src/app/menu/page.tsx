import { prisma } from "@/lib/prisma";
import MenuClient from "./MenuClient";

export const dynamic = "force-dynamic";

export default async function MenuPage() {
  const items = await prisma.menuItem.findMany({
    where: { available: true },
    orderBy: { name: "asc" },
  });

  const grouped: Record<string, typeof items> = {};
  items.forEach((item) => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  });

  return (
    <>
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Our Menu</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">A Culinary Experience</h1>
          <p className="text-white/50 max-w-xl mx-auto">
            From breakfast through dinner, each dish is crafted with care using the finest ingredients.
          </p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <MenuClient items={items} />
        </div>
      </section>
    </>
  );
}
