import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Simular envío a servidor (e.g. 1.5s delay)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-900/10 border-t border-zinc-900">
      {/* Luz ambiental sutil */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-zinc-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-lg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Columna de Información */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase block mb-3">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mb-6 tracking-tight">
              Connect With the Lab.
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Have questions about our modular synthesizer designs, need support with a module,
              or want to collaborate on a custom hardware project? Write us a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block">General & Technical Email</span>
                  <a href="mailto:noiseandwaves@gmail.com" className="text-sm font-semibold text-zinc-200 hover:text-white transition">
                    noiseandwaves@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block">Headquarters</span>
                  <span className="text-sm font-semibold text-zinc-200">
                    Medellín, Colombia (EST. 2026)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-900 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 led-glow-blue inline-block"></span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Lab status: Active and designing</span>
            </div>
          </div>

          {/* Columna de Formulario */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-zinc-900/10 border border-zinc-800/60 rounded-xl">

              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500 flex items-center justify-center mx-auto mb-6 text-blue-400 led-glow-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-2">Message Transmitted</h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto mb-8">
                    Your transmission has been received in our audio synthesis lab. We will respond within 48 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary py-2 px-6"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Campo Nombre */}
                  <div>
                    <label htmlFor="name" className="text-xs font-bold text-zinc-400 block mb-2 uppercase tracking-wider">
                      Name / Signal Tag
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sine Wave"
                      disabled={status === 'submitting'}
                      className={`w-full px-4 py-3 bg-zinc-950 border ${errors.name ? 'border-red-500/70' : 'border-zinc-800/80 hover:border-zinc-700/80'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-zinc-200 rounded-md text-sm outline-none transition-all duration-300`}
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Campo Email */}
                  <div>
                    <label htmlFor="email" className="text-xs font-bold text-zinc-400 block mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. operator@freq.com"
                      disabled={status === 'submitting'}
                      className={`w-full px-4 py-3 bg-zinc-950 border ${errors.email ? 'border-red-500/70' : 'border-zinc-800/80 hover:border-zinc-700/80'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-zinc-200 rounded-md text-sm outline-none transition-all duration-300`}
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Campo Mensaje */}
                  <div>
                    <label htmlFor="message" className="text-xs font-bold text-zinc-400 block mb-2 uppercase tracking-wider">
                      Transmission / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="State your technical inquiries or feedback here..."
                      disabled={status === 'submitting'}
                      className={`w-full px-4 py-3 bg-zinc-950 border ${errors.message ? 'border-red-500/70' : 'border-zinc-800/80 hover:border-zinc-700/80'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-zinc-200 rounded-md text-sm outline-none transition-all duration-300 resize-none`}
                    />
                    {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Botón de Envío */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-3 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitting...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
