"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="bg-white/5 border border-white/10 p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
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
          <label className="block text-sm font-medium mb-1 text-white/70">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brass"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-white/70">Subject</label>
        <input
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brass"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-white/70">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brass resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brass text-dark py-3 text-sm font-semibold tracking-wide hover:bg-brass-light transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-green-400 text-sm text-center">Thank you! We&apos;ll get back to you shortly.</p>
      )}
    </form>
  );
}
