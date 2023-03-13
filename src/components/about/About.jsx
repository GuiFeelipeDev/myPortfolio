import React from "react"
import { motion } from "framer-motion"
import profilePic from "../../assets/img/profilePic.png"
import { aboutVariants } from "../../utils/motion"
const About = ({ refA }) => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={aboutVariants}
        viewport={{ once: true, amount: 0.25 }}
        className="about-main"
        id="about"
        ref={refA}
      >
        <div className="about-content">
          <h2 className="default-titles">
            {"<"}
            <b>AboutMe</b>
            {"/>"}
          </h2>

          <p>
            Hello, I'm Guilherme Felipe Pereira, a Web Developer who is
            passionate about building web tools. My interest in programming
            began during my Computer Science degree in 2021, where I discovered
            Web Development and became fascinated by it.
          </p>
          <p>
            {"     "}I began my work by using basic HTML and CSS, but I found my
            true calling when I started using JavaScript. In 2022, I discovered
            JS frameworks, with a particular interest in React.js, and I started
            building Web Apps with it.
          </p>
        </div>
        <div className="img-edit">
          <div className="img-before"></div>
          <div className="img-after"></div>
          <img src={profilePic} alt="" />
        </div>
      </motion.div>
    </div>
  )
}

export default About
