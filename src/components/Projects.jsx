import React from 'react';
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};



const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/download.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Nextjs 15 Project</h3>
          <p>
            TugsBD – A Modern Web & App Development Agency Website.
            Developed a responsive and visually appealing website for TugsBD, 
            a tech agency offering scalable web and mobile solutions.
          </p>
          <div className="project-tech">
            <span>Next.js 15</span>
            <span>TailwindCSS</span>
            <span>AOS (Animate On Scroll)</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/aora.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Social Media Dashboard</h3>
          <p>
           This is a cross-platform mobile application built using React Native, 
           serving as a base for developing scalable and modular mobile apps. 
           The project includes reusable components, navigation structure, and integration with native features — 
           making it a solid foundation for future feature expansion.
          </p>
          <div className="project-tech">
            <span>React Native</span>
            <span>JavaScript</span>
            <span>Android & iOS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/scraping.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Web Scraping with Python</h3>
          <p>
            This project showcases multiple Python-based web scraping scripts built with BeautifulSoup and Requests. 
            It demonstrates how to extract structured data such as product details, links, 
            or pricing from different websites for learning or automation purposes.
          </p>
          <div className="project-tech">
            <span>Python</span>
            <span>BeautifulSoup</span>
            <span>Requests</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>

  )
}

export default Projects
