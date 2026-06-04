import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Pizza, Beer } from 'lucide-react';

const menuData = {
  jidelak: {
    title: "Jídelní lístek",
    icon: <Utensils size={20} />,
    items: [
      { name: "120g Utopenec, beraní roh, chleba", price: "80,-" },
      { name: "1 ks Tvarůžkový chleba", price: "65,-" },
      { name: "120g Nakládaný hermelín, beraní roh, chleba", price: "115,-" },
      { name: "1 ks Topinka s masovou směsí a sýrem", price: "130,-" },
      { name: "1 ks Topinka \"Olomoucká\" (tvarůžky, cibule)", price: "75,-" },
      { name: "150g Karpatská klobása, hořčice, křen, beraní roh, chleba", price: "110,-" },
    ]
  },
  pizza: {
    title: "Pizzerie",
    icon: <Pizza size={20} />,
    items: [
      { name: "Margherita", desc: "tomato, mozzarella, bazalka", price: "170,-" },
      { name: "Žampionová", desc: "tomato, mozzarella, žampiony, oregano", price: "180,-" },
      { name: "Šunková", desc: "tomato, mozzarella, šunka, oregano", price: "185,-" },
      { name: "Špenátová", desc: "tomato, mozzarella, špenát, česnek, oregano", price: "185,-" },
      { name: "Salámová", desc: "tomato, mozzarella, salám, oregano", price: "190,-" },
      { name: "Vegetariana", desc: "tomato, mozzarella, cibule, kukuřice, žampiony, olivy, beraní rohy, oregano", price: "195,-" },
      { name: "Hawai", desc: "tomato, mozzarella, šunka, ananas, oregano", price: "200,-" },
    ]
  },
  napoje: {
    title: "Nápojový lístek",
    icon: <Beer size={20} />,
    items: [
      { name: "Kamenice 10° (nepasterizované, z tanku)", price: "45,-" },
      { name: "Kamenice 11° (čepované)", price: "48,-" },
      { name: "Plzeňský Prazdroj 12°", price: "58,-" },
      { name: "Kofola originál 0.1l", price: "10,-" },
      { name: "Domácí limonáda (dle nabídky)", price: "55,-" },
      { name: "Espresso", price: "45,-" },
    ]
  }
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('jidelak');

  return (
    <section id="menu" className="py-24 px-6 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brick font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Naše nabídka
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-wood-dark"
          >
            Vyberte si na co máte chuť
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-2 md:space-x-4">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-bold uppercase text-[10px] tracking-widest ${
                activeTab === tab ? 'text-cream' : 'text-wood-dark/50 hover:text-wood-dark'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brick rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {menuData[tab].icon}
                <span className="hidden sm:inline">{menuData[tab].title}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="bg-white rounded-sm shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brick/5 -mr-32 -mt-32 rounded-full blur-3xl pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-serif text-wood border-b border-wood-light/10 pb-4 mb-8">
                {menuData[activeTab].title}
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {menuData[activeTab].items.map((item, index) => (
                  <div key={index} className="flex justify-between items-start group">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2">
                        <h4 className="text-wood-dark font-bold group-hover:text-brick transition-colors">
                          {item.name}
                        </h4>
                        <div className="flex-1 border-b border-dotted border-wood-dark/20 h-4 mx-2 hidden sm:block" />
                      </div>
                      {item.desc && (
                        <p className="text-wood-dark/60 text-sm italic mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <div className="text-brick font-bold whitespace-nowrap pt-0.5">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <p className="text-wood-dark/50 text-sm italic">
            * Ceny jsou uvedeny v Kč včetně DPH. Alergeny na vyžádání u obsluhy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
