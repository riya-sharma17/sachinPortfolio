// "use client";
// import HeadingButton from "../ui/HeadingButton";
// import Image from "next/image";

// const Contact = () => {
//   return (
//     <div id="contact" className="bg-gray-background text-background h-full w-full flex flex-col justify-center items-center gap-10 md:px-[25vw] px-10 py-20">
//       <HeadingButton text="contact" />
//       <p className="description">
//         Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
//         finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
//         viverra facilisis ut ac est.
//       </p>
//       <Image src={"/separator.svg"} alt="separator" width={100} height={100} />
//       <form className="w-full flex flex-col gap-10 justify-center items-center">
//         <input
//           type="text"
//           className="border-l-4 border-b-4 border-transparent border-l-black border-b-black outline-none  p-3 md:w-2/3 w-full uppercase text-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition
//  focus:border-b-blue-500 focus:border-l-blue-500"
//           placeholder="Enter your email*"
//         />

//         <input
//           type="text"
//           className="border-l-4 border-b-4 border-transparent border-l-black border-b-black outline-none  p-3 md:w-2/3 w-full uppercase text-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition
//  focus:border-b-blue-500 focus:border-l-blue-500"
//           placeholder="Enter your email*"
//         />
//         <input
//           type="text"
//           className="border-l-4 border-b-4 border-transparent border-l-black border-b-black outline-none  p-3 md:w-2/3 w-full uppercase text-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition
//  focus:border-b-blue-500 focus:border-l-blue-500"
//           placeholder="Enter your email*"
//         />
//         <textarea
//           placeholder="Enter your message"
//           className="border-l-4 border-b-4 border-transparent border-l-black border-b-black outline-none  p-3 md:w-2/3 w-full uppercase text-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition
//  focus:border-b-blue-500 focus:border-l-blue-500"
//         />
//         <button className="font-montserrat uppercase border-l-2 border-r-2 px-5 font-semibold cursor-pointer">
//           SUBMIT 📮
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;


"use client";
import HeadingButton from "../ui/HeadingButton";
import Image from "next/image";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple WhatsApp redirect (works everywhere)
    window.open(
      "https://wa.me/917006825695?text=Hi, I want to contact you regarding your services",
      "_blank"
    );
  };

  return (
    <div
      id="contact"
      className="bg-gray-background text-background w-full flex flex-col justify-center items-center gap-10 md:px-[25vw] px-10 py-20"
    >
      <HeadingButton text="contact" />

      <p className="description text-center">
        Have a question about GST, income tax, or accounting services?
        Fill out the form below and I’ll get back to you as soon as possible.
      </p>

      <Image src="/separator.svg" alt="separator" width={100} height={20} />

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-10 justify-center items-center"
      >
        <input
          type="text"
          placeholder="Enter your name*"
          required
          className="border-l-4 border-b-4 border-l-black border-b-black outline-none p-3 md:w-2/3 w-full uppercase text-black placeholder-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition focus:border-b-blue-500 focus:border-l-blue-500"
        />

        <input
          type="email"
          placeholder="Enter your email*"
          required
          className="border-l-4 border-b-4 border-l-black border-b-black outline-none
             p-3 md:w-2/3 w-full text-black placeholder-[#8B8B8B]
             font-semibold hover:border-b-blue-500 hover:border-l-blue-500
             transition focus:border-b-blue-500 focus:border-l-blue-500"
        />

        <input
          type="tel"
          placeholder="Enter your phone number"
          className="border-l-4 border-b-4 border-l-black border-b-black outline-none p-3 md:w-2/3 w-full uppercase text-black placeholder-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition focus:border-b-blue-500 focus:border-l-blue-500"
        />

        <textarea
          placeholder="Enter your message"
          rows={4}
          className="border-l-4 border-b-4 border-l-black border-b-black outline-none p-3 md:w-2/3 w-full uppercase text-black placeholder-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition focus:border-b-blue-500 focus:border-l-blue-500"
        />

        <button
          type="submit"
          className="font-montserrat uppercase border-l-2 border-r-2 px-6 py-2 font-semibold cursor-pointer hover:text-blue-500 transition"
        >
          SUBMIT 📮
        </button>
      </form>
    </div>
  );
};

export default Contact;
