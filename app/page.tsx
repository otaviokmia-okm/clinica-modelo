import Navbar from './_components/navbar';
import Hero from './_components/hero';
import Services from './_components/services';
import FAQ from './_components/faq';
import Footer from './_components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Suas seções originais */}
      <Hero />

      {/* Novas seções integradas */}
      <Services />
      <FAQ />
      
      <Footer />

      {/* Botão de WhatsApp flutuante */}
      <a
        href="https://wa.me/819054521904" // Altere para o número correto
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.893 11.891-2.046 0-4.052-.523-5.825-1.516l-6.168 1.634zm6.749-3.41c1.559.924 3.284 1.411 5.048 1.411 5.426 0 9.843-4.416 9.843-9.841 0-2.628-1.023-5.1-2.88-6.958-1.856-1.857-4.329-2.879-6.957-2.879-5.429 0-9.843 4.415-9.843 9.841 0 1.83.51 3.611 1.473 5.176l-1.01 3.691 3.791-.992-.469-.25z"/>
        </svg>
      </a>
    </main>
  );
}