import logo from '../assets/logo-n&w.png';

export default function Header() {
  return (
    <header className="w-full bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <nav className="container-lg flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Noise & Waves" className="h-10 w-10" />
          <span className="font-bold text-xl text-white">Noise & Waves</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#features" className="text-gray-400 hover:text-white transition">
            Features
          </a>
          <a href="#about" className="text-gray-400 hover:text-white transition">
            About
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white transition">
            Contact
          </a>
        </div>
        <button className="btn-primary">Get Started</button>
      </nav>
    </header>
  );
}
