import { testimonials } from "../Constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utls/motion";
import { motion } from "framer-motion";
const Testimonial = ({
  testimonial,
  name,
  designation,
  company,
  image,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl w-full sm:w-[300px] flex flex-col justify-between"
    >
      <p className="text-white text-[48px] font-black"> "</p>
      <div className="mt-1">
        <p className="text-white text-[24px] tracking-wider ">{testimonial}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-white font-medium text-[16px]">
            {" "}
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt="Testimonials image"
          className="w-10 h-10 object-contain rounded-full"
        />
      </div>
    </motion.div>
  );
};
const Feedbacks = () => {
  return (
    <>
      <div className="mt-8 bg-green-500 rounded-xl">
        <div
          className={`${styles.padding} bg-tertiary rounded-3xl min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What Others Say About Me</p>
            <h2 className={styles.sectionHeadText}>TESTIMONIALS...</h2>
          </motion.div>
        </div>
      </div>
      <div className={`${styles.paddingX} flex flex-wrap gap-12 pb-14 -mt-12`}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={testimonial.name} {...testimonial} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
