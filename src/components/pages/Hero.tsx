// "use client";
// import { HeroIcons, mobileIcons } from "@/utils/constants";
// import Image from "next/image";
// import React from "react";

// const Hero = () => {
//   return (
//     <div className="hero-container">
//       <div className="hero-left">
//         <h2 className="hero-subheading">Hi, I am</h2>
//         <div className="hero-name-container">
//           <h1 className="hero-heading">Sachin Sharma</h1>
//           <p className="hero-title">Software Engineer / FullStack Developer</p>
//           {/* <p className="text-xs text-amber-800 font-medium italic z-50">
//             Portfolio under development
//           </p> */}
//         </div>
//         <div className="hero-icons">
//           {HeroIcons.map((icon, index: number) => (
//             <a
//               href={icon.link}
//               key={index}
//               className="hero-icon"
//               target={icon.link.startsWith("http") ? "_blank" : "_self"}
//               rel="noopener noreferrer"
//             >
//               <Image
//                 src={icon.iconUrl}
//                 height={25}
//                 width={25}
//                 alt={icon.altText}
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   target.src = "/fallback-icon.svg";
//                   target.alt = "Fallback Icon";
//                 }}
//               />
//             </a>
//           ))}
//         </div>
//         <div className="mobile-skew-container">
//           <div className="mobile-skew"></div>
//         </div>
//         <div className="mobile-skew-container-overlay">
//           <div className="mobile-skew-overlay"></div>
//         </div>
//         <div className="mobile-hero-icons">
//           <div className="mobil-hero-icons-container">
//             {mobileIcons.map((icon: string, index: number) => {
//               return (
//                 <span key={index} className="hero-icon">
//                   <Image src={icon} height={25} width={25} alt="social icon" />
//                 </span>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <div className="hero-right">
//         <div className="hero-bg-skew-container">
//           <div className="hero-bg-skew" />
//         </div>
//         <div className="hero-image-wrapper">
//           <Image
//             // src={"/user-pic.svg"}
//             // src={"/krishna-profile.png"}
//             // src={"/krishna-profile-removebg-preview.png"}
//             // src={"/profile-pic.png"}
//             src={"/profile-picture.jpeg"}
//             alt="User Picture"
//             width={400}
//             height={400}
//             className="hero-image "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// "use client";
// import Image from "next/image";
// import React from "react";

// const Hero = () => {
//   return (
//     <div className="hero-container bg-[#F3F4F6]">
//       {/* LEFT */}
//       <div className="hero-left">
//         <h2 className="hero-subheading text-gray-700">
//           Hi, I am
//         </h2>

//         <div className="hero-name-container">
//           <h1 className="hero-heading text-gray-900">
//             Sachin Sharma
//           </h1>

//           <p className="hero-title text-gray-800 font-medium">
//             Accountant | GST & Income Tax Consultant
//           </p>

//           <p className="text-sm mt-3 text-gray-600 max-w-md">
//             Helping businesses stay compliant, accurate, and stress-free
//             with reliable accounting and taxation services.
//           </p>
//         </div>

//         {/* SERVICES */}
//         <div className="mt-5 text-sm space-y-2 text-gray-700">
//           <p>✔ GST & Income Tax Filing</p>
//           <p>✔ GST & UDYAM Registration</p>
//           <p>✔ Tally & BUSY Accounting</p>
//         </div>

//         {/* CTA BUTTONS */}
//         <div className="mt-7 flex gap-4">
//           <a
//             href="tel:+917006825695"
//             className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 transition text-white rounded-md text-sm font-semibold shadow"
//           >
//             Call Now
//           </a>

//           <a
//             href="https://wa.me/917006825695"
//             target="_blank"
//             className="px-6 py-2.5 border border-amber-600 text-amber-700 hover:bg-amber-50 transition rounded-md text-sm font-semibold"
//           >
//             WhatsApp
//           </a>
//         </div>

//         {/* LOCATION */}
//         <p className="text-xs mt-4 text-gray-500">
//          Bari Brahmana, Jammu & Kashmir
//         </p>

//         {/* MOBILE DECORATION (UNCHANGED) */}
//         <div className="mobile-skew-container">
//           <div className="mobile-skew"></div>
//         </div>
//         <div className="mobile-skew-container-overlay">
//           <div className="mobile-skew-overlay"></div>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="hero-right">
//         <div className="hero-bg-skew-container">
//           <div className="hero-bg-skew bg-amber-600/10" />
//         </div>

//         <div className="hero-image-wrapper">
//           <Image
//             src="/sachinn.png"
//             alt="Sachin Sharma"
//             width={400}
//             height={400}
//             className="hero-image rounded-xl shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-24 md:pt-0">

      {/* RIGHT SKEW BACKGROUND */}
      <div className="absolute top-0 right-0 w-[55%] h-full hidden md:block">
        <div className="absolute inset-0 bg-black -skew-x-6 origin-top-right rounded-l-[3rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 min-h-screen flex flex-col md:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-gray-300 text-lg">Hi, I am</h2>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Sachin Sharma
          </h1>

          <p className="mt-2 text-gray-200 text-lg">
            Accountant | GST & Income Tax Consultant
          </p>

          <p className="mt-4 text-sm text-gray-400 max-w-md mx-auto md:mx-0">
            Helping businesses stay compliant, accurate, and stress-free
            with reliable accounting and taxation services.
          </p>

          {/* SERVICES */}
          <div className="mt-6 space-y-2 text-sm text-gray-300">
            <p>✔ GST & Income Tax Filing</p>
            <p>✔ GST & UDYAM Registration</p>
            <p>✔ Tally & BUSY Accounting</p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="tel:+917006825695"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 transition text-white rounded-md text-sm font-semibold shadow text-center"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917006825695"
              target="_blank"
              className="px-6 py-3 border border-amber-600 text-amber-400 hover:bg-amber-600/10 transition rounded-md text-sm font-semibold text-center"
            >
              WhatsApp
            </a>
          </div>

          <p className="text-xs mt-5 text-gray-500">
            Bari Brahmana, Jammu & Kashmir
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="relative bg-black rounded-3xl p-6 shadow-2xl">
            <Image
              src="/sachinn.png"
              alt="Sachin Sharma"
              width={420}
              height={420}
              priority
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
