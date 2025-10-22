import { Icon } from "@iconify/react";

export default function About() {
  return (
    <div className="min-h-screen flex justify-center px-4 py-20 text-center bg-gradient-to-b from-rose-100 via-white to-blue-100">
      <div className="flex flex-col items-center p-10 space-y-20 w-full max-w-5xl bg-white/60 backdrop-blur-md rounded-3xl shadow-lg">
        
        {/* INTRO SECTION */}
        <div className="flex flex-col items-center space-y-5">
          <p className="text-4xl md:text-5xl text-gray-800 font-bold">
            MARCI METZGER - THE RIDGE REALTY GROUP
          </p>
          <p className="text-lg text-gray-700">
            3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
          </p>
          <img
            className="rounded-full w-64 h-64 object-cover shadow-md border-4 border-white"
            src="portrait.jpeg"
            alt="marci metzger"
          />
        </div>

        {/* CONTACT SECTION */}
        <div className="flex flex-col items-center space-y-4 bg-gradient-to-r from-red-100 to-red-200 px-6 py-6 rounded-2xl shadow-md w-full sm:w-3/4">
          <div className="flex items-center justify-center space-x-3">
            <Icon className="text-red-700" icon="tabler:phone" width="26" height="26" />
            <p className="text-gray-800 text-lg font-medium">(206) 919-6886</p>
          </div>
          <p className="text-gray-700 font-medium">Open daily: <span className="text-gray-800">8:00 AM – 7:00 PM</span></p>
          <p className="text-sm text-gray-600 italic">
            Appointments outside office hours available upon request. Just call!
          </p>
        </div>

        {/* SOCIALS */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg font-medium text-gray-700 bg-gradient-to-r from-pink-100 to-pink-200 px-6 py-2 rounded-full shadow-sm">
            Get in touch on Social Media
          </p>
          <div className="flex items-center justify-center space-x-6">
            <Icon icon="logos:facebook" width="40" height="40" className="hover:scale-110 transition-transform duration-200" />
            <Icon icon="logos:instagram-icon" width="40" height="40" className="hover:scale-110 transition-transform duration-200" />
            <Icon icon="logos:linkedin-icon" width="40" height="40" className="hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
