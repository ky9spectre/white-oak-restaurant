import { MapPin, Phone, Mail, Car, Clock, Wine } from "lucide-react";

export default function HoursPage() {
  return (
    <>
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Visit Us</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Hours &amp; Location</h1>
          <p className="text-white/50 max-w-xl mx-auto">
            We are conveniently located inside the Houston Galleria on Level 2, near Neiman Marcus.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-gold text-xs tracking-[2px] uppercase mb-3">
                <MapPin size={14} /> Address
              </h4>
              <p className="text-gray-600 leading-relaxed">
                5011 Westheimer Rd, Houston, TX 77056
                <br />
                Level 2, The Galleria
              </p>
            </div>

            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-gold text-xs tracking-[2px] uppercase mb-3">
                <Phone size={14} /> Contact
              </h4>
              <p className="text-gray-600">
                <a href="tel:+17139606588" className="text-gold hover:underline">(713) 960-6588</a>
                <br />
                <a href="mailto:wh.houow.events@westin.com" className="text-gray-500 hover:underline">
                  wh.houow.events@westin.com
                </a>
              </p>
            </div>

            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-gold text-xs tracking-[2px] uppercase mb-3">
                <Car size={14} /> Parking
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Complimentary valet available at The Westin Oaks Houston.
                <br />
                Garage parking also available.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-gold text-xs tracking-[2px] uppercase mb-4">
                <Clock size={14} /> Restaurant Hours
              </h4>
              <div className="space-y-2">
                {[
                  ["Monday – Friday", "6:30AM – 9:00PM"],
                  ["Saturday – Sunday", "7:00AM – 9:00PM"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between py-2 border-b border-cream-dark text-sm">
                    <span className="font-medium">{day}</span>
                    <span className="text-gray-500">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-gold text-xs tracking-[2px] uppercase mb-4">
                <Wine size={14} /> Bar Hours (Now Open Daily)
              </h4>
              <div className="space-y-2">
                {[
                  ["Tuesday – Thursday", "5:00PM – 10:00PM"],
                  ["Friday – Saturday", "5:00PM – 11:00PM"],
                  ["Sunday", "10:30AM – 3:00PM"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between py-2 border-b border-cream-dark text-sm">
                    <span className="font-medium">{day}</span>
                    <span className="text-gray-500">{time}</span>
                  </div>
                ))}
                <div className="flex justify-between py-2 border-b border-cream-dark text-sm text-gold font-semibold">
                  <span>Monday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-gold text-xs tracking-[2px] uppercase mb-4">
                <Wine size={14} /> Happy Hour
              </h4>
              <div className="flex justify-between py-2 border-b border-cream-dark text-sm">
                <span className="font-medium">Daily</span>
                <span className="text-gray-500">3:00PM – 6:30PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
