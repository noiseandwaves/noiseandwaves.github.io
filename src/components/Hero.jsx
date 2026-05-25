export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center">
      <div className="container-lg">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Innovative Audio Products
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Create, innovate, and express with our cutting-edge modular synthesizers and audio hardware solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">
              Explore Products
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
