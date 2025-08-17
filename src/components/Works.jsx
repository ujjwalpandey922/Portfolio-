import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { live } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../Constants';
import { fadeIn, textVariant } from '../utls/motion';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Can Do</p>
        <h2 className={styles.sectionHeadText}>PROJECTS...</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
        {projects.map((project, index) => (
          <motion.dev
            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
            key={project.name}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary p-5 rounded-3xl sm:w-[340px] w-full h-full"
            >
              <div className="relative w-full h-[250px]">
                <img
                  src={project.image}
                  alt={project.tags}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-1 card-img_hover  gap-2  ">
                  {/* ----------GIT REPO----------- */}
                  <div
                    onClick={() =>
                      window.open(project.source_code_link, '_blank')
                    }
                    className="h-7 w-7 black-gradient rounded-full cursor-pointer hover:h-8 hover:w-8 "
                  >
                    <img src={github} alt="github" />
                  </div>
                  {/* ----------LIVE PROJECTS----------- */}
                  <div
                    onClick={() =>
                      window.open(project.live_code_link, '_blank')
                    }
                    className="h-7 w-7 black-gradient rounded-full cursor-pointer hover:h-8 hover:w-8"
                  >
                    <img
                      src={live}
                      alt="github"
                      className=" rounded-full object-cover h-7 w-7 hover:h-8 hover:w-8"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white text-xl font-bold">{project.name}</h3>
                <p className="text-gray-400 text-sm font-semibold mt-4 leading-5 truncate">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag.name} className={`${tag.color} text-[14px]`}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </Tilt>
          </motion.dev>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'Projects');
