import Header from "../components/Header";
import Ticker from "../components/Ticker";
import Carousel from "../components/Carousel";

const About = () => {
  const hobbiesPic = [
    "eye.jpg",
    "idol.jpg",
    "r.jpg",
    "rose.JPG",
    "starfield.jpg",
    "mySunset.jpg",
    "tokyo.jpg",
    "eye2.jpg",
    "korean.JPG",
    "muchaMuseum.JPG",
    "lego.JPG",
    "japanese.JPG",
  ];
  const meFriendsPic = [
    "waterbomb.JPG",
    "meminion.JPG",
    "euandc.JPG",
    "me.jpg",
    "meu.jpeg",
    "korea.JPG",
    "lotte.JPG",
    "lotteFriends.JPG",
    "train.JPG",
    "toyota.JPG",
    "eu.jpg",
    "train2.JPG",
    "lalaport.jpg",
  ];

  return (
    <div className="min-h-screen md:min-h-[100dvh] lg:h-screen overflow-hidden">
      <Header />
      <div className=" bg-[url(night.jpg)] bg-cover bg-no-repeat block md:flex justify-around">
        <div className="fade-effect justify-center hidden md:block whitespace-nowrap">
          <Ticker hobbiesPic={hobbiesPic} meFriendsPic={meFriendsPic} />
        </div>

        <div className="p-6 sm:p-8 text-start w-full md:w-1/2">
          <div>
            <h1 className="text-[#FBAF00] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mx-4 md:px-8">
              About me
            </h1>

            <p className="leading-relaxed mx-2 sm:mx-4 pt-2 px-2 sm:px-4 md:px-8 text-base sm:text-lg md:text-xl">
              I like to do many things, especially if I have the opportunity to
              learn something. In my free time, I usually study japanese or
              korean, draw, paint, or read.
              <br />
              In 2025, the beginning of my programming journey, I did Le Wagon's
              web development bootcamp, and it was an amazing experience.
              <br />
              Hopefully, I will be able to accomplish many more things.
              <br />I am not so good with words, so here are some photos to get
              to know me!
            </p>
          </div>
        </div>

        <div className="fade-effect justify-center w-full block md:hidden">
          <Carousel hobbiesPic={hobbiesPic} mePics={meFriendsPic} />
        </div>
      </div>
    </div>
  );
};

export default About;
