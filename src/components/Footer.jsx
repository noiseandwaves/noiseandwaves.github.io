import logo from '../assets/logo-n&w.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="container-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Noise & Waves" className="h-8 w-8" />
              <h3 className="text-lg font-bold">Noise & Waves</h3>
            </div>
            <p className="text-gray-400">
              Creating the future of audio technology
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Synthesizers</a></li>
              <li><a href="#" className="hover:text-white transition">Modules</a></li>
              <li><a href="#" className="hover:text-white transition">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Noise & Waves. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
