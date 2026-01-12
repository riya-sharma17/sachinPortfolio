"use client";
import Image from "next/image";

interface SkillCardProps {
  heading: string;
  usingNowSkills: { name: string; icon: string }[];
}

const SkillCard = ({ heading, usingNowSkills }: SkillCardProps) => {
  return (
    <div
      className="
        group
        w-full
        rounded-2xl
        bg-gradient-to-br from-[#111] to-[#1a1a1a]
        p-10
        flex flex-col items-center gap-6
        border border-white/5
        transition-all duration-300
        hover:-translate-y-3
        hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
        hover:border-yellow-400/30
      "
    >
      {/* ICON */}
      <div
        className="
    relative
    w-28 h-28
    rounded-2xl
    bg-black/30
    flex items-center justify-center
    overflow-hidden
    transition-all duration-300
    group-hover:scale-105
  "
      >

        <Image
          src={usingNowSkills[0].icon}
          alt={heading}
          fill
          className="object-contain p-4"
        />
      </div>


      {/* ACCENT LINE */}
      <div className="w-8 h-[2px] bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-14" />

      <h3 className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.35em] text-gray-200 text-center">

        {heading.toUpperCase()}
      </h3>

    </div>
  );
};

export default SkillCard;
