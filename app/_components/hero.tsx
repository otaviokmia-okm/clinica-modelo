'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  // LINK DA AGENDA (Cole o seu link do Google Agenda aqui)
  const linkAgenda = "https://calendar.google.com/calendar/u/0/appointments/schedules/...";

  return (
    <section className="relative w-full min-h-[95vh] bg-white overflow-hidden">
      
      {/* 1. Imagem de Fundo Dinâmica (PNG) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-modelo.png" // MUDADO PARA PNG AQUI
          alt="Modelo Lumina Aesthetics"
          fill
          className="object-cover object-center opacity-95" // Alta opacidade para impacto
          priority
        />
        {/* Overlay Dourado/Creme Suave: Esmaece para o lado esquerdo para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10" />
      </div>

      {/* 2. Conteúdo em Camadas (Z-Index alto para ficar por cima) */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[95vh] z-20">
        
        {/* Lado Esquerdo: Textos Profissionais e Dinâmicos */}
        <div className="flex flex-col space-y-10 py-28 lg:py-0">
          
          {/* Badge Decorativa com o Fuso Japonês */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.5em] uppercase">
              REVELE SUA LUZ INTERIOR
            </span>
          </div>
          
          {/* Título Refinado e Impactante */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-gray-950 leading-tight">
            Estética de <br />
            <span className="text-[#D4AF37] font-extralight italic relative">
              Luxo
              {/* Efeito Dinâmico: Linha Dourada Sublinhada Sutil */}
              <span className="absolute bottom-1 left-0 w-full h-[1px] bg-[#D4AF37]/40" />
            </span>
            <br />
            em Toyota.
          </h1>
          
          <p className="text-gray-700 text-xl max-w-xl leading-relaxed font-light">
            Especialistas em realçar sua melhor versão com tecnologia de ponta, 
            o rigor da hospitalidade japonesa e tratamentos exclusivos na Lumina Aesthetics.
          </p>

          {/* Botões Dinâmicos e Claron */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <a 
              href={linkAgenda}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-white px-12 py-5 text-center font-bold text-sm tracking-widest hover:bg-[#b8952d] transition-all shadow-xl active:scale-95 uppercase text-center"
            >
              AGENDAR CONSULTA
            </a>
            <a 
              href="#services"
              className="group flex items-center justify-center gap-3 border border-gray-300 text-gray-800 px-12 py-5 text-center font-bold text-sm tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all uppercase text-center"
            >
              VER TRATAMENTOS
              {/* Seta Dinâmica (Hover Effect) */}
              <span className="group-hover:translate-x-2 transition-transform text-lg">→</span>
            </a>
          </div>
        </div>

        {/* Lado Direito: Espaço vazio para não cobrir o rosto da modelo */}
        <div className="relative h-full hidden lg:block">
          {/* Sutil Efeito de Luz (Aura Oriental) no fundo para Dinamismo */}
          <div className="absolute top-[30%] right-[15%] w-[350px] h-[350px] bg-[#D4AF37] opacity-[0.06] rounded-full blur-3xl" />
        </div>

      </div>

      {/* 3. Efeito de Transição Suave no rodapé */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}