import React from 'react';
import { BedIcon, LibraryIcon, WifiIcon, MosqueIcon } from './icons';

interface FacilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ icon, title, description }) => (
  <div className="bg-brand-cream/50 p-6 rounded-lg border border-brand-green/20 text-center transition-all duration-300 hover:bg-white hover:border-brand-green hover:shadow-lg hover:-translate-y-1">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold font-heading text-brand-green mb-2">{title}</h3>
    <p className="text-brand-charcoal text-sm font-body">{description}</p>
  </div>
);

const Facilities: React.FC = () => {
  const facilitiesData = [
    {
      icon: <BedIcon className="w-12 h-12 text-brand-green" />,
      title: "Asrama Kondusif",
      description: "Kamar yang nyaman dan lingkungan asri untuk mendukung istirahat dan belajar.",
    },
    {
      icon: <MosqueIcon className="w-12 h-12 text-brand-green" />,
      title: "Masjid & Aula",
      description: "Pusat kegiatan ibadah, pengajian, dan acara keagamaan lainnya.",
    },
    {
      icon: <LibraryIcon className="w-12 h-12 text-brand-green" />,
      title: "Perpustakaan",
      description: "Koleksi kitab-kitab klasik dan buku-buku referensi modern yang lengkap.",
    },
    {
      icon: <WifiIcon className="w-12 h-12 text-brand-green" />,
      title: "Akses Wi-Fi",
      description: "Koneksi internet untuk mendukung kebutuhan riset dan tugas perkuliahan.",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-green">Fasilitas Penunjang</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-body">
            Lingkungan yang nyaman dan fasilitas lengkap untuk mendukung aktivitas mahasantri.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {facilitiesData.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;