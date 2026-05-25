import logo from '../assets/logo-n&w.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="container-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Columna Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Noise & Waves" className="h-7 w-7 filter brightness-90" />
              <h3 className="text-base font-bold text-zinc-200">Noise & Waves</h3>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Creating the future of audio synthesis and modular hardware. Designed with love in Medellín, Colombia.
            </p>
          </div>

          {/* Columna Producto */}
          <div>
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-zinc-200 transition-colors">Synthesizers</a></li>
              <li><a href="#features" className="hover:text-zinc-200 transition-colors">Boutique Modules</a></li>
              <li><a href="#features" className="hover:text-zinc-200 transition-colors">Signal Processors</a></li>
            </ul>
          </div>

          {/* Columna Conectar */}
          <div>
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-zinc-200 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-zinc-200 transition-colors">Discord Community</a></li>
              <li><a href="mailto:hello@noiseandwaves.com" className="hover:text-zinc-200 transition-colors">Direct Support</a></li>
            </ul>
          </div>

        </div>

        {/* Derechos de Autor */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>&copy; {currentYear} Noise & Waves. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
