import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Questions, feedback, or private dining inquiries? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
