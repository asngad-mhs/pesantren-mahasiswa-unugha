import React from 'react';

const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* FIX: Changed fetchpriority to fetchPriority. In React, HTML attributes are written in camelCase. */}
      <img src="https://images.unsplash.com/photo-1589995198305-a4e943549182?q=75&w=1920&auto=format&fit=crop" alt="Kampus UNUGHA Cilacap" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4 leading-tight tracking-wide" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
          Meneladani Al-Ghazali,
          <br />
          <span className="text-brand-gold">Mengabdi untuk Negeri</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light font-body" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
          Padukan Pendidikan Tinggi dengan Kedalaman Spiritualitas di Pesantren Mahasiswa Universitas Nahdlatul Ulama Al-Ghazali (UNUGHA) Cilacap.
        </p>
        <a href="#about" onClick={handleScrollClick} className="bg-brand-green text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-green-dark transition-all duration-300 transform hover:scale-110 shadow-lg">
          Jelajahi Lebih Lanjut
        </a>
      </div>
    </section>
  );
};

export default Hero;