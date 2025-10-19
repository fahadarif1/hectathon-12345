import React from "react";
import heroImg from "../../assets/doctor-banner.png"; // apni image ka path yahan lagao

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
            Your Health, <br />
            <span className="text-blue-500">Our Priority</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Get trusted healthcare advice, connect with certified doctors, 
            and book your appointments online — anytime, anywhere.
          </p>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={heroImg}
            alt="Doctor"
            className="w-[90%] md:w-[80%] rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;