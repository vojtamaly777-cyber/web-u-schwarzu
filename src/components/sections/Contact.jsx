import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontakt" className="bg-wood-dark text-cream py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Delivery Section */}
        <div className="mb-32 relative group">
          <div className="absolute inset-0 rounded-sm overflow-hidden pointer-events-none">
            <img 
              src="/src/assets/pizza-variety.png" 
              alt="Variety of pizzas" 
              className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-wood-dark via-transparent to-wood-dark"></div>
          </div>
          
          <div className="relative z-10 py-16 px-6">
            <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brick font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Užijte si nás doma
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-cream mb-6"
            >
              Rozvoz jídla
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-cream/60 max-w-2xl mx-auto leading-relaxed"
            >
              Máte chuť na naši poctivou českou kuchyni nebo ručně tahanou pizzu, ale raději byste zůstali v pohodlí domova? Objednejte si přes naše partnery.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.a 
              href="https://wolt.com/cs/cze/brno/restaurant/u-schwarzu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#009de0] text-white px-12 py-6 rounded-sm font-bold flex items-center gap-3 transition-shadow hover:shadow-[0_0_30px_rgba(0,157,224,0.3)] min-w-[280px] justify-center text-xl"
            >
              Wolt
              <ExternalLink size={20} />
            </motion.a>
            <motion.a 
              href="https://www.foodora.cz/restaurant/u-schwarzu-restaurace-pizzerie"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ff0050] text-white px-12 py-6 rounded-sm font-bold flex items-center gap-3 transition-shadow hover:shadow-[0_0_30px_rgba(255,0,80,0.3)] min-w-[280px] justify-center text-xl"
            >
              foodora
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info & Form */}
          <div className="flex flex-col">
            <div className="mb-12 relative h-48 rounded-sm overflow-hidden mb-8">
              <img 
                src="/src/assets/restaurant-interior-salon.png" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-wood-dark/40"></div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-3xl font-serif mb-8 text-cream">Rezervace a kontakt</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <MapPin className="text-brick shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-brick">Adresa</h4>
                    <p className="text-cream/80 text-sm leading-relaxed">
                      Renčova 2132/12<br />
                      621 00 Brno-Řečkovice
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-brick shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-brick">Telefon</h4>
                    <p className="text-cream/80 text-sm">
                      +420 728 246 221
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-brick shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-brick">Email</h4>
                    <p className="text-cream/80 text-sm">
                      info@uschwarzu.cz
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-brick shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-brick">Otevírací doba</h4>
                    <div className="text-cream/80 text-xs space-y-1">
                      <p className="flex justify-between gap-4"><span>Po - Čt</span> <span>11:00 - 22:00</span></p>
                      <p className="flex justify-between gap-4 text-cream"><span>Pá - So</span> <span>11:00 - 23:00</span></p>
                      <p className="flex justify-between gap-4"><span>Ne</span> <span>11:00 - 21:00</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-wood/30 p-8 rounded-sm border border-wood-light/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-cream/40 mb-2">Jméno</label>
                  <input type="text" className="w-full bg-wood-dark border border-wood-light/30 rounded-sm px-4 py-3 focus:border-brick outline-none transition-colors text-cream" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-cream/40 mb-2">Telefon</label>
                  <input type="tel" className="w-full bg-wood-dark border border-wood-light/30 rounded-sm px-4 py-3 focus:border-brick outline-none transition-colors text-cream" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-cream/40 mb-2">Datum</label>
                  <input type="date" className="w-full bg-wood-dark border border-wood-light/30 rounded-sm px-4 py-3 focus:border-brick outline-none transition-colors text-cream" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-cream/40 mb-2">Čas</label>
                  <input type="time" className="w-full bg-wood-dark border border-wood-light/30 rounded-sm px-4 py-3 focus:border-brick outline-none transition-colors text-cream" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-cream/40 mb-2">Osob</label>
                  <select className="w-full bg-wood-dark border border-wood-light/30 rounded-sm px-4 py-3 focus:border-brick outline-none transition-colors text-cream">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                    <option value="more">10+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-cream/40 mb-2">Zpráva (nepovinné)</label>
                <textarea rows="3" className="w-full bg-wood-dark border border-wood-light/30 rounded-sm px-4 py-3 focus:border-brick outline-none transition-colors text-cream"></textarea>
              </div>
              <button className="w-full bg-brick hover:bg-brick-dark text-cream py-4 rounded-sm font-bold uppercase tracking-[0.2em] transition-all shadow-xl">
                Odeslat rezervaci
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-full min-h-[500px] bg-wood/20 rounded-sm overflow-hidden border border-wood-light/10 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.538794828331!2d16.5828859!3d49.2472655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471291583d739811%3A0xe54d650058e0a133!2zUmVuxI1vdmEgMjEzMi8xMiwgNjIxIDAwIEJybm8tUmXEjWtvdmljZQ!5e0!3m2!1scs!2scz!4v1717520000000!5m2!1scs!2scz" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9) hue-rotate(180deg)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(26,13,8,1)]"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
