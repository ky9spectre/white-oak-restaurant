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
  { key: "starters", label: "Starters" },
  { key: "mains", label: "Main Course" },
  { key: "breads", label: "Breads" },
  { key: "beverages", label: "Beverages" },
  { key: "drinks", label: "Cocktails & Drinks" },
  { key: "desserts", label: "Desserts" },
];

const sectionLabels: Record<string, string> = {
  "vegetarian": "Vegetarian",
  "non-vegetarian": "Non-Vegetarian",
  "chinese": "Chinese",
  "breads": "Breads",
  "beverages": "Beverages",
  "cocktails": "Cocktails",
  "desserts": "Desserts",
};

const foodImages: Record<string, string> = {
  "Dahi Ke Kebab": "/images/food-1.jpg",
  "Paneer Achari Tikka": "/images/food-1.jpg",
  "Hara Bhara Kebab": "/images/food-1.jpg",
  "Tandoori Soya Chaap Masala": "/images/food-1.jpg",
  "Paneer Tikka": "/images/food-1.jpg",
  "Veg Manchurian Dry": "/images/food-10.jpg",
  "Peri Peri Chicken Tikka": "/images/food-11.jpg",
  "Amritsari Tandoori Chicken": "/images/food-4.jpg",
  "Chicken Seekh Kebab": "/images/food-11.jpg",
  "Mutton Seekh Kebab": "/images/food-11.jpg",
  "Chicken Wings": "/images/food-11.jpg",
  "Fish Fingers": "/images/food-11.jpg",
  "Paneer Butter Masala": "/images/food-9.jpg",
  "Shahi Paneer": "/images/food-9.jpg",
  "Dal Makhani": "/images/food-6.jpg",
  "Palak Paneer": "/images/food-9.jpg",
  "Kadhai Paneer": "/images/food-9.jpg",
  "Veg Biryani": "/images/food-3.jpg",
  "Chole Bhature": "/images/food-5.jpg",
  "Butter Chicken": "/images/food-2.jpg",
  "Chicken Biryani": "/images/food-3.jpg",
  "Mutton Biryani": "/images/food-3.jpg",
  "Chicken Tikka Masala": "/images/food-2.jpg",
  "Mutton Rogan Josh": "/images/food-2.jpg",
  "Fish Curry": "/images/food-2.jpg",
  "Tandoori Chicken Full": "/images/food-4.jpg",
  "Chicken Fried Rice": "/images/food-8.jpg",
  "Veg Fried Rice": "/images/food-8.jpg",
  "Chicken Manchurian": "/images/food-10.jpg",
  "Hakka Noodles": "/images/food-8.jpg",
  "Chilli Chicken": "/images/food-10.jpg",
  "Momos (Veg)": "/images/food-7.jpg",
  "Momos (Chicken)": "/images/food-7.jpg",
  "Plain Roti": "/images/food-5.jpg",
  "Butter Roti": "/images/food-5.jpg",
  "Missi Roti": "/images/food-5.jpg",
  "Plain Laccha Paratha": "/images/food-5.jpg",
  "Butter Naan": "/images/food-5.jpg",
  "Garlic Naan": "/images/food-5.jpg",
  "Lal Mirch Ka Paratha": "/images/food-5.jpg",
  "Cheese Naan": "/images/food-5.jpg",
  "Fresh Lime Soda": "/images/food-12.jpg",
  "Mango Lassi": "/images/food-12.jpg",
  "Cold Coffee": "/images/food-12.jpg",
  "Masala Chai": "/images/food-12.jpg",
  "Fresh Orange Juice": "/images/food-12.jpg",
  "Classic Margarita": "/images/food-12.jpg",
  "Long Island Iced Tea": "/images/food-12.jpg",
  "Blue Lagoon Daiquiri": "/images/food-12.jpg",
  "Bombshell": "/images/food-12.jpg",
  "Classic Martini": "/images/food-12.jpg",
  "Whiskey Sour": "/images/food-12.jpg",
  "Gulab Jamun": "/images/food-12.jpg",
  "Rasmalai": "/images/food-12.jpg",
  "Kulfi Falooda": "/images/food-12.jpg",
  "Brownie with Ice Cream": "/images/food-12.jpg",
};

export default function MenuClient({ items }: { items: MenuItem[] }) {
  const [active, setActive] = useState("starters");

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
                ? "bg-brass text-dark border-brass"
                : "bg-white/5 text-white/50 border-white/10 hover:border-brass hover:text-brass"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {sections.map((section) => (
        <div key={section} className="mb-10">
          <h3 className="font-serif text-xl mb-6 text-brass">{sectionLabels[section] || section}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered
              .filter((i) => i.section === section)
              .map((item) => (
                <div key={item.id} className="flex gap-4 bg-white/5 p-4 border border-white/10 hover:border-brass/30 transition-colors card-hover">
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                    <img
                      src={foodImages[item.name] || "/images/food-2.jpg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <span className="font-serif text-brass text-sm">{item.price}</span>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
