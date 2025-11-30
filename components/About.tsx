import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2c6577eda07c?q=75&w=1200&auto=format&fit=crop" 
              alt="Diskusi Mahasantri UNUGHA" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-green mb-6">Tentang Pesantren Mahasiswa UNUGHA</h2>
            <p className="text-brand-charcoal mb-4 leading-relaxed font-body">
              Pesantren Mahasiswa UNUGHA adalah kawah candradimuka untuk mencetak sarjana Muslim yang unggul secara akademik, berakhlak mulia, dan berpegang teguh pada nilai-nilai keislaman. Kami mengintegrasikan kearifan Imam Al-Ghazali dengan ilmu pengetahuan modern untuk membentuk pemimpin masa depan.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold font-heading text-brand-green mb-2">Visi Kami</h3>
                <p className="text-brand-charcoal font-body">Menjadi pusat pengembangan insan akademis yang berkarakter <span className="font-bold">Ahlussunnah wal Jama'ah An-Nahdliyah</span>, berwawasan global, dan berkontribusi aktif bagi peradaban.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold font-heading text-brand-green mb-2">Misi Kami</h3>
                <ul className="list-disc list-inside text-brand-charcoal space-y-2 font-body">
                  <li>Menyelenggarakan pendidikan yang mengintegrasikan spiritualitas Imam Al-Ghazali dengan sains dan teknologi.</li>
                  <li>Mengembangkan potensi mahasantri dalam bidang kepemimpinan, riset, dan pengabdian masyarakat.</li>
                  <li>Menciptakan lingkungan yang kondusif untuk Tahfidzul Qur'an dan pengkajian kitab turats sebagai basis intelektual.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;