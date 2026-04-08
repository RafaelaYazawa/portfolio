import { Link } from "react-router-dom";

const Introduction = () => {
  const contents = [
    { label: "About", path: "about" },
    { label: "Experience", path: "experience" },
    { label: "Projects", path: "projects" },
  ];

  return (
    <div className="safe-screen bg-[url('/bg/evening.jpg')] bg-cover bg-center text-white overflow-x-hidden">
      <div className="align-center flex flex-col md:flex-row min-h-screen justify-between mx-4 md:mx-8 relative">
        <div className=" p-6 md:p-8 md:w-1/2 w-full">
          <h1 className="mx-4 md:px-8 px-4 text-[#FBAF00] text-3xl md:text-4xl font-semibold">
            rafaela yazawa
          </h1>

          <p className="leading-relaxed px-4 md:px-8 pt-3 text-base sm:text-sm md:text-lg lg:text-xl">
            hi, nice to meet you! I am a brazilian girl living in japan looking
            for new opportunities. I am a little bit shy and an introvert. I am
            a future web developer, and I hope to learn much more as time passes
            by.
          </p>

          <div className="absolute bottom-16 md:bottom-20 left-1/4 md:left-1/3 opacity-25 -skew-6 w-32 md:w-48 lg:w-full pointer-events-none">
            <img src="/cloud.png" alt="" className="w-full" />
          </div>
        </div>

        <div className="flex items-center justify-center my-8 md:mt-0 w-full md:w-1/2">
          <ul className="px-4 text-center md:text-left">
            {contents.map((c, index) => {
              return (
                <li className="list-none py-2 md:py-4 text-2xl sm:text-2xl md:text-3xl hover:text-[#FBAF00] transition">
                  <Link to={`/${c.path}`} key={index}>
                    {c.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
