import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white/50 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="font-serif text-lg text-white tracking-wide">
            White Oak<span className="text-brass">.</span>
          </Link>
          <p className="mt-4 leading-relaxed">
            North Indian, Chinese, Italian &amp; Biryani. Located at Paharganj, New Delhi.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/whiteoakrestaurant/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brass transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/whiteoakrestaurantdelhi/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brass transition-colors" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <div className="space-y-2">
            <Link href="/menu" className="block hover:text-brass transition-colors">Menu</Link>
            <Link href="/reviews" className="block hover:text-brass transition-colors">Reviews</Link>
            <Link href="/gallery" className="block hover:text-brass transition-colors">Gallery</Link>
            <Link href="/hours" className="block hover:text-brass transition-colors">Hours &amp; Location</Link>
            <Link href="/reservation" className="block hover:text-brass transition-colors">Reservations</Link>
            <Link href="/admin" className="block hover:text-brass transition-colors">Admin</Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Contact</h4>
          <div className="space-y-2">
            <a href="tel:+919911611916" className="block hover:text-brass transition-colors">+91 9911611916</a>
            <a href="mailto:whiteoakrestaurantdelhi@gmail.com" className="block hover:text-brass transition-colors">whiteoakrestaurantdelhi@gmail.com</a>
            <a href="https://maps.app.goo.gl/kBx3q54kMwN3PqMBA" target="_blank" rel="noopener noreferrer" className="block hover:text-brass transition-colors">Get Directions</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Hours</h4>
          <div className="space-y-2 text-xs leading-relaxed">
            <p>Open Daily: 12:00 PM – 1:00 AM</p>
            <p>Kitchen closes at 11:00 PM</p>
            <p className="mt-3 text-brass font-medium">Bar Hours</p>
            <p>12:00 PM – 1:00 AM Daily</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs">
        &copy; {new Date().getFullYear()} White Oak Restaurant &amp; Bar — Paharganj, New Delhi. All rights reserved.
      </div>
    </footer>
  );
}
