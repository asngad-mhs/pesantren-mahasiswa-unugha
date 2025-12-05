import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-green text-brand-cream">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Bergabunglah Bersama Kami</h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-10 font-body">
          Jadilah bagian dari keluarga besar Pesantren Mahasiswa UNUGHA dan mulailah perjalanan Anda menjadi seorang intelektual yang berakhlak qur'ani. Pendaftaran telah dibuka!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="font-semibold font-heading text-xl mb-2">Hubungi Kami</h3>
            <p className="text-gray-300">
                <i className="fas fa-phone mr-2"></i> +62 896 7092 4182 (Admin)
            </p>
            <p className="text-gray-300 mt-1">
                <i className="fas fa-envelope mr-2"></i> pesma@unugha.ac.id
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="font-semibold font-heading text-xl mb-2">Alamat</h3>
            <p className="text-gray-300">
                <i className="fas fa-map-marker-alt mr-2"></i> Jl. Kemerdekaan Timur No.16, Kesugihan,
                <br />
                Cilacap, Jawa Tengah 53274
            </p>
          </div>
        </div>
        <a 
          href="https://wa.me/6289670924182?text=Assalamualaikum,%20saya%20tertarik%20untuk%20mendaftar%20di%20Pesantren%20Mahasiswa%20UNUGHA." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-gold text-brand-green-dark font-bold py-4 px-10 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-110 shadow-lg inline-block"
        >
          <i className="fab fa-whatsapp mr-2"></i> Daftar via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;