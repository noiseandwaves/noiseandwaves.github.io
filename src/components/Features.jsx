export default function Features() {
  const features = [
    {
      title: "Modular Design",
      description: "Fully modular architecture for endless creative possibilities",
      icon: "🎛️"
    },
    {
      title: "High Fidelity",
      description: "Crystal clear sound with professional-grade components",
      icon: "🔊"
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing setup",
      icon: "🔌"
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-lg">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
