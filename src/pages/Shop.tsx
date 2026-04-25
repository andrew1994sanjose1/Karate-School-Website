import { motion } from 'motion/react';
import { ShoppingBag, ChevronRight, Package, CreditCard } from 'lucide-react';
import { useState } from 'react';

const PRODUCTS = [
  { id: '1', name: 'Master Gi (Standard)', price: 85, image: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?q=80&w=1974&auto=format&fit=crop', category: 'Gi' },
  { id: '2', name: 'Sparring Set (Full)', price: 120, image: 'https://images.unsplash.com/photo-1582230332316-65935222ef27?q=80&w=2070&auto=format&fit=crop', category: 'Gear' },
  { id: '3', name: 'Zenith Branding Hoodie', price: 45, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop', category: 'Apparel' },
  { id: '4', name: 'Training Focus Mitts', price: 35, image: 'https://images.unsplash.com/photo-1509563268479-0f00323fb985?q=80&w=2070&auto=format&fit=crop', category: 'Equipment' },
];

export default function Shop() {
  const [cart, setCart] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addToCart = (id: string) => {
    setCart([...cart, id]);
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate payment process
    setTimeout(() => {
      setIsProcessing(false);
      alert("This is a demo. Payments would be handled via Stripe in a real app!");
      setCart([]);
    }, 2000);
  };

  return (
    <div className="bg-dojo-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12 flex justify-between items-end border-b-2 border-dojo-black pb-8">
          <div>
            <h1 className="text-6xl mb-2">DOJO <span className="text-brand">STORE</span></h1>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold font-display italic">Elite Gear for the Modern Warrior</p>
          </div>
          <div className="bg-dojo-black text-white p-4 flex items-center gap-4">
            <ShoppingBag size={24} />
            <div className="text-right">
              <div className="text-xs uppercase opacity-70 tracking-tighter">Your Order</div>
              <div className="font-bold text-xl">${cart.reduce((acc, id) => acc + (PRODUCTS.find(p => p.id === id)?.price || 0), 0)}</div>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="uppercase font-display tracking-tight text-xl mb-4 border-l-4 border-brand pl-4">Categories</h3>
              <ul className="space-y-2 uppercase text-xs font-bold tracking-widest text-gray-500">
                <li className="text-brand cursor-pointer hover:bg-gray-100 p-2">All Merchandise</li>
                <li className="cursor-pointer hover:bg-gray-100 p-2">Uniforms (Gi)</li>
                <li className="cursor-pointer hover:bg-gray-100 p-2">Sparring Gear</li>
                <li className="cursor-pointer hover:bg-gray-100 p-2">Accessories</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-6">
              <Package size={32} className="text-brand mb-4" />
              <h4 className="font-display uppercase text-lg mb-2">Dojo Pickup</h4>
              <p className="text-xs text-gray-500 leading-relaxed uppercase">Select "Store Pickup" at checkout. Your gear will be waiting for you at your next training session.</p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {PRODUCTS.map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -10 }}
                  className="bg-white border flex flex-col group shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-brand text-white px-3 py-1 font-display uppercase tracking-widest text-xs">
                      ${product.price}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-2">{product.category}</span>
                      <h4 className="font-display text-xl uppercase leading-tight mb-4">{product.name}</h4>
                    </div>
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="w-full bg-dojo-black text-white py-3 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-brand transition-colors"
                    >
                      Add to Cart <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {cart.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 bg-dojo-black p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8 border-b-8 border-brand"
              >
                <div>
                  <h3 className="text-3xl font-display uppercase mb-2">Finalize Selection</h3>
                  <p className="text-sm opacity-60">Complete your order for in-dojo collection.</p>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="bg-brand px-12 py-4 text-xl font-black uppercase flex items-center gap-4 hover:scale-105 transition-all disabled:opacity-50"
                >
                  {isProcessing ? 'Processing...' : (
                    <>
                      Confirm Payment <CreditCard size={24} />
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
