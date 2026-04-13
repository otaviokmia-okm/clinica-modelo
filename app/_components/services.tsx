import { Sparkles, Flower2, Heart, Moon } from 'lucide-react';

const services = [
  { title: "Estética Facial", description: "Tratamentos avançados para realçar sua beleza natural.", icon: <Sparkles className="w-6 h-6" /> },
  { title: "Cuidado Corporal", description: "Protocolos exclusivos para contorno e saúde da pele.", icon: <Flower2 className="w-6 h-6" /> },
  { title: "Bem-estar", description: "O equilíbrio perfeito entre relaxamento e resultados.", icon: <Heart className="w-6 h-6" /> },
  { title: "Tecnologia", description: "Equipamentos de última geração para sua segurança.", icon: <Moon className="w-6 h-6" /> },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-slate-800 tracking-[0.2em] uppercase">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 rounded-full bg-slate-50 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2 uppercase tracking-wide">{service.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}