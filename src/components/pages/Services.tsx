"use client";

import { services } from "@/utils/constants";
import { PinContainer } from "../ui/3dPin";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="py-20 md:px-20">
      <h1 className="heading">
        Professional <span className="text-purple">Services</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {services.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[28rem] h-[22rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={item.title}>
              {/* IMAGE */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] mb-8">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>

                <img
                  src={item.icon}
                  alt={item.title}
                  className="object-cover"
                  // className="z-10 absolute w-20 h-20"
                />
              </div>

              {/* TITLE */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-white">
                {item.title}
              </h1>

              {/* DESCRIPTION */}
              <p
                className="lg:text-base font-light text-sm mt-3 text-gray-300"
              >
                {item.des}
              </p>

              {/* CTA */}
              <div className="flex justify-end items-center mt-6">
                <a
                href="https://wa.me/917006825695"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-auto text-purple text-sm hover:underline"
              >
                Contact for Service
                <Image src="/Arrow.svg" width={12} height={12} alt="arrow" />
              </a>
{/* 
                <Image
                  src={"/Arrow.svg"}
                  height={10}
                  width={10}
                  className="mx-2"
                  alt="arrow"
                /> */}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

// "use client";

// import { services } from "@/utils/constants";
// import Image from "next/image";

// const Services = () => {
//   return (
//     <section id="services" className="py-20 px-6 md:px-20">
//       <h1 className="heading text-center mb-16">
//         Professional <span className="text-purple">Services</span>
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//         {services.map((item) => (
//           <div
//             key={item.id}
//             className="bg-[#0b0f1a] rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
//           >
//             {/* IMAGE */}
//             <div className="relative w-full h-48">
//               <Image
//                 src={item.icon}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="p-6 flex flex-col h-[260px]">
//               <h2 className="text-xl font-semibold text-white">
//                 {item.title}
//               </h2>

//               <p className="text-sm text-gray-300 mt-3 leading-relaxed">
//                 {item.des}
//               </p>
//               <a
//                 href="https://wa.me/917006825695"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 mt-auto text-purple text-sm hover:underline"
//               >
//                 Contact for Service
//                 <Image src="/Arrow.svg" width={12} height={12} alt="arrow" />
//               </a>

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
