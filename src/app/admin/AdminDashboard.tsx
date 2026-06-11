"use client";

import { useState } from "react";
import { Star, Check, X, Trash2, Eye, Clock, Users, Mail, Menu as MenuIcon } from "lucide-react";

interface MenuItem {
  id: string; name: string; description: string; price: string;
  category: string; section: string; featured: boolean; available: boolean;
}
interface Review {
  id: string; name: string; rating: number; text: string; source: string; approved: boolean;
}
interface Reservation {
  id: string; name: string; email: string; phone: string; date: string; time: string;
  guests: number; message: string | null; status: string;
}
interface Message {
  id: string; name: string; email: string; subject: string; message: string; read: boolean;
}

type Tab = "overview" | "menu" | "reviews" | "reservations" | "messages";

export default function AdminDashboard({
  menuItems: initialMenu, reviews: initialReviews,
  reservations: initialReservations, messages: initialMessages,
}: {
  menuItems: MenuItem[]; reviews: Review[];
  reservations: Reservation[]; messages: Message[];
}) {
  const [tab, setTab] = useState<Tab>("overview");
  const [menu, setMenu] = useState(initialMenu);
  const [reviews, setReviews] = useState(initialReviews);
  const [reservations, setReservations] = useState(initialReservations);
  const [messages, setMessages] = useState(initialMessages);

  async function toggleReviewApproval(id: string, approved: boolean) {
    await fetch("/api/reviews", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, approved }),
    });
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, approved } : r)));
  }

  async function deleteItem(type: string, id: string) {
    if (!confirm("Are you sure?")) return;
    await fetch(`/api/${type}/${id}`, { method: "DELETE" });
    if (type === "menu") setMenu((p) => p.filter((i) => i.id !== id));
    if (type === "reviews") setReviews((p) => p.filter((i) => i.id !== id));
    if (type === "reservation") setReservations((p) => p.filter((i) => i.id !== id));
    if (type === "contact") setMessages((p) => p.filter((i) => i.id !== id));
  }

  async function updateReservationStatus(id: string, status: string) {
    await fetch("/api/reservation", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setReservations((p) => p.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "overview", label: "Overview", icon: <MenuIcon size={16} /> },
    { key: "menu", label: "Menu", icon: <MenuIcon size={16} /> },
    { key: "reviews", label: "Reviews", icon: <Star size={16} /> },
    { key: "reservations", label: "Reservations", icon: <Clock size={16} /> },
    { key: "messages", label: "Messages", icon: <Mail size={16} /> },
  ];

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <>
      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
              tab === t.key ? "bg-dark text-white" : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Overview */}
      {tab === "overview" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 shadow-sm">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Menu Items</p>
            <p className="text-3xl font-serif">{menu.length}</p>
            <p className="text-xs text-gray-400 mt-1">{menu.filter((i) => i.available).length} available</p>
          </div>
          <div className="bg-white p-6 shadow-sm">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Reviews</p>
            <p className="text-3xl font-serif">{reviews.length}</p>
            <p className="text-xs text-gray-400 mt-1">{reviews.filter((r) => r.approved).length} approved</p>
          </div>
          <div className="bg-white p-6 shadow-sm">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Reservations</p>
            <p className="text-3xl font-serif">{reservations.length}</p>
            <p className="text-xs text-gray-400 mt-1">{reservations.filter((r) => r.status === "pending").length} pending</p>
          </div>
          <div className="bg-white p-6 shadow-sm">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Messages</p>
            <p className="text-3xl font-serif">{messages.length}</p>
            <p className="text-xs text-gray-400 mt-1">{messages.filter((m) => !m.read).length} unread</p>
          </div>
        </div>
      )}

      {/* Menu Tab */}
      {tab === "menu" && (
        <div className="bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Featured</th>
                <th className="px-4 py-3 font-medium">Available</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {menu.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-400 max-w-[200px] truncate">{item.description}</p>
                  </td>
                  <td className="px-4 py-3 capitalize">{item.category}</td>
                  <td className="px-4 py-3 font-serif text-gold">{item.price}</td>
                  <td className="px-4 py-3">{item.featured ? <Check size={16} className="text-green-500" /> : <X size={16} className="text-gray-300" />}</td>
                  <td className="px-4 py-3">{item.available ? <Check size={16} className="text-green-500" /> : <X size={16} className="text-red-400" />}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => deleteItem("menu", item.id)} className="text-red-400 hover:text-red-600">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Reviews Tab */}
      {tab === "reviews" && (
        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className={`bg-white p-5 shadow-sm flex items-start gap-4 ${!r.approved ? "border-l-4 border-yellow-400" : ""}`}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm">{r.name}</span>
                  <span className="text-xs text-gray-400 capitalize">{r.source}</span>
                  <span className={`text-xs px-2 py-0.5 ${r.approved ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {r.approved ? "Approved" : "Pending"}
                  </span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className={i < r.rating ? "fill-gold text-gold" : "text-gray-200"} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">{r.text}</p>
              </div>
              <div className="flex gap-2">
                {!r.approved && (
                  <button onClick={() => toggleReviewApproval(r.id, true)} className="text-green-500 hover:text-green-700" title="Approve">
                    <Check size={16} />
                  </button>
                )}
                {r.approved && (
                  <button onClick={() => toggleReviewApproval(r.id, false)} className="text-yellow-500 hover:text-yellow-700" title="Unapprove">
                    <X size={16} />
                  </button>
                )}
                <button onClick={() => deleteItem("reviews", r.id)} className="text-red-400 hover:text-red-600" title="Delete">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reservations Tab */}
      {tab === "reservations" && (
        <div className="bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">Guest</th>
                <th className="px-4 py-3 font-medium">Date & Time</th>
                <th className="px-4 py-3 font-medium">Party</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reservations.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.phone}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p>{r.date}</p>
                    <p className="text-xs text-gray-400">{r.time}</p>
                  </td>
                  <td className="px-4 py-3"><Users size={14} className="inline mr-1" />{r.guests}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 capitalize ${statusColors[r.status] || "bg-gray-100"}`}>{r.status}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      {r.status === "pending" && (
                        <button onClick={() => updateReservationStatus(r.id, "confirmed")} className="text-green-500 hover:text-green-700" title="Confirm">
                          <Check size={16} />
                        </button>
                      )}
                      {r.status !== "cancelled" && (
                        <button onClick={() => updateReservationStatus(r.id, "cancelled")} className="text-red-400 hover:text-red-600" title="Cancel">
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Messages Tab */}
      {tab === "messages" && (
        <div className="space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`bg-white p-5 shadow-sm ${!m.read ? "border-l-4 border-gold" : ""}`}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{m.name}</span>
                    <span className="text-xs text-gray-400">{m.email}</span>
                    {!m.read && <span className="text-[10px] bg-gold text-dark px-1.5 py-0.5 font-semibold">NEW</span>}
                  </div>
                  <p className="text-sm font-medium text-gray-700 mb-1">{m.subject}</p>
                  <p className="text-gray-600 text-sm">{m.message}</p>
                </div>
                <button onClick={() => deleteItem("contact", m.id)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
