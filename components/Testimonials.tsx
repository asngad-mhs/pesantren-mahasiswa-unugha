import React from 'react';
import { QuoteIcon } from './icons';

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  major: string;
  avatarUrl: string;
}> = ({ quote, name, major, avatarUrl }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-brand-green/20 hover:-translate-y-2">
      <QuoteIcon className="w-10 h-10 text-brand-green/50 mb-4" />
      <p className="text-brand-charcoal italic mb-6 flex-grow font-body">"{quote}"</p>
      <div className="flex items-center mt-auto">
        <img src={avatarUrl} alt={name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-brand-green/50" loading="lazy" />
        <div>
          <p className="font-bold font-heading text-brand-green">{name}</p>
          <p className="text-gray-500 text-sm">{major}</p>
        </div>
      </div>
    </div>
  );
};


const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      quote: "Di sini saya tidak hanya belajar ilmu perkuliahan, tapi juga mendalami agama dan membentuk karakter. Lingkungannya sangat mendukung untuk berkembang.",
      name: "Ahmad Fauzi",
      major: "Fakultas Teknik",
      avatarUrl: "https://images.unsplash.com/photo-1627541618133-2964ab4a715f?q=75&w=150&auto=format&fit=crop",
    },
    {
      quote: "Keseimbangan antara kegiatan akademik di kampus dan kegiatan di pesantren membuat hidup saya lebih teratur dan bermakna. Para ustadz sangat membimbing.",
      name: "Siti Aisyah",
      major: "Fakultas Tarbiyah",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=75&w=150&auto=format&fit=crop",
    },
    {
      quote: "Fasilitasnya modern dan bersih. Program Tahfidz-nya membantu saya menjaga hafalan Al-Qur'an di tengah kesibukan kuliah. Sangat direkomendasikan!",
      name: "Muhammad Iqbal",
      major: "FEBI (Ekonomi & Bisnis Islam)",
      avatarUrl: "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=75&w=150&auto=format&fit=crop",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-green">Kata Mahasantri</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-body">
            Dengarkan langsung dari mereka yang telah merasakan manfaatnya.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;