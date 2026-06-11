import { MapPin, Phone, Mail, Clock, UtensilsCrossed } from "lucide-react";

export default function HoursPage() {
  return (
    <>
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brass text-xs tracking-[3px] uppercase mb-3">Visit Us</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Hours &amp; Location</h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Located in the heart of Paharganj, New Delhi. Open daily for lunch, dinner, and late-night dining.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-dark">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="animate-slideInLeft">
            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-brass text-xs tracking-[2px] uppercase mb-3">
                <MapPin size={14} /> Address
              </h4>
              <p className="text-white/60 leading-relaxed">
                3/5, Desh Bandhu Gupta Road,
                <br />
                Paharganj, New Delhi,
                <br />
                Delhi 110055
              </p>
            </div>

            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-brass text-xs tracking-[2px] uppercase mb-3">
                <Phone size={14} /> Contact
              </h4>
              <p className="text-white/60">
                <a href="tel:+919911611916" className="text-brass hover:underline">+91 9911611916</a>
                <br />
                <a href="mailto:whiteoakrestaurantdelhi@gmail.com" className="text-white/50 hover:underline">
                  whiteoakrestaurantdelhi@gmail.com
                </a>
              </p>
            </div>

            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-brass text-xs tracking-[2px] uppercase mb-3">
                <UtensilsCrossed size={14} /> Cuisine
              </h4>
              <p className="text-white/60 leading-relaxed">
                North Indian, Chinese, Italian, Biryani, Beverages
                <br />
                Cost for two: ₹1,300 approx
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/kBx3q54kMwN3PqMBA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brass text-dark px-6 py-3 text-sm font-semibold tracking-wide hover:bg-brass-light transition-colors"
            >
              GET DIRECTIONS
            </a>
          </div>

          <div className="animate-slideInRight">
            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-brass text-xs tracking-[2px] uppercase mb-4">
                <Clock size={14} /> Restaurant Hours
              </h4>
              <div className="space-y-2">
                {[
                  ["Monday – Sunday", "12:00 PM – 1:00 AM"],
                  ["Kitchen Closes", "11:00 PM"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between py-2 border-b border-white/10 text-sm">
                    <span className="font-medium text-white/80">{day}</span>
                    <span className="text-white/50">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-brass text-xs tracking-[2px] uppercase mb-4">
                <Clock size={14} /> Bar Hours
              </h4>
              <div className="space-y-2">
                {[
                  ["Monday – Sunday", "12:00 PM – 1:00 AM"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between py-2 border-b border-white/10 text-sm">
                    <span className="font-medium text-white/80">{day}</span>
                    <span className="text-white/50">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-brass text-xs tracking-[2px] uppercase mb-4">
                <UtensilsCrossed size={14} /> Must-Try Dishes
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brass rounded-full" />
                  Dahi Ke Kebab
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brass rounded-full" />
                  Paneer Achari Tikka
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brass rounded-full" />
                  Peri Peri Chicken Tikka
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brass rounded-full" />
                  Amritsari Tandoori Chicken
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brass rounded-full" />
                  Tandoori Soya Chaap Masala
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
