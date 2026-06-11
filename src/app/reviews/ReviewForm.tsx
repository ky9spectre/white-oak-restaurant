"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function ReviewForm() {
  const [form, setForm] = useState({ name: "", rating: 5, text: "", source: "website" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", rating: 5, text: "", source: "website" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="bg-white/5 border border-white/10 p-8 space-y-5">
      <div>
        <label className="block text-sm font-medium mb-1 text-white/70">Name</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brass"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-white/70">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setForm({ ...form, rating: s })}
              className="p-0.5"
            >
              <Star
                size={24}
                className={s <= form.rating ? "fill-brass text-brass" : "text-white/20 hover:text-brass/50"}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-white/70">Your Review</label>
        <textarea
          required
          rows={4}
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brass resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brass text-dark py-3 text-sm font-semibold tracking-wide hover:bg-brass-light transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : status === "success" ? "Review Submitted!" : "Submit Review"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm text-center">Thank you! Your review will appear after approval.</p>
      )}
    </form>
  );
}
