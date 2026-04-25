import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sword, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { loginWithGoogle, logout } from '../../lib/firebase';
import { User as FirebaseUser } from 'firebase/auth';

export default function Navbar({ user }: { user: FirebaseUser | null }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-dojo-black/90 backdrop-blur-md border-b border-brand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Sword className="text-brand w-8 h-8" />
            <span className="font-display text-xl text-white tracking-tighter">ZENITH KARATE</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/classes" className="text-white hover:text-brand transition-colors uppercase text-sm font-medium">Classes</Link>
            <Link to="/shop" className="text-white hover:text-brand transition-colors uppercase text-sm font-medium">Dojo Store</Link>
            {user ? (
              <>
                <Link to="/portal" className="text-white hover:text-brand transition-colors uppercase text-sm font-medium">Member Portal</Link>
                <button onClick={logout} className="text-brand border border-brand px-4 py-1 hover:bg-brand hover:text-white transition-all uppercase text-sm font-medium">Logout</button>
              </>
            ) : (
              <button 
                onClick={loginWithGoogle}
                className="bg-brand text-white px-6 py-2 hover:bg-brand/90 transition-all uppercase text-sm font-bold flex items-center gap-2"
              >
                <User size={16} />
                Student Login
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dojo-black border-t border-brand/20 p-4">
          <div className="flex flex-col gap-4">
            <Link to="/classes" onClick={() => setIsOpen(false)} className="text-white uppercase font-medium">Classes</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)} className="text-white uppercase font-medium">Dojo Store</Link>
            {user ? (
              <>
                <Link to="/portal" onClick={() => setIsOpen(false)} className="text-white uppercase font-medium">Member Portal</Link>
                <button onClick={logout} className="text-brand text-left uppercase font-medium">Logout</button>
              </>
            ) : (
              <button onClick={loginWithGoogle} className="bg-brand text-white px-4 py-2 uppercase font-bold">Login</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
