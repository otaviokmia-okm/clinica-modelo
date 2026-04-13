'use client';

import React from 'react';
import Image from 'next/image';

export default function Header() {
  // LINK DA AGENDA (Cole o seu link do Google Agenda aqui)
  const linkAgenda = "https://calendar.app.google/4h6GurzC4dLsTUrU9";

  return (
    <header className="bg-white border-b border-gray-100 py-3 px-6 z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Lado Esquerdo: Nova Logo Lumina (PNG) */}
        <div className="flex items-center gap-3">
          {/* Aumentei para w-24 para dar mais destaque à nova logo */}
          <div className="relative w-24 h-24 overflow-hidden rounded-full border border-gray-100 shadow-sm">
            <Image 
              src="/images/logo-lumina.png" // MUDADO PARA PNG AQUI
              alt="Lumina Aesthetics Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            {/* Título refinado com a nova marca */}
            <span className="text-2xl font-serif font-light text-gray-900 tracking-wider leading-none">
              LUMINA
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-1.5">
              AESTHETICS • TOYOTA
            </span>
          </div>
        </div>
        
        {/* Centro: Navegação */}
        <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
          <a href="#services" className="hover:text-[#D4AF37] transition-colors tracking-wide">Serviços</a>
          <a href="#about" className="hover:text-[#D4AF37] transition-colors tracking-wide">Sobre</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors tracking-wide">Contato</a>
        </nav>

        {/* Lado Direito: Botão Dourado Premium */}
        <a 
          href={linkAgenda}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#D4AF37] text-white px-7 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-[#b8952d] transition-all shadow-md active:scale-95 uppercase text-center"
        >
          Agendar Agora
        </a>

      </div>
    </header>
  );
}