export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-lg flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
          <span className="font-bold text-xl">Noise & Waves</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
            Features
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </a>
        </div>
        <button className="btn-primary">Get Started</button>
      </nav>
    </header>
  );
}
