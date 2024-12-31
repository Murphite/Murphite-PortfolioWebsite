import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion' ;

import { styles } from '../styles';
import {services }from '../constants';
import  {fadeIn, textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc';


const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px]
        shadow-card'
      >
        <div
         options={{
          max: 45, 
          scale: 1,
          speed: 450
         }}
         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
         flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text- [20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[22px] max-w-8xl leading-[40px]'
      >
        I am a skilled Software Engineer with extensive experience in C#, React, and frameworks like .NET. I specialize in
         building secure, scalable, and efficient software solutions tailored to meet real-world needs. As a quick learner,
          I enjoy adapting to new technologies and staying at the forefront of industry trends.

        I thrive in collaborative environments, working closely with clients to bring their ideas to life by
        creating user-friendly and innovative solutions that solve complex problems.

        Let’s connect and work together to turn your ideas into reality!

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 text-[22px]'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")