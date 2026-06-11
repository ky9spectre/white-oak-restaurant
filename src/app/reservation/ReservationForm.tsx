"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", guests: "2", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, guests: Number(form.guests) }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brass";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1 text-white/70">Name</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white/70">Phone</label>
          <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-white/70">Email</label>
        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1 text-white/70">Date</label>
          <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white/70">Time</label>
          <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputClass}>
            <option value="">Select</option>
            {["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"
            ].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white/70">Guests</label>
          <select required value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className={inputClass}>
            {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((g) => (
              <option key={g} value={g}>{g} {g === 1 ? "Guest" : "Guests"}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-white/70">Special Requests</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass + " resize-none"}
          placeholder="Dietary restrictions, celebrations, etc."
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brass text-dark py-3 text-sm font-semibold tracking-wide hover:bg-brass-light transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : status === "success" ? "Reservation Confirmed!" : "Reserve Table"}
      </button>
      {status === "success" && (
        <p className="text-green-400 text-sm text-center">Thank you! We&apos;ll confirm your reservation shortly.</p>
      )}
    </form>
  );
}
