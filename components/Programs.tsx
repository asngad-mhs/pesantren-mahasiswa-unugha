import React from 'react';
import { BookIcon, QuranIcon, UsersIcon, ResearchIcon } from './icons';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-brand-green/20 hover:-translate-y-2 transition-all duration-300 transform flex flex-col items-center text-center">
    <div className="mb-6 bg-brand-green p-4 rounded-full">
      {icon}
    </div>
    <h3 className="text-2xl font-bold font-heading text-brand-green mb-3">{title}</h3>
    <p className="text-brand-charcoal leading-relaxed font-body">{description}</p>
  </div>
);

const Programs: React.FC = () => {
  const programsData = [
    {
      icon: <QuranIcon className="w-10 h-10 text-white" />,
      title: "Tahfidz Al-Qur'an",
      description: "Program intensif menghafal dan memahami Al-Qur'an dengan bimbingan dari para hafidz yang kompeten.",
    },
    {
      icon: <BookIcon className="w-10 h-10 text-white" />,
      title: "Kajian Turats & Pusat Studi Aswaja",
      description: "Pendalaman kitab-kitab klasik dan pemikiran Aswaja An-Nahdliyah sebagai pondasi intelektual.",
    },
    {
      icon: <UsersIcon className="w-10 h-10 text-white" />,
      title: "Leadership & Dakwah",
      description: "Pembinaan karakter kepemimpinan, public speaking, dan manajemen organisasi untuk mencetak kader unggul.",
    },
    {
      icon: <ResearchIcon className="w-10 h-10 text-white" />,
      title: "Riset & Pengabdian Masyarakat",
      description: "Menerapkan ilmu pengetahuan untuk memberikan solusi nyata bagi masyarakat sekitar sebagai bagian dari Tri Dharma.",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-green">Program Unggulan</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-body">
            Kami menawarkan program terpadu untuk keseimbangan antara prestasi akademik, spiritualitas, dan pengabdian.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {programsData.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;