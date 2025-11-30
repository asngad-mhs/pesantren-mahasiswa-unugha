import React from 'react';
import { NULogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green-dark text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <NULogoIcon className="h-10 w-10 mr-3 text-white" />
              <span className="text-xl font-bold font-heading text-white">Pesantren Mahasiswa UNUGHA</span>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Pesantren Mahasiswa UNUGHA Cilacap. All Rights Reserved.</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/unughacilacap" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi Facebook kami" className="text-gray-300 hover:text-brand-gold transition-colors">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/unugha_cilacap" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi Instagram kami" className="text-gray-300 hover:text-brand-gold transition-colors">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.youtube.com/@unughacilacap" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi YouTube kami" className="text-gray-300 hover:text-brand-gold transition-colors">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;