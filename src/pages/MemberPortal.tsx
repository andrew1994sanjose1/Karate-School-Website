import { motion } from 'motion/react';
import { User as FirebaseUser } from 'firebase/auth';
import { QRCodeSVG } from 'qrcode.react';
import { Trophy, Calendar, User, Shield, CreditCard, ChevronRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { doc, getDoc, collection, query, where, getDocs, orderBy } from 'firebase/firestore';

interface MemberPortalProps {
  user: FirebaseUser;
  userData: any;
}

export default function MemberPortal({ user, userData }: MemberPortalProps) {
  const [attendance, setAttendance] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAttendance() {
      try {
        const q = query(
          collection(db, 'attendance'), 
          where('userId', '==', user.uid),
          orderBy('timestamp', 'desc')
        );
        const snapshot = await getDocs(q);
        setAttendance(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        // Silently fail if collection doesn't exist yet or rules block
        console.warn("Could not fetch attendance");
      }
    }
    fetchAttendance();
  }, [user.uid]);

  const progress = userData?.beltProgress || 0;
  const rank = userData?.rank || "White Belt";

  return (
    <div className="bg-dojo-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Left Column: Profile & QR */}
          <div className="lg:w-1/3 space-y-8">
            {/* Profile Card */}
            <div className="bg-white p-8 border-b-8 border-brand shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-dojo-black rounded-full flex items-center justify-center text-white overflow-hidden">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <User size={32} />
                  )}
                </div>
                <div>
                  <h2 className="text-2xl leading-none">{user.displayName}</h2>
                  <span className="text-brand font-bold uppercase text-xs tracking-widest">{userData?.role || 'STUDENT'}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-bold uppercase text-gray-500">
                  <span>Current Rank</span>
                  <span className="text-dojo-black">{rank}</span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-brand"
                  />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-tighter text-right text-gray-400">
                  {progress}% TO NEXT BELT
                </div>
              </div>
            </div>

            {/* QR Code Check-in */}
            <div className="bg-dojo-black p-8 text-white text-center">
              <h3 className="text-xl mb-2 font-display uppercase tracking-tight">QR Check-in</h3>
              <p className="text-gray-400 text-xs mb-6 uppercase tracking-widest">Scan at Dojo Front Desk</p>
              <div className="bg-white p-4 inline-block rounded-sm">
                <QRCodeSVG 
                  value={user.uid} 
                  size={200}
                  level="H"
                  includeMargin={false}
                  fgColor="#171717"
                />
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-brand text-xs font-bold uppercase animate-pulse">
                <div className="w-2 h-2 bg-brand rounded-full" />
                Dynamic Live Code
              </div>
            </div>
          </div>

          {/* Right Column: Dash & Stats */}
          <div className="lg:w-2/3 space-y-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-6 border shadow-sm flex items-center gap-4">
                <div className="bg-brand/10 p-3 rounded-full text-brand">
                  <Trophy size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">{userData?.attendanceCount || 0}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Classes This Month</div>
                </div>
              </div>
              <div className="bg-white p-6 border shadow-sm flex items-center gap-4">
                <div className="bg-brand/10 p-3 rounded-full text-brand">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Scheduled Sessions</div>
                </div>
              </div>
              <div className="bg-white p-6 border shadow-sm flex items-center gap-4">
                <div className="bg-brand/10 p-3 rounded-full text-brand">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Upcoming Belt Tests</div>
                </div>
              </div>
            </div>

            {/* Attendance Log */}
            <div className="bg-white border shadow-xl">
              <div className="p-6 border-b flex justify-between items-center bg-dojo-black text-white">
                <h3 className="font-display uppercase tracking-tight">Recent Attendance</h3>
                <button className="text-[10px] bg-brand text-white px-3 py-1 font-bold uppercase">View Full History</button>
              </div>
              <div className="divide-y overflow-hidden">
                {attendance.length > 0 ? attendance.map((log, i) => (
                  <motion.div 
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <Check size={16} />
                      </div>
                      <div>
                        <div className="font-bold text-sm uppercase">Adult Shotokan Fundamentals</div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest">{new Date(log.timestamp?.seconds * 1000).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand uppercase">Verified</span>
                  </motion.div>
                )) : (
                  <div className="p-12 text-center text-gray-400 uppercase text-xs tracking-widest">
                    No attendance records found yet.
                  </div>
                )}
              </div>
            </div>

            {/* Dojo News / Events */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand p-8 text-white">
                <h4 className="font-display text-2xl mb-4">TOURNAMENT ALERT</h4>
                <p className="text-sm opacity-80 mb-6">Regional Karate Championship - May 15th. Registration open for all brown and black belts.</p>
                <button className="bg-white text-brand px-6 py-2 text-xs font-bold uppercase flex items-center gap-2">
                  Register Now <ChevronRight size={14} />
                </button>
              </div>
              <div className="bg-dojo-black p-8 text-white">
                <h4 className="font-display text-2xl mb-4">BELT TESTING</h4>
                <p className="text-sm opacity-80 mb-6">Upcoming belt testing cycle begins next Sunday. Ensure your dues are paid and attendance is verified.</p>
                <button className="border border-white/30 text-white px-6 py-2 text-xs font-bold uppercase flex items-center gap-2">
                  View Requirements <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
