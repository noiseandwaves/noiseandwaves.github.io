import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section className="min-h-[85vh] relative flex items-center overflow-hidden bg-zinc-950 audio-grid py-20">
      
      {/* Luz LED ambiental gélida en el fondo derecho */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Osciloscopio Vectorial Animado de Fondo */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-35 lg:opacity-60 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <svg className="w-[200%] h-64 text-blue-500/30 oscilloscope-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="none">
          <path 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4 4"
            d="M0,160 C120,80 240,240 360,160 C480,80 600,240 720,160 C840,80 960,240 1080,160 C1200,80 1320,240 1440,160 L2880,160"
          />
          <path 
            stroke="currentColor" 
            strokeWidth="3.5" 
            className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            d="M0,160 C120,40 240,280 360,160 C480,40 600,280 720,160 C840,40 960,280 1080,160 C1200,40 1320,280 1440,160 C1560,40 1680,280 1800,160 C1920,40 2040,280 2160,160 C2280,40 2400,280 2520,160 C2640,40 2760,280 2880,160"
          />
        </svg>
      </div>

      <div className="container-lg relative z-10 w-full">
        <div className="max-w-2xl">
          
          {/* Badge LED de Estado de Laboratorio */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 led-glow-blue animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              {t('hero.badge')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-100 mb-6 leading-[1.1] tracking-tight">
            {locale === 'es' ? (
              <>
                {t('hero.title')} <br className="hidden sm:inline" />
                <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">{t('hero.titleInnovative')}</span>
              </>
            ) : (
              <>
                {t('hero.titleInnovative')} <br className="hidden sm:inline" />
                <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">{t('hero.title')}</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-normal max-w-xl">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a href="#features" className="btn-primary py-3 px-8 text-center">
              {t('hero.ctaExplore')}
            </a>
            <a href="#about" className="btn-secondary py-3 px-8 text-center">
              {t('hero.ctaPhilosophy')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

