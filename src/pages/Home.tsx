import { motion } from 'motion/react';
import { loginWithGoogle } from '../lib/firebase';
import { ArrowRight, Trophy, Users, Shield, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-dojo-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dojo-black via-dojo-black/80 to-transparent" />
          <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop" 
            alt="Karate Dojo" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand font-display font-bold tracking-widest uppercase text-lg mb-4 block">Master Your Discipline</span>
            <h1 className="text-6xl md:text-8xl text-white mb-6 leading-none">
              LEVEL UP YOUR <br />
              <span className="text-brand italic bg-white/10 px-2">WARRIOR</span> SPIRIT.
            </h1>
            <p className="text-gray-300 text-xl mb-10 max-w-lg leading-relaxed">
              Authentic Shotokan Karate Training. Build confidence, discipline, and power in a modern, professional environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={loginWithGoogle}
                className="bg-brand text-white px-8 py-4 text-xl font-bold uppercase transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Book a Free Trial <ArrowRight size={20} />
              </button>
              <Link 
                to="/classes"
                className="border-2 border-white text-white px-8 py-4 text-xl font-bold uppercase hover:bg-white hover:text-dojo-black transition-all flex items-center justify-center"
              >
                View Classes
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-brand p-8 text-white flex gap-12"
          >
            <div>
              <div className="text-4xl font-display font-bold">15+</div>
              <div className="text-xs uppercase tracking-widest opacity-80">Instructors</div>
            </div>
            <div className="border-l border-white/20 pl-12">
              <div className="text-4xl font-display font-bold">500+</div>
              <div className="text-xs uppercase tracking-widest opacity-80">Students</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl mb-8">THE ZENITH <span className="text-brand underline decoration-4 underline-offset-8">PHILOSOPHY</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At Zenith Karate Academy, we believe karate is more than just self-defense. It is a path to self-mastery. Our curriculum combines traditional Shotokan techniques with modern athletic conditioning.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-dojo-white p-6 border-l-4 border-brand">
                  <Shield className="text-brand mb-4" size={32} />
                  <h4 className="text-xl mb-2 font-display">Discipline</h4>
                  <p className="text-sm text-gray-500">Character building through structured training and respect.</p>
                </div>
                <div className="bg-dojo-white p-6 border-l-4 border-brand">
                  <Users className="text-brand mb-4" size={32} />
                  <h4 className="text-xl mb-2 font-display">Community</h4>
                  <p className="text-sm text-gray-500">Supportive environment for all ages and skill levels.</p>
                </div>
                <div className="bg-dojo-white p-6 border-l-4 border-brand">
                  <Trophy className="text-brand mb-4" size={32} />
                  <h4 className="text-xl mb-2 font-display">Excellence</h4>
                  <p className="text-sm text-gray-500">Striving for perfection in technique and spirit.</p>
                </div>
                <div className="bg-dojo-white p-6 border-l-4 border-brand">
                  <Calendar className="text-brand mb-4" size={32} />
                  <h4 className="text-xl mb-2 font-display">Consistency</h4>
                  <p className="text-sm text-gray-500">Regular training for sustainable progress.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582230332316-65935222ef27?q=80&w=2070&auto=format&fit=crop" 
                alt="Karate Students" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand p-12 text-white hidden md:block">
                <h3 className="text-4xl leading-none font-display">DOJO KUN</h3>
                <p className="max-w-[200px] mt-4 text-sm font-medium italic opacity-90">
                  "Seek perfection of character. Be faithful. Endeavor. Respect others. Refrain from violent behavior."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Banner */}
      <section className="bg-brand py-20 text-white text-center">
        <h2 className="text-5xl md:text-7xl mb-8 leading-tight">READY TO BEGIN <br />YOUR JOURNEY?</h2>
        <button 
          onClick={loginWithGoogle}
          className="bg-white text-brand px-12 py-5 text-2xl font-black uppercase hover:scale-105 transition-all shadow-2xl"
        >
          CLAIM 1-WEEK FREE TRIAL
        </button>
      </section>
    </div>
  );
}
