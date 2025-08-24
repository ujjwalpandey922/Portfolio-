import React, { useRef, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn } from '../utls/motion';
import { styles } from '../styles';
import { ComputersCanvas, EarthCanvas } from './canvas';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((pre) => ({ ...pre, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_rz12aqe',
        'template_bdk9pur',
        {
          from_name: form.name,
          to_name: 'Ujjwal Pandey',
          from_email: form.email,
          to_email: 'ujjwalpandey922@gmail.com',
          message: form.message,
        },
        'FyJzCSJKiIVBlBNpc'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        //reset the form........
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);

        alert('Something Went Wrong Try Again...');
      });
  };

  return (
    <div className=" xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden ">
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[.75] bg-black-100 rounded-2xl p-4 sm:p-8"
      >
        <p className={styles.sectionSubText}>How to get in touch</p>
        <h2 className={styles.sectionHeadText}>CONTACT...</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex- flex-col gap-4 mt-6 sm:mt-12"
        >
          <label className="flex flex-col gap-2 mt-4">
            <span className="text-white text-sm ">What's Your Name?</span>
            <input
              type="text"
              className="border-none outline-none py-4 px-4 text-white-100 bg-tertiary rounded-lg"
              name="name"
              value={form.name}
              placeholder="Enter Name Here..."
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-2 mt-4">
            <span className="text-white text-sm ">What's Your Email?</span>
            <input
              type="email"
              className="border-none outline-none py-4 px-4 text-white-100 bg-tertiary rounded-lg"
              name="email"
              value={form.email}
              placeholder="Enter Email Here..."
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-2 mt-4">
            <span className="text-white text-sm ">What's Your Message?</span>
            <textarea
              rows="7"
              className="border-none outline-none py-4 px-4 text-white-100 bg-tertiary rounded-lg"
              name="message"
              value={form.message}
              placeholder="Enter Message Here..."
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary mt-4 py-4 w-full rounded-xl shadow-md shadow-primary font-bold text-white"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* <EarthCanvas /> */}
        <ComputersCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
