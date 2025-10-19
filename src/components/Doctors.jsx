import React from "react";
import doctor1 from "../../assets/doctor1.jpg";
import doctor2 from "../../assets/doctor2.jpg";
import doctor3 from "../../assets/doctor3.jpg";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ayesha Khan",
      specialty: "Cardiologist",
      description:
        "Expert in heart and blood vessel treatments with 10+ years of experience.",
      image: doctor1,
    },
    {
      id: 2,
      name: "Dr. Ahmed Raza",
      specialty: "Dermatologist",
      description:
        "Specializes in skincare, acne treatment, and cosmetic dermatology.",
      image: doctor2,
    },
    {
      id: 3,
      name: "Dr. Sana Malik",
      specialty: "Nutritionist",
      description:
        "Helps patients improve their health through personalized diet plans.",
      image: doctor3,
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
          Meet Our Doctors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-blue-100"
              />
              <h3 className="text-xl font-semibold text-blue-700">
                {doctor.name}
              </h3>
              <p className="text-blue-500 mb-3">{doctor.specialty}</p>
              <p className="text-gray-600">{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
