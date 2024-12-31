import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, demo } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard = ({index, name, description, tags, image, source_code_link, source_code_link2}) => {
  return(
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
          />
        </div>
        <div className='absolute inset-0 flex justify-end m-3
        card-img_hover'>
          <div
          onClick={
            () => window.open(source_code_link, "blank")
          }
          className='black-gradient w-10 h-10 rounded-full flex
          justify-center items-center cursor-pointer'
          >
            <img
            src={github}
            alt="github"
            className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <div
            onClick={
              () => window.open(source_code_link2, "blank")
            }
            className='black-gradient w-10 h-10 rounded-full flex
          justify-center items-center cursor-pointer'
          >
            <img
              src={demo}
              alt="demo"
              className='w-1/2 h-1/2 object-contain'
            />
          </div>

        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) =>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`} >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>

  )
}


const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My Technical Endeavours</p>
        <h2 className={styles.sectionHeadText}> Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[22px] max-w-8xl leading-[40px]'
        >
          The projects I present demonstrate my competencies and expertise using tangible instances of my work in the actual world. Each project is concisely explained and includes connections to both code repositories and live demonstrations. These projects showcase my aptitude for tackling intricate problems, adapting to various technologies, and efficiently overseeing projects.
        </motion.p>

      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper(Works, "")