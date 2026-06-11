import ContactForm from "./ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brass text-xs tracking-[3px] uppercase mb-3">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Questions, feedback, or private dining inquiries? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-dark">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <a href="tel:+919911611916" className="bg-white/5 border border-white/10 p-6 text-center hover:border-brass/30 transition-colors">
              <Phone className="w-6 h-6 text-brass mx-auto mb-3" />
              <p className="text-sm text-white/70">+91 9911611916</p>
            </a>
            <a href="mailto:whiteoakrestaurantdelhi@gmail.com" className="bg-white/5 border border-white/10 p-6 text-center hover:border-brass/30 transition-colors">
              <Mail className="w-6 h-6 text-brass mx-auto mb-3" />
              <p className="text-sm text-white/70">Email Us</p>
            </a>
            <a href="https://maps.app.goo.gl/kBx3q54kMwN3PqMBA" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-6 text-center hover:border-brass/30 transition-colors">
              <MapPin className="w-6 h-6 text-brass mx-auto mb-3" />
              <p className="text-sm text-white/70">Get Directions</p>
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
