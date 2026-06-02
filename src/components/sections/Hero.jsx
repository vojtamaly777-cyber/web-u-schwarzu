import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-wood-dark"
    >
      {/* Background Image with Ken Burns Effect and Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ 
            backgroundImage: 'url("/src/assets/hero-restaurant.png")',
            filter: 'brightness(0.4)' 
          }}
        />
      </motion.div>

      {/* Decorative Overlay (Grain/Texture) */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-center px-4 max-w-4xl"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-brick-light tracking-[0.3em] uppercase text-sm font-bold mb-4 block"
        >
          Tradiční chuť v moderním pojetí
        </motion.span>
        
        <h1 className="text-5xl md:text-8xl font-serif text-cream mb-6 leading-tight">
          Poctivá kuchyně <br /> 
          <span className="text-brick italic">a</span> ručně tahané pizzy
        </h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center gap-6 mt-10"
        >
          <button className="bg-brick hover:bg-brick-dark text-cream px-10 py-4 text-sm font-bold transition-all shadow-2xl tracking-widest uppercase rounded-sm group">
            <span className="inline-block group-hover:scale-105 transition-transform">Denní menu</span>
          </button>
          <button className="bg-transparent border border-cream/30 hover:border-cream text-cream px-10 py-4 text-sm font-bold transition-all tracking-widest uppercase rounded-sm backdrop-blur-sm group">
            <span className="inline-block group-hover:scale-105 transition-transform">Naše nabídka</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-cream to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
