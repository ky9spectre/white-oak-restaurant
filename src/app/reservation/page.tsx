import ReservationForm from "./ReservationForm";

export default function ReservationPage() {
  return (
    <>
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[3px] uppercase mb-3">Reservations</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Reserve Your Table</h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Book your dining experience at White Oak Restaurant &amp; Bar. For immediate assistance, call us directly.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 shadow-sm mb-8">
            <div className="text-center mb-8">
              <a
                href="tel:+17139606588"
                className="text-gold text-2xl font-serif hover:underline"
              >
                (713) 960-6588
              </a>
              <p className="text-gray-400 text-sm mt-1">For immediate reservations</p>
            </div>
            <div className="border-t border-cream-dark pt-8">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
