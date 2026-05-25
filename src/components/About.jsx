export default function About() {
  const pillars = [
    {
      title: "Analog Warmth",
      subtitle: "Custom Circuits & Soul",
      description: "Discrete analog pathways, hand-tuned active filters, and custom wave-shaping circuitry that inject organic harmonics and analog weight into every frequency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>
      )
    },
    {
      title: "Digital Precision",
      subtitle: "ARM DSP & Stable Clocks",
      description: "Cutting-edge ARM-based microcontrollers, ultra-low latency DAC/ADC converters, and high-frequency digital oscillators for precise modulation and reliable DSP control.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      )
    },
    {
      title: "Artisanal Quality",
      subtitle: "Hand-crafted in our Lab",
      description: "Every module is hand-soldered, features premium anodized aluminum control panels, high-grade knobs with tactile response, and undergoes rigorous signal testing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-zinc-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766l.002-.001a11.601 11.601 0 0 1 5.38-.992m-9.086 4.79A11.599 11.599 0 0 0 14.17 9.22m-2.75 5.95-3.03-2.497A1.652 1.652 0 0 0 6.25 12l-5.88 5.88A2.652 2.652 0 0 0 4.12 21.6l5.88-5.88c.39-.39.51-.975.38-1.48ZM13.877 18.89l.704-2.013a3.75 3.75 0 0 0-.222-2.75l-.23-.44a1.5 1.5 0 0 0-1.13-.73l-2.072-.259a9 9 0 0 0-4.78 1.48z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
      {/* Luz ambiental sutil en el fondo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-zinc-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-lg relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase block mb-3">
            Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mb-6 tracking-tight">
            Analog Soul. Digital Precision.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Noise & Waves is a custom boutique synthesizer workshop. We design and build 
            modular hardware, high-fidelity devices, and signal processors that bridge 
            the gap between vintage acoustic warmth and rock-solid modern performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="p-8 bg-zinc-900/20 border border-zinc-800/60 rounded-lg hover:border-zinc-700/80 transition-all duration-300 group hover:bg-zinc-900/30"
            >
              <div className="w-10 h-10 rounded-md bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-center mb-6 group-hover:border-zinc-700/80 transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                {pillar.title}
              </h3>
              <span className="text-xs font-medium text-zinc-500 block mb-4 tracking-wide uppercase">
                {pillar.subtitle}
              </span>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
