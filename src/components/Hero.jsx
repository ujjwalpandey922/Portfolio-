import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import ParticlesContainer from "./canvas/Particles";
const Hero = () => {
  return (
    <section className="w-full relative mx-auto h-screen">
      <div
        className={`flex flex-row gap-6 items-start mx-auto max-w-7xl absolute inset-0 top-[120px] ${styles.paddingX}`}
      >
        <div className="flex flex-col justify-center items-center mt-6">
          <div className="w-5 h-5 rounded-full bg-green-600"></div>
          <div className="w-1 h-40 sm:h-80 green-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Yo!
            <span className="text-green-700 "> UJJWAL HERE</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I Do Software Development.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <ParticlesContainer />
      <div className="flex justify-center items-center w-full  absolute bottom-[-1rem] z-10">
        <a href="#About">
          <div className="flex justify-center items-start p-2 border-secondary border-4 rounded-3xl sm:w-[35px] sm:h-[64px] w-[30px] h-[54px] cursor-pointer">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2  rounded-full bg-secondary "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
