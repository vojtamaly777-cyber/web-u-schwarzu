import React from 'react';
import { motion } from 'framer-motion';
import { Users, DoorOpen, Accessibility, ParkingCircle, Beer } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="text-brick" size={24} />,
      title: 'Kapacita 70 míst',
      description: 'Dostatek prostoru pro vás i vaše přátele v útulném prostředí naší restaurace.'
    },
    {
      icon: <DoorOpen className="text-brick" size={24} />,
      title: 'Soukromý salonek',
      description: 'Ideální místo pro vaše oslavy, firemní večírky nebo rodinná setkání.'
    },
    {
      icon: <Accessibility className="text-brick" size={24} />,
      title: 'Bezbariérový přístup',
      description: 'Naše restaurace je plně přístupná pro všechny naše hosty bez omezení.'
    },
    {
      icon: <ParkingCircle className="text-brick" size={24} />,
      title: 'Parkování',
      description: 'Pohodlné parkování přímo u objektu nebo v blízkém okolí restaurace.'
    }
  ];

  return (
    <div id="o-nas" className="bg-cream py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brick font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Tradiční hostinec v Brně
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-wood-dark mb-8 leading-tight">
              Kde se tradice potkává <br /> s poctivou chutí
            </h2>
            <p className="text-wood-dark/70 text-lg mb-12 max-w-xl leading-relaxed">
              Restaurace U Schwarzů je místem, kde si zakládáme na poctivé české kuchyni a příjemné atmosféře. 
              Ať už k nám zavítáte na rychlý oběd, rodinnou večeři nebo oslavu v našem salonku, 
              vždy se o vás postaráme s maximální péčí.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 bg-brick/5 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-wood-dark font-bold mb-1">{feature.title}</h4>
                    <p className="text-wood-dark/60 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/restaurant-interior-salon.png" 
                alt="Interiér restaurace U Schwarzů" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brick/10 -z-0 rounded-sm" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-wood-light/10 -z-0 rounded-sm" />
          </motion.div>
        </div>
      </div>

      {/* Beer Highlight Section */}
      <div className="max-w-7xl mx-auto mt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-wood-dark rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl"
        >
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="/src/assets/beer-kamenice.png" 
              alt="Pivo Kamenice 10°" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/80 via-transparent to-transparent lg:hidden" />
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brick flex items-center justify-center rounded-full">
                <Beer className="text-cream" size={24} />
              </div>
              <span className="text-brick-light font-bold tracking-widest uppercase text-sm">Naše chlouba</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif text-cream mb-6">Pivo jako křen: <br />Kamenice 10°</h3>
            <p className="text-cream/70 text-lg mb-8 leading-relaxed">
              Vychutnejte si naše nepasterizované a nefiltrované pivo Kamenice 10°. 
              Čepujeme ho přímo z tanku, aby si zachovalo svou čerstvost, plnou chuť 
              a přirozený říz. Pro milovníky piva je to zážitek, který nesmíte vynechat.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <span className="text-brick text-2xl font-serif">10°</span>
                <span className="text-cream/50 text-xs uppercase tracking-tighter">Nepasterizováno</span>
              </div>
              <div className="w-px h-10 bg-cream/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-brick text-2xl font-serif">Z Tanku</span>
                <span className="text-cream/50 text-xs uppercase tracking-tighter">Vždy čerstvé</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
