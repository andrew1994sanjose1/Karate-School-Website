import { Sword, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dojo-black text-white pt-20 pb-10 border-t-8 border-brand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Sword className="text-brand w-8 h-8" />
              <span className="font-display text-2xl tracking-tighter">ZENITH KARATE</span>
            </Link>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-medium leading-relaxed">
              Forging character through traditional discipline and modern excellence. Establish your legacy with us.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 hover:bg-brand transition-all"><Instagram size={18} /></a>
              <a href="#" className="bg-white/10 p-2 hover:bg-brand transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-white/10 p-2 hover:bg-brand transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              <li><Link to="/" className="hover:text-brand transition-colors text-white">Home</Link></li>
              <li><Link to="/classes" className="hover:text-brand transition-colors text-white">Class Schedule</Link></li>
              <li><Link to="/shop" className="hover:text-brand transition-colors text-white">Dojo Store</Link></li>
              <li><Link to="/portal" className="hover:text-brand transition-colors text-white">Member Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              <li className="flex items-start gap-3"><MapPin size={16} className="text-brand mt-1" /> 123 Dojo Way,<br />Warrior District, NY 10001</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-brand" /> +1 (555) KARATE-1</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-brand" /> contact@zenithkarate.com</li>
            </ul>
          </div>

          <div className="bg-brand/10 p-6 border-l-2 border-brand">
            <h4 className="font-display text-lg mb-4 uppercase tracking-widest text-white">Dojo Hours</h4>
            <div className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-gray-300">
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Mon - Thu</span> <span>16:00 - 21:00</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Friday</span> <span>16:00 - 20:00</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span> <span>09:00 - 13:00</span></div>
              <div className="flex justify-between"><span>Sunday</span> <span className="text-brand font-black">Closed</span></div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
            © {new Date().getFullYear()} ZENITH KARATE ACADEMY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
