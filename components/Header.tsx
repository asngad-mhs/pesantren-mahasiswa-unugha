import React, { useState, useEffect } from 'react';
import { NULogoIcon } from './icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Program', href: '#programs' },
    { name: 'Fasilitas', href: '#facilities' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' },
  ];
  
  const programSubLinks = [
    "Tahfidz Al-Qur'an",
    "Kajian Turats & Pusat Studi Aswaja",
    "Leadership & Dakwah",
    "Riset & Pengabdian Masyarakat",
  ];

  useEffect(() => {
    // FIX: Cast querySelector result to HTMLElement to access offsetTop and offsetHeight.
    const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement | null);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial active section on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    e.preventDefault();
    const targetId = href || e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    if (isOpen) setIsOpen(false);
  };

  const getLinkClass = (sectionId: string) => {
    return activeSection === sectionId
      ? 'text-brand-gold font-bold'
      : 'text-brand-charcoal hover:text-brand-green font-medium transition-colors';
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-cream/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#hero" onClick={handleNavClick} className="flex items-center">
            <NULogoIcon className="h-10 w-10 mr-3 text-brand-green" />
            <div className="text-xl font-bold font-heading text-brand-green">
              Pesantren Mahasiswa <span className="hidden sm:inline">UNUGHA Cilacap</span>
            </div>
          </a>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.name === 'Program' ? (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setIsProgramsOpen(true)}
                  onMouseLeave={() => setIsProgramsOpen(false)}
                >
                  <a href={link.href} onClick={handleNavClick} className={`${getLinkClass('programs')} flex items-center cursor-pointer`}>
                    {link.name}
                    <i className="fas fa-chevron-down text-xs ml-2 transition-transform duration-300" style={{ transform: isProgramsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}></i>
                  </a>
                  {isProgramsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-lg shadow-2xl p-4 z-20 ring-1 ring-black ring-opacity-5">
                      <h4 className="font-bold font-heading text-brand-green mb-3 px-2">Program Unggulan</h4>
                      <ul className="space-y-1">
                        {programSubLinks.map(subLink => (
                          <li key={subLink}>
                             <a href="#programs" onClick={(e) => handleNavClick(e, '#programs')} className="block text-sm text-brand-charcoal hover:bg-green-50 hover:text-brand-green rounded-md px-2 py-2 transition-colors">
                              {subLink}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.name} href={link.href} onClick={handleNavClick} className={getLinkClass(link.href.substring(1))}>
                  {link.name}
                </a>
              )
            ))}
          </nav>

          <div className="flex items-center">
            <a href="#contact" onClick={handleNavClick} className="hidden lg:inline-block bg-brand-green text-white font-bold py-2 px-6 rounded-full hover:bg-brand-green-dark transition-transform transform hover:scale-105">
              Daftar Sekarang
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-brand-green focus:outline-none ml-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-brand-cream shadow-lg`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={handleNavClick} className="block text-brand-charcoal hover:bg-green-100 hover:text-brand-green rounded-md px-3 py-2 font-medium transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={handleNavClick} className="block w-full text-center bg-brand-green text-white font-bold py-3 px-6 rounded-md mt-4 hover:bg-brand-green-dark transition-colors">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;