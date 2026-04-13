import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO ORIGINAL - Ajuste o caminho se o nome do arquivo for diferente */}
        <div className="flex items-center gap-3">
          <Image 
            src="/images/logo.png" 
            alt="Lumina Aesthetics Logo" 
            width={50} 
            height={50} 
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-xl font-light tracking-[0.2em] text-slate-800 leading-none">LUMINA</span>
            <span className="text-[8px] tracking-[0.3em] text-slate-400 uppercase mt-1">Aesthetics • Toyota</span>
          </div>
        </div>

        {/* LINKS DE NAVEGAÇÃO */}
        <div className="hidden md:flex space-x-8 text-[11px] tracking-widest text-slate-600 uppercase">
          <a href="#servicos" className="hover:text-[#D4AF37] transition-colors">Serviços</a>
          <a href="#faq" className="hover:text-[#D4AF37] transition-colors">Dúvidas</a>
          <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato</a>
        </div>

        {/* BOTÃO AGENDAR E LOCALIZAÇÃO */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center text-[10px] text-slate-400 tracking-widest uppercase">
            <MapPin className="w-3 h-3 mr-1 text-[#D4AF37]" />
            Toyota, JP
          </div>
          
          <a 
            href="https://calendar.app.google/QVyVqdjc7dDo41oo9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] hover:bg-[#b8952e] text-white px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all shadow-md hover:shadow-lg"
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </nav>
  );
}