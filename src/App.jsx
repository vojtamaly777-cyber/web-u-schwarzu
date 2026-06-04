import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Menu from './components/sections/Menu';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cream text-wood-dark font-sans">
      {/* Header */}
      <header className="fixed w-full z-50 transition-all duration-300 bg-wood/90 backdrop-blur-md border-b border-wood-light/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-[0.1em] text-cream">
              RESTAURACE <span className="text-brick">U SCHWARZŮ</span>
            </h1>
            <span className="text-[10px] tracking-[0.4em] text-brick-light font-bold uppercase -mt-1">Brno - Řečkovice</span>
          </motion.div>
          
          <nav className="hidden lg:flex space-x-10 text-[11px] font-bold tracking-[0.2em] text-cream/70 uppercase">
            <a href="#o-nas" className="hover:text-brick transition-colors">O nás</a>
            <a href="#menu" className="hover:text-brick transition-colors">Jídelní lístek</a>
            <a href="#pizzerie" className="hover:text-brick transition-colors">Pizzerie</a>
            <a href="#akce" className="hover:text-brick transition-colors">Akce</a>
            <a href="#kontakt" className="hover:text-brick transition-colors">Kontakt</a>
          </nav>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-brick hover:bg-brick-dark text-cream px-6 py-2.5 rounded-sm font-bold transition-all shadow-xl uppercase text-[10px] tracking-[0.2em]"
          >
            Rezervace
          </motion.button>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-wood-dark text-cream/40 py-20 px-6 border-t border-wood-light/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h4 className="text-cream text-xl font-serif mb-6 tracking-wider italic">Restaurace U Schwarzů</h4>
            <p className="max-w-md leading-relaxed mb-8">
              Tradiční restaurace a pizzerie v srdci Řečkovic. Zakládáme si na kvalitních surovinách a příjemné atmosféře. Přijďte se přesvědčit sami.
            </p>
          </div>
          
          <div>
            <h5 className="text-cream text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Navštivte nás</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brick shrink-0" />
                <span>Renčova 2132/12,<br />621 00 Brno-Řečkovice</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brick shrink-0" />
                <span>+420 123 456 789</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-cream text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Otevírací doba</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Po - Čt</span>
                <span className="text-cream/60">11:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-cream/80 font-medium">
                <span>Pá - So</span>
                <span className="text-cream">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Ne</span>
                <span className="text-cream/60">11:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-wood-light/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.1em]">
          <p>&copy; 2024 Restaurace U Schwarzů. Všechna práva vyhrazena.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-cream transition-colors">Ochrana údajů</a>
            <a href="#" className="hover:text-cream transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
