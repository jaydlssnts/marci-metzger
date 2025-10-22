export default function Location() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Our Office Location
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
      </p>

      <div className="w-full max-w-5xl h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.7677933135267!2d-116.005!3d36.208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8e1d8e3a4d5f9%3A0x77e6e4dcbf690f!2sPahrump%2C%20NV!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
