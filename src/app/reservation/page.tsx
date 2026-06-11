import ReservationForm from "./ReservationForm";

export default function ReservationPage() {
  return (
    <>
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brass text-xs tracking-[3px] uppercase mb-3">Reservations</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Reserve Your Table</h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Book your dining experience at White Oak Restaurant &amp; Bar. Open daily 12 PM – 1 AM.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-dark">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-8 mb-8">
            <div className="text-center mb-8">
              <a
                href="tel:+919911611916"
                className="text-brass text-2xl font-serif hover:underline"
              >
                +91 9911611916
              </a>
              <p className="text-white/40 text-sm mt-1">For immediate reservations</p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
