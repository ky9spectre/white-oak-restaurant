import { prisma } from "@/lib/prisma";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [menuItems, reviews, reservations, messages] = await Promise.all([
    prisma.menuItem.findMany({ orderBy: { category: "asc" } }),
    prisma.review.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.reservation.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <>
      <section className="bg-dark py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-2">Admin Panel</p>
          <h1 className="font-serif text-3xl text-white">Restaurant Dashboard</h1>
        </div>
      </section>
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <AdminDashboard
            menuItems={menuItems}
            reviews={reviews}
            reservations={reservations}
            messages={messages}
          />
        </div>
      </section>
    </>
  );
}
