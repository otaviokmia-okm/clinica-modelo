'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { question: "Quais são as formas de pagamento?", answer: "Aceitamos dinheiro, cartões de crédito e PayPay para sua maior comodidade." },
  { question: "Onde a clínica está localizada?", answer: "Estamos localizados no coração de Toyota City, Aichi-ken, com fácil acesso." },
  { question: "Como faço para agendar?", answer: "O agendamento pode ser feito diretamente pelo nosso WhatsApp ou pelo chatbot aqui no site." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-center text-3xl font-light text-slate-800 mb-12 tracking-widest uppercase">Dúvidas Comuns</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm">
              <button 
                className="w-full p-6 flex justify-between items-center text-left"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span className="font-medium text-slate-700 tracking-wide">{faq.question}</span>
                {open === index ? <ChevronUp className="text-[#D4AF37]" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <div className={`transition-all duration-300 ${open === index ? 'max-h-40 p-6 pt-0' : 'max-h-0'}`}>
                <p className="text-slate-600 font-light text-sm border-t border-slate-50 pt-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}