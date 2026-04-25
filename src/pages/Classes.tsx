import { motion } from 'motion/react';
import { Clock, Users, Users as UserIcon, Star, ArrowRight } from 'lucide-react';

const CLASSES = [
  { 
    id: '1', 
    name: 'Little Warriors', 
    category: 'Peewees', 
    age: '4-6 Years', 
    desc: 'Fun-filled introduction to basic karate movements and listening skills.',
    schedule: 'Mon, Wed 16:00'
  },
  { 
    id: '2', 
    name: 'Junior Dragons', 
    category: 'Juniors', 
    age: '7-12 Years', 
    desc: 'Focusing on discipline, concentration, and intermediate kata techniques.',
    schedule: 'Tue, Thu 17:00'
  },
  { 
    id: '3', 
    name: 'Adult Shotokan', 
    category: 'Adults', 
    age: '13+ Years', 
    desc: 'Traditional training for fitness, self-defense, and character development.',
    schedule: 'Mon, Wed 19:00'
  },
  { 
    id: '4', 
    name: 'Elite Sparring', 
    category: 'Advanced', 
    age: 'Graded Only', 
    desc: 'High-intensity kumite training for competitive practitioners.',
    schedule: 'Fri 18:30'
  },
];

export default function Classes() {
  return (
    <div className="bg-dojo-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <header className="max-w-3xl mb-16">
          <span className="text-brand font-display font-bold uppercase tracking-widest mb-4 block underline underline-offset-4">Training Tracks</span>
          <h1 className="text-6xl md:text-8xl mb-8 leading-none">
            DISCOVER YOUR <br />
            <span className="text-brand">STRENGTH.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed uppercase font-medium font-sans">
            We offer comprehensive training for every age group and experience level. Choose your path below.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-px bg-gray-200 border-2 border-dojo-black">
          {CLASSES.map((c, i) => (
            <motion.div 
              key={c.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-12 hover:bg-dojo-black hover:text-white transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-brand font-display text-4xl leading-none">0{i+1}</span>
                  <div className="bg-gray-100 group-hover:bg-white/10 px-4 py-2 text-[10px] uppercase font-black tracking-widest rounded-full">
                    {c.category}
                  </div>
                </div>
                
                <h3 className="text-4xl mb-4 uppercase">{c.name}</h3>
                <div className="flex gap-6 mb-6 text-xs uppercase font-bold tracking-widest text-gray-500 group-hover:text-gray-400">
                  <div className="flex items-center gap-2"><UserIcon size={14} /> {c.age}</div>
                  <div className="flex items-center gap-2"><Clock size={14} /> {c.schedule}</div>
                </div>
                
                <p className="text-gray-600 group-hover:text-gray-300 text-sm mb-10 leading-relaxed uppercase font-medium">
                  {c.desc}
                </p>

                <button className="flex items-center gap-2 text-brand font-bold uppercase text-sm tracking-widest border-b-2 border-brand pb-2 transition-all hover:gap-4">
                  Request Info <ArrowRight size={16} />
                </button>
              </div>
              
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Star size={300} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Grid */}
        <section className="mt-24">
          <h2 className="text-4xl mb-12 text-center uppercase tracking-tighter">Weekly Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-dojo-black">
              <thead>
                <tr className="bg-dojo-black text-white uppercase text-xs tracking-widest">
                  <th className="p-4 border-2 border-dojo-black">Time</th>
                  <th className="p-4 border-2 border-dojo-black">Monday</th>
                  <th className="p-4 border-2 border-dojo-black">Tuesday</th>
                  <th className="p-4 border-2 border-dojo-black">Wednesday</th>
                  <th className="p-4 border-2 border-dojo-black">Thursday</th>
                  <th className="p-4 border-2 border-dojo-black">Friday</th>
                </tr>
              </thead>
              <tbody className="text-center font-bold uppercase text-xs tracking-tighter">
                {[ '16:00', '17:00', '18:30', '19:30' ].map((time) => (
                  <tr key={time}>
                    <td className="p-4 border-2 border-gray-200 bg-gray-50 font-display">{time}</td>
                    <td className="p-4 border-2 border-gray-200 hover:bg-brand hover:text-white transition-colors cursor-pointer">{time === '16:00' ? 'Peewees' : time === '19:30' ? 'Adults' : ''}</td>
                    <td className="p-4 border-2 border-gray-200 hover:bg-brand hover:text-white transition-colors cursor-pointer">{time === '17:00' ? 'Juniors' : ''}</td>
                    <td className="p-4 border-2 border-gray-200 hover:bg-brand hover:text-white transition-colors cursor-pointer">{time === '16:00' ? 'Peewees' : time === '19:30' ? 'Adults' : ''}</td>
                    <td className="p-4 border-2 border-gray-200 hover:bg-brand hover:text-white transition-colors cursor-pointer">{time === '17:00' ? 'Juniors' : ''}</td>
                    <td className="p-4 border-2 border-gray-200 hover:bg-brand hover:text-white transition-colors cursor-pointer">{time === '18:30' ? 'Elite' : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
