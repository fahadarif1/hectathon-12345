import React from "react";
import consultationIcon from "../../assets/consultation.png";
import labIcon from "../../assets/lab.png";
import tipsIcon from "../../assets/tips.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Online Consultation",
      description:
        "Talk to certified doctors anytime, anywhere through our secure online platform.",
      icon: consultationIcon,
    },
    {
      id: 2,
      title: "Lab Test at Home",
      description:
        "Book lab tests and get samples collected right from your home by professionals.",
      icon: labIcon,
    },
    {
      id: 3,
      title: "Health & Fitness Tips",
      description:
        "Get daily expert tips to stay fit, eat healthy, and maintain your overall wellness.",
      icon: tipsIcon,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
          Our Healthcare Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

