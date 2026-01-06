const ExperienceSection = ({ title, children }) => {
  return (
    <section className="mb-10 sm:mb-14">
      <div className="bg-black/40 backdrop-blur-md rounded-xl p-5 sm:p-6 md:p-8">
        <h2 className="funnel-sans-uniquifier text-lg sm:text-xl md:text-2xl text-[#FBAF00] font-semibold mb-3">
          {title}
        </h2>

        <div className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
