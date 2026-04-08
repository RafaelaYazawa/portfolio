import Header from "../components/Header";
import ExperienceSection from "../components/ExperienceSection";

const Experience = () => {
  return (
    <div className="bg-[url('../../public/polar.jpg')] bg-center bg-cover bg-no-repeat relative">
      <Header />
      <div className="px-4 py-6 sm:px-8 md:px-12 lg:px-16 mx-auto">
        <h1 className="text-center text-[#FBAF00] text-2xl sm:text-3xl md:text-4xl md:text-left font-semibold mb-4 md:mx-4 md:px-8">
          Experience
        </h1>
        <ExperienceSection title="Le Wagon">
          <p className="font-medium leading-relaxed text-base sm:text-lg text-shadow-lg">
            In 2025, I went on a rewarding journey in Tokyo. The bootcamp lasted
            two and a half months of intensive learning, where I met people from
            many countries and completely different backgrounds.
            <br />
            When I started, I knew almost nothing about web development — only a
            bit of HTML and CSS — so everything felt new, challenging, and
            exciting. We began with Ruby as our backend language and then moved
            into Ruby on Rails to build full applications. Along the way, we
            also worked with SQL, HTML, CSS, and JavaScript.
            <br />
            Our days were structured around a short morning lecture, followed by
            hands-on coding challenges in the afternoon. The pace was fast and
            demanding, but also incredibly enriching.
            <br />
            In the final three weeks, all the theory came together as we worked
            in teams to create our own real projects from scratch.
          </p>
        </ExperienceSection>

        <ExperienceSection title="Hackathon">
          <p className="font-medium leading-relaxed text-base sm:text-lg text-shadow-lg">
            In June, I participated in an online Hackathon hosted by Bolt. I
            joined as a solo developer, which made the challenge even more
            intense, especially with the time limit and the open-ended nature of
            the project.
            <br />
            A few days before finding about the hackathon, I had an idea for an
            application designed to help people develop communications skills
            through community feedback - a space where people could receive
            encouragement or constructive comments. The idea came from a
            personal struggle of mine: expressing my self comfortably in
            different situations.
            <br />
            For the hackathon, we had to submit our idea into Bolt AI, which
            generated a starter template for us. Bolt AI only supported React
            and TypeScript - two technologies I had never used before (aside
            from a short workshop at Le Wagon).
            <br />
            Despite that, the experience pushed me to learn quickly, adapt, and
            understand how React works in a real project context. It was
            demanding, but incredibly rewarding.
          </p>
        </ExperienceSection>

        <ExperienceSection title="Portfolio">
          <p className="font-medium leading-relaxed text-base sm:text-lg text-shadow-lg">
            This portfolio was build with React, featuring reusable components,
            page transitions, and small interactive elements build with a mix of
            libraries.
            <br />
            In the beginning, I didn't know which direction to take - just blank
            canvas and too many possibilities. But once I started building, the
            flow appeared naturally, piece by piece.
            <br />
            The design follows a journey through the sky. Each pages moves
            through a different atmosphere, reflecting the way growth really
            happens: steadily, intentionally, and always transitioning.
          </p>
        </ExperienceSection>
      </div>
    </div>
  );
};

export default Experience;
