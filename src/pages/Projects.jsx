import Gallery from "../components/Gallery";
import Header from "../components/Header";

const Projects = () => {
  const textShadow = {
    textShadow: "0 3px 8px rgba(0, 0, 0, 0.55)",
  };

  return (
    <div
      className="
        bg-[url(blue.jpg)]
        bg-center
        bg-cover
        bg-no-repeat
        min-h-screen
      "
    >
      <Header />

      <div className="px-4 sm:px-8 lg:px-16 pt-8">
        <h1
          className="
            text-[#FBAF00]
            text-3xl
            sm:text-4xl
            lg:text-5xl
            mb-6
          "
          style={textShadow}
        >
          Projects
        </h1>

        <div className="pb-8">
          <Gallery />
          <div className="mt-12 md:mt-16">
            <p
              className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-light
              italic
              text-gray-200
              tracking-wide
            "
            >
              More coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
