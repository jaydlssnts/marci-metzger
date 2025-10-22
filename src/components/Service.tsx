export default function Services() {
  return (
    <div className="flex justify-center px-4 py-20 bg-gradient-to-b from-[#fef6f6] via-[#f8f9fb] to-[#edf2f7]">
      <div className="flex flex-col items-center p-10 space-y-16 w-full max-w-[90%] bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-gray-900 tracking-wide">
          Our Services
        </h1>

        {/* Grid of services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center">
          {/* Service 1 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
            <img
              src="service1.webp"
              alt="Real Estate Done Right"
              className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-red-200"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Real Estate Done Right
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Nervous about your property adventure? Don’t be. Whether you're
              getting ready to buy or sell your residence, looking at investment
              properties, or just curious about the markets, our team ensures
              you get the best experience possible!
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
            <img
              src="service2.webp"
              alt="Commercial & Residential"
              className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-blue-200"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Commercial & Residential
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Large or small, condo or mansion, we can find it and get it at the
              price that's right. Fixer-uppers? Luxury? We can help with all of
              it! We live, work, and play in this community. Happy to help you
              find where to put your hard-earned dollars.
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
            <img
              src="service3.webp"
              alt="Rely on Expertise"
              className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-green-200"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Rely on Expertise
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              If you have questions about affordability, credit, or loan
              options, trust us to connect you with the right people to get the
              answers you need. We make sure you feel confident and educated
              every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
