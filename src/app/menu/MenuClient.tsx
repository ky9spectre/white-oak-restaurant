"use client";

import { useState } from "react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  section: string;
  featured: boolean;
}

const categories = [
  { key: "breakfast", label: "Breakfast", hours: "Weekdays 6:30–11AM · Weekends 7AM–3PM" },
  { key: "allday", label: "All Day Dining", hours: "11AM – 10PM" },
  { key: "brunch", label: "Weekend Brunch", hours: "Saturday & Sunday 8AM – 3PM" },
  { key: "drinks", label: "Cocktails", hours: "Available during bar hours" },
];

const sectionLabels: Record<string, string> = {
  "seasonal-fruit": "Seasonal Fruit",
  "sweet": "Sweet",
  "eggs": "Eggs",
  "eat-well": "Eat Well",
  "starters": "Starters",
  "salads": "Salads",
  "handhelds": "Handhelds",
  "farm-to-table": "Farm to Table",
  "globally-inspired": "Globally Inspired",
  "the-classics": "The Classics",
  "the-sweet-spot": "The Sweet Spot",
  "cocktails": "Cocktails",
};

export default function MenuClient({ items }: { items: MenuItem[] }) {
  const [active, setActive] = useState("breakfast");

  const filtered = items.filter((i) => i.category === active);
  const sections = [...new Set(filtered.map((i) => i.section))];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`px-6 py-2.5 text-sm font-medium border transition-colors ${
              active === c.key
                ? "bg-dark text-white border-dark"
                : "bg-white text-gray-500 border-gray-200 hover:border-dark hover:text-dark"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm mb-8">
        {categories.find((c) => c.key === active)?.hours}
      </p>

      {sections.map((section) => (
        <div key={section} className="mb-10">
          <h3 className="font-serif text-xl mb-6 text-gold">{sectionLabels[section] || section}</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {filtered
              .filter((i) => i.section === section)
              .map((item) => (
                <div key={item.id} className="border-b border-cream-dark pb-5">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <span className="font-serif text-gold">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
