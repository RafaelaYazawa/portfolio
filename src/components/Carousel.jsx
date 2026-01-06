import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Carousel = ({ hobbiesPic, mePics }) => {
    const allImages = [
        ...hobbiesPic.map(img => `hobbiesEtc/${img}`),
        ...mePics.map(img => `meFriends/${img}`)
    ]

    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = ((page % allImages.length) + allImages.length) % allImages.length;

    const paginate = (newDirection) => {
        setPage([page + newDirection], newDirection);
    }
    
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300, 
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    }

    // console.log(allImages)
    
    return (
        <div className="relative w-full flex flex-col items-center py-5">
            <div className="relative w-72 h-80 overflow-hidden rounded-xl border border-white/10">
                <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={allImages[imageIndex]}
                    src={allImages[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full h-full object-cover"
                    />
                </AnimatePresence>
            </div>

            <div className="flex gap-6 p-3">
                <button onClick={() => paginate(-1)} className="px-3 py-1  rounded">
                    Prev
                </button>

                <button onClick={() => paginate(1)} className="px-3 py-1 bg-white/70 rounded">
                    Next
                </button>
            </div>
        </div>
    )
}

export default Carousel;