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
    <div className="hero-container bg-[#F3F4F6]">
      {/* LEFT */}
      <div className="hero-left">
        {/* SHOW ON BOTH */}
        <h2 className="hero-subheading text-gray-700">
          Hi, I am
        </h2>

        <div className="hero-name-container">
          <h1 className="hero-heading text-gray-900">
            Sachin Sharma
          </h1>

          <p className="hero-title text-gray-800 font-medium">
            Accountant | GST & Income Tax Consultant
          </p>
        </div>

        {/* DESKTOP ONLY CONTENT */}
        <p className="text-sm mt-3 text-gray-600 max-w-md hidden md:block">
          Helping businesses stay compliant, accurate, and stress-free
          with reliable accounting and taxation services.
        </p>

        <div className="mt-5 text-sm space-y-2 text-gray-700 hidden md:block">
          <p>✔ GST & Income Tax Filing</p>
          <p>✔ GST & UDYAM Registration</p>
          <p>✔ Tally & BUSY Accounting</p>
        </div>

        {/* CTA BUTTONS – SHOW ON BOTH */}
        <div className="mt-7 flex gap-4">
          <a
            href="tel:+917006825695"
            className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 transition text-white rounded-md text-sm font-semibold shadow"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917006825695"
            target="_blank"
            className="px-6 py-2.5 border border-amber-600 text-amber-700 hover:bg-amber-50 transition rounded-md text-sm font-semibold"
          >
            WhatsApp
          </a>
        </div>

        {/* LOCATION – DESKTOP ONLY */}
        <p className="text-xs mt-4 text-gray-500 hidden md:block">
          Bari Brahmana, Jammu & Kashmir
        </p>

        {/* MOBILE DECORATION (UNCHANGED) */}
        <div className="mobile-skew-container">
          <div className="mobile-skew"></div>
        </div>
        <div className="mobile-skew-container-overlay">
          <div className="mobile-skew-overlay"></div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="hero-bg-skew-container">
          <div className="hero-bg-skew bg-amber-600/10" />
        </div>

        <div className="hero-image-wrapper">
          <Image
            src="/sachinn.png"
            alt="Sachin Sharma"
            width={400}
            height={400}
            className="hero-image rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
