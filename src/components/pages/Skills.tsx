// "use client";
// import HeadingButton from "../ui/HeadingButton";
// import SkillCard from "../ui/SkillCard";

// const frontendSkills = [
//   { name: "HTML5", icon: "/html.svg" },
//   { name: "CSS3", icon: "/css.svg" },
//   { name: "JavaScript", icon: "/js.svg" },
//   { name: "TypeScript", icon: "/typescript.svg" },
//   { name: "React", icon: "/re.svg" },
//   { name: "Next.js", icon: "/next-js.svg" },
//   { name: "Tailwind CSS", icon: "/tailwind.svg" },
// ];

// const backendSkills = [
//   { name: "Node.js", icon: "/nodejs.svg" },
//   { name: "Express.js", icon: "/express-js.svg" },
//   { name: "MongoDB", icon: "/mongodb-icon.svg" },
//   { name: "NestJS", icon: "/nest js.png" },
//   { name: "Socket.io", icon: "/socket.png" },
// ];

// const toolsSkills = [
//   { name: "GSAP", icon: "/gsap.svg" },
//   { name: "Git", icon: "/git.svg" },
//   { name: "Java", icon: "/java.svg" },
//   { name: "Python", icon: "/cpp.svg" },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="w-full bg-gray-background md:px-[16vw] px-6 py-14 flex flex-col items-center gap-10"
//     >
//       <HeadingButton text="Skills" />

//       <div className="w-full flex flex-col gap-10">
//         <SkillCard heading="Frontend" usingNowSkills={frontendSkills} />
//         <SkillCard heading="Backend & APIs" usingNowSkills={backendSkills} />
//         <SkillCard heading="Tools & Libraries" usingNowSkills={toolsSkills} />
//       </div>
//     </section>
//   );
// };

// export default Skills;

"use client";
import HeadingButton from "../ui/HeadingButton";
import SkillCard from "../ui/SkillCard";

const skills = [
  { name: "GST & Income Tax Filing", icon: "/gstt.jpeg" },
  { name: "Tally & BUSY Accounting", icon: "/busy.jpg" },
  { name: "UDYAM Registration", icon: "/udyam.png" },
  { name: "Client Consultation", icon: "/client.webp" },
  { name: "Business Compliance", icon: "/comp.avif" },
  { name: "Financial Reporting", icon: "/finance.jpg" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-gray-background md:px-[16vw] px-6 py-14 flex flex-col items-center gap-10"
    >
      <HeadingButton text="Services & Expertise" />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            heading={skill.name}
            usingNowSkills={[{ name: skill.name, icon: skill.icon }]}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
