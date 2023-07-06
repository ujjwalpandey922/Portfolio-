import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utls/motion";
import { services } from "../Constants";
import { SectionWrapper } from "../hoc";


const SingleService = ({index,title ,icon})=>{
    return (
      <Tilt className="w-full sm:w-[250px]">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
}

const About = () => {
  return (
    <div className="md:mt-5 mt-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRO</p>
        <h2 className={styles.sectionHeadText}>OVERVIEW...</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary max-w-3xl leading-[30px] text-[17px]"
      >
        Passionate FOSS enthusiast with 2+ years of teaching experience. Strong
        expertise in front-end web development using Vanilla JS, React, and MERN
        stack. Completed multiple solo projects and a web3 project. Excited to
        join your company, contribute, and continue learning. 
      </motion.p>
      <div className="flex flex-wrap gap-8 p-4 mt-4 mb-4 ">
        {/* // passing all the props.......... */}
        {services.map((service, index) => (
          <SingleService key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About,"About");
