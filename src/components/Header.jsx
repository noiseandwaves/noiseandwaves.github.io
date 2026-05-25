import { useState, useEffect } from 'react';
import logo from '../assets/logo-n&w.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Añadir sombra/borde al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
        : 'bg-zinc-950/50 backdrop-blur-sm border-b border-zinc-950'
    }`}>
      <nav className="container-lg flex items-center justify-between h-16">
        
        {/* Logotipo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src={logo} alt="Noise & Waves" className="h-8 w-8 filter brightness-95 group-hover:brightness-100 transition-all duration-300" />
          <span className="font-bold text-lg text-zinc-100 tracking-tight group-hover:text-white transition-colors duration-300">
            Noise & Waves
          </span>
        </a>

        {/* Enlaces Escritorio */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-xs font-semibold tracking-wider text-zinc-400 hover:text-zinc-100 uppercase transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Features
          </a>
          <a href="#about" className="text-xs font-semibold tracking-wider text-zinc-400 hover:text-zinc-100 uppercase transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            About
          </a>
          <a href="#contact" className="text-xs font-semibold tracking-wider text-zinc-400 hover:text-zinc-100 uppercase transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </a>
        </div>

        {/* Botón Acción Escritorio */}
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </div>

        {/* Botón Hamburguesa Móvil */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

      </nav>

      {/* Menú Desplegable Móvil */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-zinc-900 ${
        mobileMenuOpen ? 'max-h-60 opacity-100 bg-zinc-950/95 backdrop-blur-md' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-6 py-6 space-y-4 flex flex-col">
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider text-zinc-400 hover:text-white uppercase transition-colors"
          >
            Features
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider text-zinc-400 hover:text-white uppercase transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider text-zinc-400 hover:text-white uppercase transition-colors"
          >
            Contact
          </a>
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary text-center w-full block mt-2"
          >
            Get in Touch
          </a>
        </div>
      </div>

    </header>
  );
}
