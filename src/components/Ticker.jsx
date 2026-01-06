import { motion } from "motion/react";

const Ticker = ({ hobbiesPic, meFriendsPic }) => {
  const picWidth = "200px";
  const picHeight = "120px";

  const doubleHobbyPics = [...hobbiesPic, ...hobbiesPic];
  const doubleMeFriendsPic = [...meFriendsPic, ...meFriendsPic];

  return (
    <div className="h-screen overflow-hidden">
      <div className="hidden md:flex gap-6 justify-center">
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "-50%" }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          <div className="flex flex-col gap-4">
            {doubleHobbyPics.map((pic, index) => {
              return (
                <img
                  src={`hobbiesEtc/${pic}`}
                  alt=""
                  width={picWidth}
                  height={picHeight}
                  className="border-2 border-solid rounded-md"
                  key={index}
                />
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "-50%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          <div className="flex flex-col gap-4">
            {doubleMeFriendsPic.map((pic, index) => {
              return (
                <img
                  src={`meFriends/${pic}`}
                  alt=""
                  width={picWidth}
                  height={picHeight}
                  className="border-2 border-solid rounded-md"
                  key={index}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ticker;
