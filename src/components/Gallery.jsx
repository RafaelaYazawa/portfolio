import Header from "./Header";
import projects from "../data/projects.json";
import {
  SiRubyonrails,
  SiStimulus,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFontawesome,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Gallery = () => {
  const stackIcons = {
    bootstrap: <SiBootstrap color="#8d12fd" size="28" />,
    fontAwesome: <SiFontawesome color="#538dd6" size="28" />,
    postgresql: <BiLogoPostgresql color="#2f6792" size="34" />,
    rails: <SiRubyonrails color="#d30102" size="32" />,
    react: <SiReact color="#57c4dc" size="28" />,
    stimulus: <SiStimulus color="#77e8b9" size="24" />,
    tailwindCSS: <SiTailwindcss color="#00bcff" size="28" />,
    typescript: <SiTypescript color="#2e78c8" size="28" />,
  };

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="
              relative
              overflow-hidden
              rounded-lg
              bg-gradient-to-r
              from-slate-950
              to-slate-800
              flex
              flex-col
            "
          >
            <img
              src={p.image}
              alt={p.title}
              className="
                w-full
                h-48
                sm:h-56
                lg:h-64
                object-cover
              "
            />

            <div className="py-3 px-4 flex-1">
              <h2 className="text-lg sm:text-xl font-semibold">{p.title}</h2>

              <p className="text-sm sm:text-base text-left md:text-right text-slate-300">
                {p.summary}
              </p>
            </div>

            <div
              className="
                px-4 pb-4
                text-sm sm:text-base
              "
            >
              <p>{p.description}</p>

              <h3 className="mt-4 text-base sm:text-lg font-semibold">
                Stacks:
              </h3>

              <div className="mt-2 flex flex-wrap gap-3">
                {p.stacks.map((iconKey, index) => (
                  <span key={index}>{stackIcons[iconKey]}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
