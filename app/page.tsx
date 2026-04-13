import Header from './_components/header';
import Hero from './_components/hero'; // Importamos o Hero aqui

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF5]">
      <Header />
      <Hero />
      {/* As próximas seções (Serviços, FAQ) virão aqui embaixo */}
    </main>
  );
}