export default function Footer() {
    return (
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-light tracking-[0.3em] uppercase mb-6">Lumina</h3>
            <p className="text-slate-400 text-sm font-light">Elevando sua autoestima através de cuidados personalizados e tecnologia de ponta.</p>
          </div>
          <div>
            <h4 className="text-[#D4AF37] font-medium uppercase text-xs tracking-widest mb-6">Localização</h4>
            <p className="text-slate-400 text-sm font-light leading-relaxed">Toyota-shi, Aichi-ken<br />Japão</p>
          </div>
          <div>
            <h4 className="text-[#D4AF37] font-medium uppercase text-xs tracking-widest mb-6">Contato</h4>
            <p className="text-slate-400 text-sm font-light italic">WhatsApp: +81 90-5452-1904</p>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-[10px] text-slate-500 tracking-[0.2em] uppercase">
          © 2026 Lumina Aesthetics - Toyota, Japan.
        </div>
      </footer>
    );
  }