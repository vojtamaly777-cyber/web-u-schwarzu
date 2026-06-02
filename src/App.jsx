import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Pizza, Beer, MapPin, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-cream text-wood-dark font-sans">
      {/* Header */}
      <header className="bg-wood text-cream py-4 px-6 fixed w-full z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold tracking-wider">RESTAURACE U SCHWARZŮ</h1>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#menu" className="hover:text-brick transition-colors">JÍDELNÍ LÍSTEK</a>
            <a href="#pizzerie" className="hover:text-brick transition-colors">PIZZERIE</a>
            <a href="#akce" className="hover:text-brick transition-colors">AKCE</a>
            <a href="#kontakt" className="hover:text-brick transition-colors">KONTAKT</a>
          </nav>
          <button className="bg-brick hover:bg-brick-dark text-cream px-6 py-2 rounded-sm font-bold transition-all shadow-lg uppercase text-xs tracking-widest">
            Rezervace
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-wood-dark/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop")' }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-cream px-4"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-4">Poctivá česká kuchyně</h2>
          <p className="text-xl md:text-2xl mb-8 font-light italic text-cream/90 font-serif">A ta nejlepší pizza v Brně-Řečkovicích</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-brick hover:bg-brick-dark text-cream px-8 py-3 text-lg font-bold transition-all shadow-xl">
              DENNÍ MENU
            </button>
            <button className="bg-transparent border-2 border-cream hover:bg-cream hover:text-wood px-8 py-3 text-lg font-bold transition-all">
              NAŠE NABÍDKA
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 border border-wood/10 rounded-lg shadow-sm bg-white"
          >
            <Utensils className="mx-auto mb-6 text-brick" size={48} />
            <h3 className="text-2xl font-serif mb-4">Tradiční Kuchyně</h3>
            <p className="text-wood-dark/70">Klasické české pokrmy připravované z čerstvých a lokálních surovin.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 border border-wood/10 rounded-lg shadow-sm bg-white"
          >
            <Pizza className="mx-auto mb-6 text-brick" size={48} />
            <h3 className="text-2xl font-serif mb-4">Ručně Tahaná Pizza</h3>
            <p className="text-wood-dark/70">Autentická italská receptura a pečení v srdci naší restaurace.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 border border-wood/10 rounded-lg shadow-sm bg-white"
          >
            <Beer className="mx-auto mb-6 text-brick" size={48} />
            <h3 className="text-2xl font-serif mb-4">Kamenice 10°</h3>
            <p className="text-wood-dark/70">Nepasterizované pivo z tanku pro ten nejlepší zážitek.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="bg-wood-dark text-cream/60 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-cream text-lg font-serif mb-4 uppercase tracking-widest">Kde nás najdete</h4>
            <p className="flex items-start gap-2"><MapPin size={18} className="mt-1 text-brick" /> Banskobystrická 26, Brno-Řečkovice</p>
          </div>
          <div>
            <h4 className="text-cream text-lg font-serif mb-4 uppercase tracking-widest">Rezervace</h4>
            <p className="flex items-start gap-2"><Phone size={18} className="mt-1 text-brick" /> +420 123 456 789</p>
          </div>
          <div className="text-right">
            <h1 className="text-xl font-serif text-cream font-bold">U SCHWARZŮ</h1>
            <p className="mt-2 text-sm">&copy; 2024 Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
