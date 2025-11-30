import React from 'react';
import { BookIcon, UsersIcon, PrayerBeadsIcon } from './icons';

const PillarCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="mb-4 text-brand-green">
      {icon}
    </div>
    <h3 className="text-xl font-semibold font-heading text-brand-green mb-2">{title}</h3>
    <p className="text-brand-charcoal font-body text-sm">{description}</p>
  </div>
);

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1594411985396-7d12035514f5?q=75&w=600&h=400&auto=format&fit=crop", // Halaqah Kitab Kuning
    "https://images.unsplash.com/photo-1628771069273-ded55c17b8d3?q=75&w=600&h=400&auto=format&fit=crop", // Tahlilan / Doa Bersama
    "https://images.unsplash.com/photo-1542838132-350bf66c2483?q=75&w=600&h=400&auto=format&fit=crop", // Mahasantri di Perpustakaan (Modern + Tradisi)
    "https://images.unsplash.com/photo-1618413423321-729c6748f33c?q=75&w=600&h=400&auto=format&fit=crop", // Perayaan Maulid / Hadroh
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=75&w=600&h=400&auto=format&fit=crop", // Ziarah Kubur
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=75&w=600&h=400&auto=format&fit=crop", // Seminar / Aktivitas Kampus
  ];

  const altTexts = [
    "Mahasantri dalam sesi halaqah, mengkaji kitab kuning bersama Ustadz.",
    "Suasana khusyuk kegiatan tahlilan dan doa bersama rutin mahasantri.",
    "Perpaduan tradisi dan modernitas: mahasantri belajar menggunakan laptop dan kitab di perpustakaan.",
    "Tim hadroh Pesantren Mahasiswa UNUGHA melantunkan shalawat dalam perayaan Maulid Nabi.",
    "Tradisi ziarah ke makam para ulama sebagai bagian dari pendidikan karakter.",
    "Mahasantri aktif dalam seminar untuk pengembangan wawasan dan soft skill.",
  ];

  return (
    <section id="gallery" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-green">Galeri Kegiatan</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-body">
            Momen-momen kebersamaan dalam menempa diri di Pesantren Mahasiswa UNUGHA.
          </p>
        </div>

        {/* Pilar Kegiatan Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <PillarCard 
            icon={<BookIcon className="w-12 h-12" />} 
            title="Kajian Kitab & Halaqah" 
            description="Memperdalam ilmu agama melalui pengkajian kitab turats secara rutin."
          />
          <PillarCard 
            icon={<PrayerBeadsIcon className="w-12 h-12" />} 
            title="Tradisi Amaliyah NU" 
            description="Menghidupkan amaliyah khas Ahlussunnah wal Jama'ah An-Nahdliyah."
          />
          <PillarCard 
            icon={<UsersIcon className="w-12 h-12" />} 
            title="Pengembangan Diri" 
            description="Mengasah soft skill dan jiwa kepemimpinan melalui organisasi dan kegiatan."
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <img 
                src={src} 
                alt={altTexts[index]} 
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;