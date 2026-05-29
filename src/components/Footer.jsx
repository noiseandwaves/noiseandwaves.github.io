import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logonnandwtext-white.svg';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="container-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Columna Logo */}
          <div>
            <div className="flex items-center mb-5">
              <img src={logo} alt="Noise & Waves" className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Columna Producto */}
          <div>
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">
              {t('footer.products')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-zinc-200 transition-colors">{t('footer.productsList.synthesizers')}</a></li>
              <li><a href="#features" className="hover:text-zinc-200 transition-colors">{t('footer.productsList.modules')}</a></li>
              <li><a href="#features" className="hover:text-zinc-200 transition-colors">{t('footer.productsList.processors')}</a></li>
            </ul>
          </div>

          {/* Columna Conectar */}
          <div>
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-4">
              {t('footer.connect')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-zinc-200 transition-colors">{t('footer.connectList.github')}</a></li>
              <li><a href="#" className="hover:text-zinc-200 transition-colors">{t('footer.connectList.discord')}</a></li>
              <li><a href="mailto:hello@noiseandwaves.com" className="hover:text-zinc-200 transition-colors">{t('footer.connectList.support')}</a></li>
            </ul>
          </div>

        </div>

        {/* Derechos de Autor */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>{t('footer.copyright', { year: currentYear })}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

