import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      model: "MD-01",
      title: t('features.modules.md01.title'),
      subtitle: t('features.modules.md01.subtitle'),
      description: t('features.modules.md01.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
        </svg>
      )
    },
    {
      model: "HF-02",
      title: t('features.modules.hf02.title'),
      subtitle: t('features.modules.hf02.subtitle'),
      description: t('features.modules.hf02.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M12 18.75V21m-4.72-4.72 1.06-1.06m7.32-7.32 1.06-1.06M12 3v2.25m-4.72 2.11L8.34 8.42m7.32 7.32 1.06 1.06M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
        </svg>
      )
    },
    {
      model: "IN-03",
      title: t('features.modules.in03.title'),
      subtitle: t('features.modules.in03.subtitle'),
      description: t('features.modules.in03.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      )
    },
  ];

  return (
    <section id="features" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container-lg">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase block mb-3">
            {t('features.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            {t('features.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-zinc-900/10 border border-zinc-800/50 rounded-xl hover:border-zinc-700/70 hover:bg-zinc-900/20 transition-all duration-300 relative group flex flex-col justify-between min-h-[300px]"
            >
              
              {/* LED de estado de módulo (decorativo/interactivo) */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  {feature.model}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 group-hover:bg-blue-400 group-hover:led-glow-blue transition-all duration-300"></span>
              </div>

              <div>
                {/* Icono del Módulo */}
                <div className="w-9 h-9 rounded-md bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-zinc-700 transition-colors duration-300">
                  {feature.icon}
                </div>

                {/* Título de la Especificación */}
                <h3 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <span className="text-[10px] font-semibold text-zinc-500 block mb-4 tracking-wider uppercase">
                  {feature.subtitle}
                </span>
                
                {/* Descripción Técnica */}
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

