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
    <form onSubmit={submit} className="bg-white p-8 shadow-sm space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Subject</label>
        <input
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-gold resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-dark text-white py-3 text-sm font-semibold tracking-wide hover:bg-gold hover:text-dark transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-green-600 text-sm text-center">Thank you! We&apos;ll get back to you shortly.</p>
      )}
    </form>
  );
}
